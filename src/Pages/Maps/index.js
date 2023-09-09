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
import WeatherInfo from "../../Components/WeatherView";

const weatherPoints = [
  [77.383643, 68.678616],
  [75.916033, 52.623848],
  [73.186969, 47.931851],
  [71.015377, 49.613523],
  [70.356589, 58.090523],
  [69.363378, 33.6548],
  [73.646068, 64.650996],
  [73.617635, 72.651019],
  [72.368878, 73.79388],
  [71.482035, 73.087996],
  [68.617355, 73.995561],
  [66.459305, 71.911522],
];

function Home() {
  const [showing, setShowing] = useState(false);
  Number(localStorage.getItem("chosen"));
  if (JSON.parse(localStorage.getItem("cached_data")).length <= 0) {
  }

  const json_data = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: 1,
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
          id: 2,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
    linesView.push(
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
  });

  const weatherPlacemarks = weatherPoints.map((element) => {
    const props = {
      title: "Мурманск",
      temp: -9,
      percents: 70,
      ms: 5,
      pressure: 762,
      weather_status: "Light Snow",
    };
    return (
      <Placemark
        hintContent="Саббета 2"
        geometry={element}
        options={{
          iconImageSize: [30, 30],
          draggable: false,
          preset: "islands#greenIcon",
          // hideIconOnBalloonOpen: false,
          openEmptyHint: true,

          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "weather1.svg",
        }}
        properties={{
          hintContent: "Саббета 3",
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
          font-size: 16px;">${props.title}</div> <div classname="weather__wrapper" style="
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
                font-size: 50px;margin-top:30px;">${props.temp}°</div>
                <div style="display:flex;align-items: center;flex-direction:column;">
                <div classname="weather__temperature_props_title" style="color: #BFD0FF;
                font-size: 16px;
                margin-bottom: 2px;">${props.percents}%</div>
                <div classname="weather__temperature_props_title" style="color: #BFD0FF;
                font-size: 16px;
                margin-bottom: 2px;">${props.ms} м/с</div>
                <div classname="weather__temperature_props_title" style="color: #BFD0FF;
                font-size: 16px;
                margin-bottom: 2px;">${props.pressure} мм.</div></div>
              </div>
              <div classname="weather__wrap__visual" style="  
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;align-items: center;
        flex:3;">
                  <img src="weather1.svg" classname="weather__icon" style="
                  width: 56px;
                  height: 56px;">
                  <div classname="weather__status__title" style="color: #2F46B7;
                  font-size: 18px;
                  line-height: 110%;
                  font-weight: 300;
                  margin-left: 6px;">Light Snow</div>
              </div>
          </div>
      </div>`,
        }}
      />
    );
  });

  return (
    <div className="mapPage">
      <YMaps>
        <Map
          defaultState={{ center: [73, 65], zoom: 5.4 }}
          style={{ width: "100%", height: "89vh" }}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        >
          {linesView}
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
                '<div class="loc-desc"><img src="tate.png"  style="border-radius:20px;width:100px;height: 100px"/></div>',
            }}
          />
        </Map>
        <MapWindow />
        <Weather showing={showing} setShowing={setShowing} />
      </YMaps>
    </div>
  );
}

export default Home;
