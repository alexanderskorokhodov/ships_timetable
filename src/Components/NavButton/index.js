import "./index.scss"
import React from "react"

function Button({text, path}) {
    const isChose = window.location.pathname === path
    // console.log(isChose,path, window.location.pathname )
    return <a className={"navbutton " + (isChose ? "chose" : "")} href={path}>
        {text}
    </a>
}

export default Button