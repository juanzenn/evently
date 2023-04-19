"use client";

import { LatLng } from "leaflet";
import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

type Props = {
  position: LatLng | null;
  setPosition: (position: LatLng) => void;
  setName: (name: string) => void;
};

export default function EventFormMap(props: Props) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
    }

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted ? (
    <MapContainer
      scrollWheelZoom
      zoom={0}
      center={[0, 0]}
      style={{
        height: "400px",
        width: "600px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        position={props.position}
        setPosition={props.setPosition}
        setName={props.setName}
      />
    </MapContainer>
  ) : null;
}

async function _getReverseGeocoding(lat: number, lng: number) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
  );
  const data = await res.json();

  return data;
}

function _getDisplayName(data: any) {
  return data.display_name;
}

function LocationMarker({ position, setPosition, setName }: Props) {
  const map = useMapEvents({
    click(e) {
      _getReverseGeocoding(e.latlng.lat, e.latlng.lng).then((data) => {
        setName(_getDisplayName(data));
      });

      setPosition(e.latlng);
      map.flyTo(e.latlng);
    },
    locationfound(e) {
      _getReverseGeocoding(e.latlng.lat, e.latlng.lng).then((data) => {
        setName(_getDisplayName(data));
      });

      setPosition(e.latlng);
      map.flyTo(e.latlng, 15);
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
