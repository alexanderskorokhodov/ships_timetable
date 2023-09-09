//styles
import "./styles/App.scss";
// import "./styles/themes.scss";

import React from "react";
// import useColorScheme from "./scripts/useColorScheme";

// components
// import Footer from "./components/Footer";

// pages
import Main from "./Pages/Main";
import Timetable from "./Pages/Timetable";
import Maps from "./Pages/Maps";
import Navbar from "./Components/Navbar"
import History from "./Pages/History";

// router
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  // theme references
  // const isDark = useColorScheme('dark');
  // const theme = isDark ? 'dark' : 'light';
  if (localStorage.getItem("cached_data") === null) {
    localStorage.setItem("cached_data", "[]")
  }
  if (localStorage.getItem("chosen") === null) {
    localStorage.setItem("chosen", 0)
  }

  return (
    <div className={`App`}>

    <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/maps" element={<Maps/>} />
            <Route path="/timetable" element={<Timetable/>} />
            <Route path="/history" element={<History/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
