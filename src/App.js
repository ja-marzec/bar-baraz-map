import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapWithLocation } from "./components/map-elements";
import { locations } from "./components/map-elements";
import { Marker, Popup } from "react-leaflet";
import pool from "./pool.mp4";

export default function App() {
  const videoRef = useRef();
  const [isOpenInfo, setOpenInfo] = useState(false);

  useEffect(() => {
    videoRef.current.playbackRate = 0.6;
  }, []);

  const toggleInfo = () => {
    setOpenInfo(!isOpenInfo);
  };

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
          objectFit: "cover",
          opacity: 0.1,
          backgroundColor: "purple",
          backdropFilter: "invert(80%)",
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
          objectFit: "cover",
          opacity: 0.1,
        }}
        preload="metadata"
      >
        <source src={pool} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        class="window hidden"
        style={{
          width: "320px",
          height: "100px",
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 1999,
        }}
      >
        <div class="title-bar">
          <div class="title-bar-text">Start vibing</div>
        </div>
        <div class="window-body">
          <p> There are just so many possibilities:</p>
          <ul>
            <li>A Task Manager</li>
            <li>A Notepad</li>
            <li>Or even a File Explorer!</li>
          </ul>
        </div>
        <div class="status-bar">
          <p class="status-bar-field">Press F1 for help</p>
          <p class="status-bar-field">Slide 1</p>
          <p class="status-bar-field">CPU Usage: 14%</p>
        </div>
      </div>

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
              onClick={toggleInfo}
            ></button>
            <button
              style={{ height: "30px", width: "30px" }}
              aria-label="Close"
              onClick={() => {
                window.open("https://shattereddisk.github.io/rickroll/rickroll.mp4", "_blank")
              }}
            ></button>
          </div>
        </div>
        <div class="window-body"></div>
        {isOpenInfo && (
          <div
            class="window xl:w-1/4 w-[90%]"
            style={{
              fontSize: "14px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%)",
              zIndex: 100000000,
            }}
          >
            <div class="title-bar">
              <div
                class="title-bar-text"
                style={{ width: "100%", fontSize: "14px" }}
              >
                Info
              </div>
            </div>
            <div class="window-body">
              Hej! Zasady są proste:
              <br />
              <p className="mt-2">
                Klikając na ikonę otworzysz okienko z informacją o typie lokacji
                i adresem. Na ten moment są dwie ikony: Biedronki i sklepu.
                Planuje dodać kolejne już niedługo.
              </p>
              <p className="mt-2">
                Przyciski:
                <br />
                <p className="mt-1">
                  - <span style={{ fontWeight: 600 }}>Link do opisu: </span>{" "}
                  prowadzi do instagrama
                </p>
                <p className="mt-1">
                  - <span style={{ fontWeight: 600 }}>Sprawdź dojazd: </span>{" "}
                  kieruje do map google
                </p>
              </p>
              <br />
              <div className="field-row" style={{ justifyContent: "center" }}>
                <button
                  className="mx-2 px-4 mt-4"
                  // style={{border: '3px solid lightblue'}}
                  onClick={toggleInfo}
                >
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        )}
        <MapWithLocation>
          {locations.map((item) => (
            <Marker position={item.position} icon={item.icon} key={item.igLink}>
              <Popup>
                <div
                  class="window"
                  style={{ width: "100%", fontSize: "14px" }}
                  id={item.name}
                >
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
                            // `https://www.google.com/maps?saddr=Current+Location&daddr=${item.position[0]},${item.position[1]}`,
                            item.googleMapsLink.replace("place", "dir/"),
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
