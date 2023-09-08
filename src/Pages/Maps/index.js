import "./index.scss";
import React, { useEffect } from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

function Home() {
  return (
    <div className="home">
      <div className="mapView">
        <div className="map">
          <YMaps>
            <div>My awesome application with maps!</div>

            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
          </YMaps>
        </div>
        <div>scroll</div>
      </div>
      <div>Some additional</div>
    </div>
  );
}

export default Home;
