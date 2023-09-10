import csv
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.requests import Request
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import json
import requests
import urllib3
import algo


urllib3.disable_warnings()
#weatherToken = "efce0431-1d8b-48d0-87db-d8c5d69ad6a0"
weatherToken = "efce0"
app = FastAPI()

csv_file_path = "output.csv"

origins = ["*"]
app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"],
                   allow_headers=["*"])


def process_forecast(forecast, full=False):
    weird_conditions = {'drizzle': 'морось', 'light-rain': 'небольшой дождь',
                        'rain': 'дождь', 'moderate-rain': 'умеренно сильный', 'heavy-rain': 'сильный дождь',
                        'continuous-heavy-rain': 'длительный сильный дождь', 'showers': 'ливень',
                        'wet-snow': 'дождь со снегом', 'light-snow': 'небольшой снег', 'snow': 'снег',
                        'snow-showers': 'снегопад', 'hail': 'град', 'thunderstorm': 'гроза',
                        'thunderstorm-with-rain': 'дождь с грозой', 'thunderstorm-with-hail': 'гроза с градом'
                        }
    result = ''
    temp_min = 100
    temp_max = -100
    wind_speed_max = -1
    wind_gust_max = -1
    press_min = 2000
    press_max = -1
    temp_avg = None
    conditions = set()
    img_link = ""

    temp_min = min(temp_min, part.get("temp_min", temp_min))
    temp_max = max(temp_max, part.get("temp_max", temp_max))
    press_min = min(press_min, part["pressure_mm"])
    press_max = max(press_max, part["pressure_mm"])
    wind_speed_max = max(wind_speed_max, part["wind_speed"])
    wind_gust_max = max(wind_gust_max, part['wind_gust'])
    temp_avg = part.get("temp_avg", part.get("feels_like", 0))
    conditions.add(part["condition"])

    if full:
        result += f'Средняя температура днем составит {temp_avg}°C. ' if temp_avg is not None else ""
    result += f"Жарковато, температура днем достигнет {temp_max}°C. " \
        if temp_max >= 25 else ""
    result += f"Холодно, температура днем опустится до {temp_min}°C." \
        if temp_min <= -10 else ""
    result += f"Ветренно, скорость ветра будет достигать {wind_speed_max} м/с c порывами до {wind_gust_max} м/с. " \
        if wind_gust_max > 10 else ""

    for condition in conditions.copy():
        if condition not in weird_conditions:
            conditions.discard(condition)
    conditions = set(map(lambda x: weird_conditions[x], conditions))
    result += f"Ожидается {', '.join(conditions)}. " if conditions else ""
    return {'text': result, "img": img_link}


async def get_weather(latitude: float, longitude: float, full=True):
    weather_request = f'https://api.weather.yandex.ru/v2/informers?lat={latitude}&lon={longitude}&lang=ru_RU'
    response = requests.get(weather_request, headers={'X-Yandex-API-Key': weatherToken})

    if response:
        response = json.loads(response.text)
        return ({
            "temp": response["fact"]["temp"],
            "icon": f'https://yastatic.net/weather/i/icons/funky/dark/{response["fact"]["icon"]}.svg',
            "wind_speed": response["fact"]["wind_speed"],
            "pressure_mm": response["fact"]["pressure_mm"],
            "condition": response["fact"]["condition"],
            "humidity": response["fact"]["humidity"]
        })
    else:
        return "Ошибка во время получения погоды"


class Item(BaseModel):
    name: str


class Coords(BaseModel):
    x: float
    y: float


@app.get("/")
async def root():
    return {"message": "Конь"}


@app.post("/uploadfile")
async def create_item(array: Item):
    fieldnames = ['Наименование', 'IMO', 'Ледовый класс', 'Скорость', 'start_point', 'end_point', 'start', 'end']
    data = list(
        map(dict, list(map(lambda x: list(zip(fieldnames, x[0].split(';'))), json.loads(array.name)["data"]))[1:]))
    # print(data, fieldnames)
    print(data)

    # Open the CSV file in write mode and write the data.
    with open(csv_file_path, mode="w", newline="", encoding='utf-8') as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        # Write the header row.
        writer.writeheader()

        # Write the data rows.
        for row in data:
            writer.writerow(row)

    return algo.setting_path(csv_file_path)


@app.post("/getWeather")
async def getWeather(coords: Coords):
    print(coords.x, coords.y)
    result = await get_weather(coords.x, coords.y, False)
    return result
