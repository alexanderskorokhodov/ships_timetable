import React, { useState } from "react";
import "./index.scss";
import CruiseTable from "../CruiseTable"

function MapWindow({json_data, changeState, state}) {
  
  let cruisesView = json_data.map((el, id) => {

    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timezone: 'UTC'
    };

    let start = new Date(el[4]).toLocaleString("ru", options)
    let end = new Date(el[5]).toLocaleString("ru", options)

    return (
      <div
        className="cruise pointer"
        onClick={() => {
          changeState(id);
        }}
      >
        <p className="cruise-id">Рейс №{id+1}</p>
        <p className="cruise-date">Начало: {start}</p>
        <p className="cruise-date">Конец: {end}</p>
      </div>
    );
  });


  return (
    <div className="floatwindow">
      {state < 0 ? (
        <div className="recomendations">
          <div className="top">
            <p className="top-title">Маршруты</p>
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
            <h4>Рейс №{state+1}</h4>
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
