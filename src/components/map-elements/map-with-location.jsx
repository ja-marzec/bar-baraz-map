import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const MapWithLocation = ({ children, click }) => {
  const handleMapClick = (e) => {
    console.log(e);
    click()
  };

  return (
    <MapContainer
      center={[52.231623963362345, 21.00620269775391]}
      zoom={10}
      minZoom={12}
      maxZoom={18}
      scrollWheelZoom
      style={{ height: "95vh", maxWidth: "100vw" }}
      onClick={handleMapClick}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker /> */}
      {children}
    </MapContainer>
  );
};
