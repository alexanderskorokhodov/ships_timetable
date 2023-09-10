import "./index.scss";
import React, { useEffect, useState } from "react";
import {
  YMaps,
  Map,
  GeoObject,
  TypeSelector,
  Placemark,
  Button,
} from "@pbe/react-yandex-maps";
import MapWindow from "../../Components/MapWindow";
import Weather from "../../Components/WeatherButton";
// import WeatherInfo from "../../Components/WeatherView";
import Service from "../../Service";

const weatherData = [
  [
    77.383643,
    68.678616,
    "Карское море",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc.svg",
    "Облачно",
    745,
    87,
    -10,
    13.8,
  ],
  [
    75.916033,
    52.623848,
    "Баренцево море",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc_-ra.svg",
    "Пасмурно",
    746,
    97,
    -1,
    12.3,
  ],
  [
    73.186969,
    47.931851,
    "Баренцево море",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc.svg",
    "Облачно",
    746,
    93,
    -1,
    16.6,
  ],
  [
    71.015377,
    49.613523,
    "Баренцево море",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc.svg",
    "Облачно",
    753,
    93,
    2,
    13.1,
  ],
  [
    70.356589,
    58.090523,
    "пролив Карские Ворота",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc.svg",
    "Пасмурно",
    755,
    94,
    3,
    9.5,
  ],
  [
    69.363378,
    33.6548,
    "Мурманск",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/bkn_d.svg",
    "Облачно с прояснениями",
    749,
    71,
    12,
    13.6,
  ],
  [
    73.646068,
    64.650996,
    "Карское море",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc_-ra.svg",
    "Небольшой дождь",
    751,
    90,
    1,
    13,
  ],
  [
    73.617635,
    72.651019,
    "Карское море",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc.svg",
    "Пасмурно",
    750,
    89,
    0,
    12.3,
  ],
  [
    72.368878,
    73.79388,
    "Обская губа",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc_-ra.svg",
    "Небольшой дождь",
    750,
    91,
    2,
    10.8,
  ],
  [
    71.482035,
    73.087996,
    "полуостров Явай",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc_-ra.svg",
    "Небольшой дождь",
    754,
    94,
    6,
    9,
  ],
  [
    68.617355,
    73.995561,
    "Обская губа",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc_-ra.svg",
    "Небольшой дождь",
    759,
    81,
    8,
    1,
  ],
  [
    66.459305,
    71.911522,
    "Обская губа",
    "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc.svg",
    "Пасмурно",
    759,
    77,
    4,
    5,
  ],
];
const service = new Service();

const toRoad = {
  "01": 2,
  "05": 1,
  "54": 6,
  "43": 5,
  "12": 4,
  "23": 3,
  "36": 7,
  '67': 8,
  "78": 9,
  "89": 10,
  "910": 11,
  "911": 12,
  "1112": 13,
  "1113": 14,
  "10": 2,
  "50": 1,
  "45": 6,
  "34": 5,
  "21": 4,
  "32": 3,
  "63": 7,
  '76': 8,
  "87": 9,
  "98": 10,
  "109": 11,
  "119": 12,
  "1211": 13,
  "1311": 14,
};

const toCords =  {0:  [46.142578125, 69.93030017617484],

1:[57.74414062500001, 70.4367988185464],

2: [66.20361328125, 73.53462847039683],

3: [71.54296874999999, 73.77577986189993],

5: [55.01953125, 76.2059670431415],

6: [68.90625, 77.44694030325893],


7: [73.125, 72.76406472320436],

8: [74.02587890625, 72.63337363853837],

9: [72.92724609375, 72.0739114882038],

11: [72.59765625, 71.30783606806223],


10: [72.2021484375, 71.24435551310674],

13: [73.32275390625, 70.9722375547307],


12: [73.7127685546875, 71.03303495416577],


14: [73.52874755859375, 68.66455067163206]}





