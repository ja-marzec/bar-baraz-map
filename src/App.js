import "./styles.css";
import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { MapWithLocation } from "./components/map-elements";
import { locations } from "./components/map-elements";
import { Marker, Popup } from "react-leaflet";
import pool from "./pool.mp4";

export default function App() {
  const videoRef= useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 0.6;
 }, []);

  return (
    <>
    <div 
     style={{
      pointerEvents: "none",
      zIndex: 10000,
      height: "100vh",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      padding: 0,
      objectFit: 'cover',
      opacity: 0.1,
      backgroundColor: 'purple',
      backdropFilter: 'invert(80%)'
    }}
    />
      <video
      ref={videoRef}
        playsInline
        autoPlay
        muted
        loop
        style={{
          pointerEvents: "none",
          zIndex: 10000,
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          padding: 0,
          objectFit: 'cover',
          opacity: 0.1,
        }}
        preload='metadata'
      >
        <source src={pool} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="window" style={{ width: "100%", fontSize: "14px" }}>
        <div class="title-bar pl-4 py-1">
          <div
            class="title-bar-text "
            style={{ width: "100%", fontSize: "20px" }}
          >
            mapa lokacji: bazar__plaza 
          </div>
          <div class="title-bar-controls">
            <button
              className="mr-2"
              style={{ height: "30px", width: "30px" }}
              aria-label="Help"
            ></button>
            <button
              style={{ height: "30px", width: "30px" }}
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="window-body"></div>
        <MapWithLocation>
          {locations.map((item) => (
            <Marker position={item.position} icon={item.icon} key={item.igLink}>
              <Popup>
                <div class="window" style={{ width: "100%", fontSize: "14px" }} id={item.name}>
                  <div class="title-bar">
                    <div
                      class="title-bar-text"
                      style={{ width: "100%", fontSize: "14px" }}
                    >
                      {item.name}
                    </div>
                  </div>
                  <div class="window-body">
                    <div
                      className="field-row"
                      style={{ justifyContent: "center" }}
                    >
                      <button
                        className="mx-2 px-4"
                        // style={{border: '3px solid lightblue'}}
                        onClick={() => {
                          window.open(item.igLink, "_blank");
                        }}
                      >
                        Link do opisu
                      </button>
                      <button
                        className="mx-2 px-4"
                        onClick={() => {
                          window.open(
                            item.googleMapsLink.replace('place', 'dir/'),
                            "_blank"
                          );
                        }}
                      >
                        Sprawdź dojazd
                      </button>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapWithLocation>
      </div>
    </>
  );
}
