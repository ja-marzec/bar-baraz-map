import { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import icon from "./constants";

export const MoveToLocation = ({cityPosition}) => {
    const [position] = useState(null);
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