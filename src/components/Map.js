import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = new L.Icon({
    iconUrl: '/flat.svg',
    iconRetinaUrl: '/flat.svg',
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
});

function Map() {
    const position = [51.505, -0.09]

    return (
        <MapContainer className="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} icon={icon}></Marker>
        </MapContainer>
    );
}

export default Map;