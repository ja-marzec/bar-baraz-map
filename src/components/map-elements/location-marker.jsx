import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import icon from "./constants";

export const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);
    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
      map.on("click", (e) => {
        console.log(e);
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>
        <div class="window" style={{ width: "100%", fontSize: '14px' }}>
                <div class="title-bar">
                  <div class="title-bar-text"
                  style={{ width: "100%", fontSize: '14px' }}
                  >TUTAJ JESTEŚ</div>
                </div>
                <div class="window-body">
                <p style={{ textAlign: "center" }}>JESTEŚ COOL!</p>
                  <div
                    className="field-row"
                    style={{ justifyContent: "center" }}
                  >
                    {/* <button 
                      className="mx-2 px-4"
                      onClick={() => {
                        window.open(item.igLink, "_blank");
                      }}
                    >Link do opisu</button>
                      <button 
                      className="mx-2 px-4"
                      onClick={() => {
                        window.open(`https://www.google.com/maps?saddr=Current+Location&daddr=${item.position[0]},${item.position[1]}`, "_blank");
                      }}
                    >Sprawdź dojazd</button> */}
                  </div>
                </div>
              </div>
        </Popup>
      </Marker>
    );
  }