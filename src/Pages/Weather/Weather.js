
import React, { useState, useEffect } from "react";
import "./index.scss";
import sample from './data.json';

import Service from "../../Service";


const service = new Service()

const Weather = () => {


    const [state, setState] = useState({})

    
    useEffect(() => {
        service.getWeatherByOffset(90,30).then(res=>{
            res.json().then(re => {
                setState(re)
                return
            })
        })
      }, []);
    
    const props = {
        title:"Мурманск",
        temp:-9,
        percents:70,
        ms:5,
        pressure:762,
        weather_status:"Light Snow"
    }

    return(
        <div className="weather">
            <div className="weather__title">state.title</div>
            <div className="weather__wrapper">
                <div className="weather__wrap__params">
                  <div className="weather__temperature_title">{state.temp}°</div>
                  <div className="weather__temperature_props_title">{state.humidity}%</div>
                  <div className="weather__temperature_props_title">{state.wind_speed} m/s</div>
                  <div className="weather__temperature_props_title">{state.pressure_mm} mm</div>
                </div>
                <div className="weather__wrap__visual">
                    <img src={state.icon} className="weather__icon"/>
                    <div className="weather__status__title">{state.condition}</div>
                </div>
            </div>
        </div>
    )
}

export default Weather;