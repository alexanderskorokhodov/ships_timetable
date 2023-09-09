import React, { useState } from "react";
import "./index.scss";

function MapWindow() {
  const json_data = [
    {
      id: 1,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      naming: "Штурман Альбанов",
      IMO: "9752084",
      ice_class: "",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 2,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      naming: "Штурман Альбанов",
      IMO: "9752084",
      ice_class: "",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 3,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      naming: "Штурман Альбанов",
      IMO: "9752084",
      ice_class: "",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 4,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      naming: "Штурман Альбанов",
      IMO: "9752084",
      ice_class: "",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 5,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      naming: "Штурман Альбанов",
      IMO: "9752084",
      ice_class: "",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 6,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      naming: "Штурман Альбанов",
      IMO: "9752084",
      ice_class: "",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 7,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      naming: "Штурман Альбанов",
      IMO: "9752084",
      ice_class: "",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
    {
      id: 8,
      start: "Пт, 1 сентября 2023",
      end: "Пт, 1 сентября 2023",
      naming: "Штурман Альбанов",
      IMO: "9752084",
      ice_class: "",
      velocity: "15",
      start_point: "точка в Баренцевом море",
      end_point: "Саббета 3",
    },
  ];

  let cruisesView = json_data.map((element) => {
    return <div
      className="cruise"
      onClick={() => {
        changeState(element.id);
      }}
    >
      <h4>Рейс №{element.id}</h4>
      <p>Начало: {element.start}</p>
      <p>Конец: {element.end}</p>
    </div>;
  });

  const [state, changeState] = useState(-1);

  return (
    <div className="floatwindow">
      {state === -1 ? (
        <div className="recomendations">
          <h3>Рекомендации для рейсов</h3>
          <div className="cruises">{cruisesView}</div>
        </div>
      ) : (
        <div className="cruiseinfo">
            <div className="top"><h4>Рейс №{json_data[state].id}</h4><img src="icon.svg" onClick={()=>{changeState(-1)}}/></div>
        </div>
      )}
    </div>
  );
}

export default MapWindow;