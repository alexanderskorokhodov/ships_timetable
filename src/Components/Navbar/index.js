import "./index.scss"
import React from "react"
import NavButton from "../NavButton"
import Logo from "../Logo"
import LoginButton from "../LoginButton"

function Navbar() {


    return <div className="navbar">
        <Logo/>
        <NavButton text="Расписание" path="/timetable"/>
        <NavButton text="Карта" path="/maps"/>
        <NavButton text="История" path="/history"/>
        <LoginButton/>
    </div>
}

export default Navbar