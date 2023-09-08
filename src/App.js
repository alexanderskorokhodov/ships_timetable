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

// router
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  // theme references
  // const isDark = useColorScheme('dark');
  // const theme = isDark ? 'dark' : 'light';

  return (
    <div className={`App`}>

    <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/maps" element={<Maps/>} />
            <Route path="/timetable" element={<Timetable/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
