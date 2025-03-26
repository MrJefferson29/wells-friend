// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom icon
const customIcon = new L.Icon({
  iconUrl: 'https://example.com/path-to-your-icon.png', // Replace with your custom marker URL
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor of the icon (half of size if centered)
  popupAnchor: [0, -32], // Where the popup should appear relative to the marker
});

const Map = () => {
  const position = [51.505, -0.09]; // Default map position [latitude, longitude]

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A custom marker popup.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
