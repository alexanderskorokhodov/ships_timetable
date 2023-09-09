import React, { useState } from "react";
import "./index.scss";
import CruiseTable from "../CruiseTable"

function MapWindow() {
  const json_data = [
    {
      id: 1,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      name: "YAMAL",
      IMO: "9752084",
      MMSI: "33187510",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 2,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      name: "YAMAL",
      IMO: "9752084",
      MMSI: "33187510",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 3,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      name: "YAMAL",
      IMO: "9752084",
      MMSI: "33187510",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 4,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      name: "YAMAL",
      IMO: "9752084",
      MMSI: "33187510",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 5,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      name: "YAMAL",
      IMO: "9752084",
      MMSI: "33187510",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 6,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      name: "YAMAL",
      IMO: "9752084",
      MMSI: "33187510",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 7,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      name: "YAMAL",
      IMO: "9752084",
      MMSI: "33187510",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 8,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      name: "YAMAL",
      IMO: "9752084",
      MMSI: "33187510",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
  ];

  let cruisesView = json_data.map((element) => {
    return (
      <div
        className="cruise pointer"
        onClick={() => {
          changeState(json_data.indexOf(element));
        }}
      >
        <h4>Рейс №{element.id}</h4>
        <p>Начало: {element.start}</p>
        <p>Конец: {element.end}</p>
      </div>
    );
  });

  const [state, changeState] = useState(-1);

  return (
    <div className="floatwindow">
      {state < 0 ? (
        <div className="recomendations">
          <div className="top">
            <h4>Рекомендации для рейсов</h4>
            <img
              className="pointer"
              src={state === -2 ? "plus.svg" : "minus.svg"}
              onClick={() => {
                changeState(state === -1 ? -2 : -1);
              }}
            />
          </div>
          <div className="cruises">{state === -1 ? cruisesView : ""}</div>
        </div>
      ) : (
        <div className="cruiseinfo">
          <div className="top">
            <h4>Рейс №{json_data[state].id}</h4>
            <img
              className="pointer"
              src="close.svg"
              onClick={() => {
                changeState(-1);
              }}
            />
          </div>
            {CruiseTable(json_data[state])}
        </div>
      )}
    </div>
  );
}

export default MapWindow;
