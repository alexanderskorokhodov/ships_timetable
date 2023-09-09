
import React from "react";
import "./index.scss";
import sample from './data.json';


const Weather = () => {

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
            <div className="weather__title">{props.title}</div>
            <div className="weather__wrapper">
                <div className="weather__wrap__params">
                  <div className="weather__temperature_title">{props.temp}°</div>
                  <div className="weather__temperature_props_title">{props.percents}%</div>
                  <div className="weather__temperature_props_title">{props.ms} m/s</div>
                  <div className="weather__temperature_props_title">{props.pressure} mm</div>
                </div>
                <div className="weather__wrap__visual">
                    <img src="weather1.png" className="weather__icon"/>
                    <div className="weather__status__title">{props.weather_status}</div>
                </div>
            </div>
        </div>
    )
}

export default Weather;