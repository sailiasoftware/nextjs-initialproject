"use client";

import { MapContainer, Circle, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import worldGeoJSON from "@/data/world-countries.json";

export default function DashboardMap() {
  const onEachCountry = (feature: any, layer: any) => {
    layer.bindPopup(`<b>${feature.properties.name}</b>`);
  };

  const purpleOptions = { color: 'purple', fillColor: 'purple' }
  const greenOptions = { color: 'green', fillColor: 'green' }

  return (
    <MapContainer
      center={[54.75, -4.0]}
      zoom={6}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ height: "100vh", width: "100%", backgroundColor: "white" }}
    >

      <GeoJSON
        data={worldGeoJSON as any}
        style={{ color: "blue", weight: 1, fillOpacity: 0.1 }}
        onEachFeature={onEachCountry}
      />

      <Circle
        center={[51.51, -0.08]}
        pathOptions={purpleOptions}
        radius={5000}
      />


    </MapContainer>
  );
}
