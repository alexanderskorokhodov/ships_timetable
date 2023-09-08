import "./index.scss";
import React, { useEffect } from "react";

function Home() {
  return (
    <div className="home">
      <div className="mapView">
        <div className="map">MAP</div>
        <div>scroll</div>
      </div>
      <div>Some additional</div>
    </div>
  );
}

export default Home;
