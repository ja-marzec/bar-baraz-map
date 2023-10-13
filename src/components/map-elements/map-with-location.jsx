import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MoveToLocation } from "./move-to-location";

export const MapWithLocation = ({ children, position }) => {

  return (
    <MapContainer
      center={position}
      zoom={10}
      minZoom={12}
      maxZoom={18}
      scrollWheelZoom
      style={{ height: "96vh", maxWidth: "100vw" }}
      zoomControl={window.innerWidth > 500}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker /> */}
      <MoveToLocation cityPosition={position} />
      {children}
    </MapContainer>
  );
};
