import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import icon from "./constants";

export const MoveToLocation = ({cityPosition}) => {
    const [position, setPosition] = useState(null);
    const map = useMap();
  console.log(cityPosition)
    useEffect(() => {
      if(cityPosition) {
        map.flyTo({lat: cityPosition[0], lng: cityPosition[1]}, map.getZoom());
      }
    }, [cityPosition, map]);

    return position === null ? null : (
      <Marker position={position} icon={icon}>
      </Marker>
    );
  }