import "./index.scss"
import React from "react"
import NavButton from "../NavButton"
import Logo from "../Logo"
import LoginButton from "../LoginButton"

function Navbar() {

    return <div className="navbar">
        <Logo/>
        <NavButton text="Главная" href="http://localhost:3000"/>
        <NavButton text="Расписание" href="http://localhost:3000/timetable"/>
        <NavButton text="Карта" href="http://localhost:3000/maps"/>
        <LoginButton/>
    </div>
}

export default Navbar