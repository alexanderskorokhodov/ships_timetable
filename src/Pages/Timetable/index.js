import './index.scss';
import React, { useEffect } from "react";
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react-pro';
import "gantt-task-react-pro/dist/index.css";

function Home() {

  let tasks = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: 'Idea',
      id: 'Task 0',
      type:'task',
      progress: 45,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    }
];

  useEffect(()=>{
    var elements = document.getElementsByClassName("_WuQ0f");
    elements[0].textContent = "\xA0Название"
    elements[1].textContent = "\xA0Начало"
    elements[2].textContent = "\xA0Конец"
    var weekdays = document.getElementsByClassName("_9w8d5");
    console.log(weekdays)
    Array.prototype.slice.call(weekdays).forEach(element => {
      element.textContent = element.textContent.replace('Fri', 'Пят').replace('Tue', 'Вто').replace('Wed', 'Сре').replace('Thu', 'Чет').replace('Sun', 'Вос').replace('Sat', 'Суб').replace('Mon', 'Пон')
    });
      
  
  })

  return (
    <div className="home">
      
  <Gantt tasks={tasks} />
    </div>
  );
}

export default Home;
