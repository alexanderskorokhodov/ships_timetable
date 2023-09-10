import React from "react";
import "./index.scss"

function Component(data) {

const toRus = {"id": "ID", "start": "Начало", "end": "Конец", "name": "Название", "start_point": "Начальная точка", "end_point": "Конечная точка", "IMO": "IMO", "MMSI": "MMSI", "velocity": "Скорость"}

  function getName(index){
    const  array = ["Наименование","Ледовый класс","Пункт начала плавания", "Пункт окончания плавания","Дата и время начала плавания","Дата и время окончания плавания"]
    return array[index]
  }

  data = Object.entries(data).map((element, index) => {
    if(index == Object.entries(data).length-1) return
    return  <tr className="table-row">
        <th className="table-box key"><p>{getName(index)} {toRus[element[0]]}</p></th>
        <th className="table-box value"><p>{element[1]}</p></th>
      </tr>
  });

  return (
    <div className="table-container">
      {" "}
      <table className="table-view">{data}</table>
    </div>
  );
}

export default Component;
