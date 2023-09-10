import "./index.scss";
import React, { useEffect } from "react";
import {
  Gantt,
  Task,
  EventOption,
  StylingOption,
  ViewMode,
  DisplayOption,
} from "gantt-task-react-pro";
import "gantt-task-react-pro/dist/index.css";

function Home() {

  const data =
    JSON.parse(localStorage.getItem("cached_data")).length > 0
      ? JSON.parse(localStorage.getItem("cached_data"))[
          localStorage.getItem("chosen")
        ].data
      : [];
  
  let tasks = data.map((el, id)=>{
    let [syear, smonth, sday] = el[4].split(' ')[0].split('-').map((el)=>{return Number(el)})
    let [shour, sminute] = el[4].split(' ')[1].split(':').slice(0, 2).map((el)=>{return Number(el)})
    let [eyear, emonth, eday] = el[5].split(' ')[0].split('-').map((el)=>{return Number(el)})
    let [ehour, eminute] = el[5].split(' ')[1].split(':').slice(0, 2).map((el)=>{return Number(el)})
    console.log(syear)
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'long',
      timezone: 'UTC'
    };
    return {
      start: new Date(el[4]),
      end: new Date(el[5]),
      name: el[0],
      id: id,
      type: "event",
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    }
  })

  useEffect(() => {
    var elements = document.getElementsByClassName("_WuQ0f");
    elements[0].textContent = "\xA0Название";
    elements[1].textContent = "\xA0Начало";
    elements[2].textContent = "\xA0Конец";
    var weekdays = document.getElementsByClassName("_9w8d5");
    console.log(weekdays);
    Array.prototype.slice.call(weekdays).forEach((element) => {
      element.textContent = element.textContent
        .replace("Fri", "Пят")
        .replace("Tue", "Вто")
        .replace("Wed", "Сре")
        .replace("Thu", "Чет")
        .replace("Sun", "Вос")
        .replace("Sat", "Суб")
        .replace("Mon", "Пон");
    });
  });

  return (
    <div className="home">
      <div className="container">
        <Gantt
          tasks={tasks}
          EventOption={{ timeStep: 3 }}
          DisplayOption={{ viewMode: "Month" }}
        />
      </div>
    </div>
  );
}

export default Home;
