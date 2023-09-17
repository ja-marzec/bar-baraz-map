import { Marker, Polygon } from "react-leaflet";
import L from "leaflet";

export const PolygonWithText = ({ coords, html, onClick }) => {
    let center = L.polygon(coords).getBounds().getCenter();
    const text = L.divIcon({ html });
  
    center = { lat: center.lat + 0.0002, lng: center.lng - 0.0003 };
  
    return (
      <Polygon
        color="black"
        positions={coords}
        onClick={() => console.log("this works")}
        eventHandlers={{
          click: onClick,
        }}
      >
        <Marker
          position={center}
          icon={text}
          eventHandlers={{
            click: onClick,
          }}
        />
      </Polygon>
    );
  };