function Home() {
  const [showing, setShowing] = useState(false);

  const data =
    JSON.parse(localStorage.getItem("cached_data")).length > 0
      ? JSON.parse(localStorage.getItem("cached_data"))[
          localStorage.getItem("chosen")
        ].data
      : [];

  const [state, changeState] = useState(-1);
  const [id, setId] = useState(0)

  const json_data = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: 2,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [46.142578125, 69.93030017617484],
            [57.74414062500001, 70.4367988185464],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 4,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [57.74414062500001, 70.4367988185464],
            [66.20361328125, 73.53462847039683],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 3,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [66.20361328125, 73.53462847039683],
            [71.54296874999999, 73.77577986189993],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 1,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [46.142578125, 69.93030017617484],
            [55.01953125, 76.2059670431415],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 6,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [55.01953125, 76.2059670431415],
            [68.90625, 77.44694030325893],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 5,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [68.90625, 77.44694030325893],
            [71.54296874999999, 73.77577986189993],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 7,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [71.54296874999999, 73.77577986189993],
            [73.125, 72.76406472320436],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 8,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [73.125, 72.76406472320436],
            [74.02587890625, 72.63337363853837],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 9,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [74.02587890625, 72.63337363853837],
            [72.92724609375, 72.0739114882038],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 10,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [72.92724609375, 72.0739114882038],
            [72.59765625, 71.30783606806223],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 11,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [72.59765625, 71.30783606806223],
            [72.2021484375, 71.24435551310674],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 12,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [72.59765625, 71.30783606806223],
            [73.32275390625, 70.9722375547307],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 13,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [73.32275390625, 70.9722375547307],
            [73.7127685546875, 71.03303495416577],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 14,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [73.32275390625, 70.9722375547307],
            [73.52874755859375, 68.66455067163206],
          ],
        },
      },
    ],
  };
  let linesView = [];
  json_data.features.forEach((element) => {
    console.log(data, state);
    let new_ = [];
    if (state >= 0) {
      for (let i = 0; i + 1 < data[state][6].length; i++) {
        new_.push(
          toRoad[String(data[state][6][i]) + String(data[state][6][i + 1])]
        );
      }
      console.log(data[6]);
      if (state >= 0 && new_.includes(element.properties.id)) {
        return linesView.push(
          <GeoObject
            geometry={{
              type: "LineString",
              coordinates: [
                element.geometry.coordinates[0].reverse(),
                element.geometry.coordinates[1].reverse(),
              ],
            }}
            options={{
              geodesic: true,
              strokeWidth: 4,
              strokeColor: "#00FF7F",
            }}
          />
        );
      } else {
        return linesView.push(
          <GeoObject
            displayName={element.properties.id}
            geometry={{
              type: "LineString",
              coordinates: [
                element.geometry.coordinates[0].reverse(),
                element.geometry.coordinates[1].reverse(),
              ],
            }}
            options={{
              geodesic: true,
              strokeWidth: 4,
              strokeColor: "#142782",
            }}
          />
        );
      }
    }
  });

  const weatherPlacemarks = weatherData.map((el) => {
    // console.log(weather_data)
    return (
      <Placemark
        geometry={[el[0], el[1]]}
        options={{
          iconImageSize: [50, 50],
          draggable: false,
          preset: "islands#greenIcon",
          // hideIconOnBalloonOpen: false,
          openEmptyHint: false,

          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: el[3],
        }}
        properties={{
          balloonContent: `<div classname="weather" style="
          margin: 5px;
          padding:10px;
          width: 250px;
          height: 200px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          "> <div classname="weather__title" style="color: #2F46B7;
          font-size: 16px;">${el[2]}</div> <div classname="weather__wrapper" style="
          display: flex;
          flex-direction: row;
          height: 150px;
          ">
              <div classname="weather__wrap__params" style="
        display: flex;
        flex-direction: column;
        height: 150px;
        flex:4;
        justify-content: space-between;align-items: center;
    ">
                <div classname="weather__temperature_title" style="color: #2F46B7;
                font-size: 50px;margin-top:30px;">${el[7]}°</div>
                <div style="display:flex;align-items: center;flex-direction:column;">
                <div classname="weather__temperature_props_title" style="color: #BFD0FF;
                font-size: 16px;
                margin-bottom: 2px;">${el[6]}%</div>
                <div classname="weather__temperature_props_title" style="color: #BFD0FF;
                font-size: 16px;
                margin-bottom: 2px;">${el[8]} м/с</div>
                <div classname="weather__temperature_props_title" style="color: #BFD0FF;
                font-size: 16px;
                margin-bottom: 2px;">${el[5]} мм.</div></div>
              </div>
              <div classname="weather__wrap__visual" style="  
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;align-items: center;
        flex:3;">
                  <img src=${el[3]} classname="weather__icon" style="
                  width: 56px;
                  height: 56px;">
                  <div classname="weather__status__title" style="color: #2F46B7;
                  font-size: 18px;
                  line-height: 110%;
                  font-weight: 300;
                  margin-left: 6px;">${el[4]}</div>
              </div>
          </div>
      </div>`,
        }}
      />
    );
  });

  // const [time, setTime] = useState(Date.now());

  // useEffect(() => {
  //   if (state >= 0){
  //   const interval = setInterval(() => setTime(Date.now()), 1000);
  //   return () => {
  //     clearInterval(interval);
  //     setId((id+1) % data[state][6].length)

  //   };
  // }
  // }, []);

  return (
    <div className="mapPage">
      <YMaps>
        <Map
          defaultState={{ center: [73, 65], zoom: 5.4 }}
          style={{ width: "100%", height: "89vh" }}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        >
          {linesView}
          {state >= 0 ? <Placemark
            geometry={toCords[data[state][6][id]].reverse()}
            options={{
              iconImageSize: [30, 30],
              draggable: false,
              preset: "islands#greenIcon",
              // hideIconOnBalloonOpen: false,
              openEmptyHint: true,

              iconLayout: "default#image",
              // Своё изображение иконки метки.
              iconImageHref: "ship.svg",
            }}
            properties={{
              hintContent: data[state][0],
              balloonContent:
                '<div class="loc-desc"><img alt="" src="tate.png"  style="border-radius:20px;width:100px;height: 100px"/></div>',
            }}
          /> : ""}
          
          {showing ? weatherPlacemarks : ""}
          <TypeSelector options={{ float: "right" }} />
          <Placemark
            displayName="Саббета 1"
            geometry={[68.66455067163206, 73.52874755859375]}
            options={{
              iconImageSize: [30, 30],
              draggable: false,
              preset: "islands#greenIcon",
              hideIconOnBalloonOpen: false,
              openEmptyHint: true,

              iconLayout: "default#image",
              // Своё изображение иконки метки.
              iconImageHref: "point.png",
            }}
            properties={{ hintContent: "Саббета 1" }}
          />
          <Placemark
            geometry={[71.03303495416577, 73.7127685546875]}
            options={{
              iconImageSize: [30, 30],
              draggable: false,
              preset: "islands#greenIcon",

              iconLayout: "default#image",
              // Своё изображение иконки метки.
              iconImageHref: "point.png",
            }}
            properties={{
              hintContent: "Саббета 2",
            }}
          />
          <Placemark
            hintContent="Саббета 2"
            geometry={[71.24435551310674, 72.2021484375]}
            options={{
              iconImageSize: [30, 30],
              draggable: false,
              preset: "islands#greenIcon",
              // hideIconOnBalloonOpen: false,
              openEmptyHint: true,

              iconLayout: "default#image",
              // Своё изображение иконки метки.
              iconImageHref: "point.png",
            }}
            properties={{
              hintContent: "Саббета 3",
              balloonContent:
                '<div class="loc-desc"><img alt="" src="tate.png"  style="border-radius:20px;width:100px;height: 100px"/></div>',
            }}
          />
        </Map>
        <MapWindow changeState={changeState} state={state} json_data={data} />
        <Weather showing={showing} setShowing={setShowing} />
      </YMaps>
    </div>
  );
}

export default Home;
