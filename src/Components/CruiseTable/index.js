import React from "react";
import "./index.scss"

function Component(data) {

const toRus = {"id": "ID", "start": "Начало", "end": "Конец", "name": "Название", "start_point": "Начальная точка", "end_point": "Конечная точка", "IMO": "IMO", "MMSI": "MMSI", "velocity": "Скорость"}

  data = Object.entries(data).map((element) => {
    return  <tr className="table-row">
        <th className="table-box key"><p>{toRus[element[0]]}</p></th>
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
