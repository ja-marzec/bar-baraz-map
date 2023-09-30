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
      <div className="window" style={{ width: "100%", fontSize: "14px" }}>
        <div className="title-bar pl-4 py-1">
          <div
            className="title-bar-text "
            style={{ width: "100%", fontSize: "20px" }}
          >
            mapa lokacji: bazar__plaza
          </div>
          <div className="title-bar-controls">
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
        <div className="window-body"></div>
        {isOpenInfo && (
          <div
            className="window xl:w-1/4 w-[90%]"
            style={{
              fontSize: "14px",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%)",
              zIndex: 100000000,
            }}
          >
            <div className="title-bar">
              <div
                className="title-bar-text"
                style={{ width: "100%", fontSize: "14px" }}
              >
                Info
              </div>
            </div>
            <div className="window-body">
              Hej! Zasady są proste:
              <br />
              <p className="mt-2">
                Klikając na ikonę otworzysz okienko z informacją o typie lokacji
                i adresem. Na ten moment są dwie ikony: Biedronki i sklepu.
              </p>
              <p className="mt-2">
                Przyciski:
                <br />
                <span className="mt-1 block">
                  - <span style={{ fontWeight: 600 }}>Link do opisu: </span>{" "}
                  prowadzi do instagrama
                </span>
                <span className="mt-1 block">
                  - <span style={{ fontWeight: 600 }}>Sprawdź dojazd: </span>{" "}
                  kieruje do map google
                </span>
              </p>
              <br />
              <span className="block">
                Nad czym pracuję:
                <span className="mt-1 block">- Osobne ikonki dla sklepu / centrum handlowego itp. </span>
                <span className="mt-1 block">- Filtry po typie obiektu </span>
                <span className="mt-1 block">- Filtry po lokacji </span>
              </span>
              <div className="field-row" style={{ justifyContent: "center" }}>
                <button
                  className="mx-2 px-4 mt-4"
                  onClick={toggleInfo}
                >
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        )}
        <MapWithLocation click={() => setOpenInfo(false)}>
          {locations.map((item) => (
            <Marker position={item.position} icon={item.icon} key={item.igLink}>
              <Popup>
                <div
                  className="window"
                  style={{ width: "100%", fontSize: "14px" }}
                  id={item.name}
                >
                  <div className="title-bar">
                    <div
                      className="title-bar-text"
                      style={{ width: "100%", fontSize: "14px" }}
                    >
                      {item.name}
                    </div>
                  </div>
                  <div className="window-body">
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
