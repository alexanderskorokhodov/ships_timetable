import "./index.scss"
import React from "react"

function Button({text, href}) {
    return <a className="navbutton" href={href}>
        {text}
    </a>
}

export default Button