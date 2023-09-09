import "./index.scss"
import React from "react"
import NavButton from "../NavButton"
import Logo from "../Logo"
import LoginButton from "../LoginButton"

function Navbar() {


    return <div><div className="navbar">
        <Logo/>
        <LoginButton/>
    </div><div className="navbar-low">
        <NavButton text="Расписание" path="/timetable"/>
        <NavButton text="Карта" path="/maps"/>
        <NavButton text="Личный кабинет" path="/history"/>
    </div></div>
}

export default Navbar