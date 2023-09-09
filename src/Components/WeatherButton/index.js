import React, {useState} from "react";
import "./index.scss"

function Button({showing, setShowing}) {

    

    return <div onClick={()=>{setShowing(!showing)}}className={"weather-button " + (showing ? "activated" : "")}><img src="weather.svg"/></div>
}

export default Button