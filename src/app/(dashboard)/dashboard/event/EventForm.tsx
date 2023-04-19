"use client";

import * as Form from "@radix-ui/react-form";
import { LatLng, LatLngExpression } from "leaflet";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

type Inputs = {
  name: string;
  description: string;
  startDate: Date | string;
  endDate: Date | null;
  location: string;
};

export default function EventForm() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const [locationName, setLocationName] = useState("");
  const [loadingGeolocation, setLoadingGeolocation] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      description: "",
      startDate: new Date().toISOString().split("T")[0],
      endDate: null,
      location: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Name"
        name="name"
        errorMatch={() => Boolean(errors.name)}
        errorMessage="This field is required"
      >
        <Form.Control asChild>
          <Input
            {...register("name", {
              required: true,
            })}
          />
        </Form.Control>
      </FormField>
      <FormField
        label="Description"
        name="description"
        errorMatch={() => Boolean(errors.description)}
        errorMessage="This field is required"
      >
        <Form.Control asChild>
          <Textarea
            {...register("description", {
              required: true,
            })}
          />
        </Form.Control>
      </FormField>
      <FormField
        label="Start date"
        name="startDate"
        errorMatch={() => Boolean(errors.startDate)}
        errorMessage="This field is required"
      >
        <Form.Control asChild>
          <Input
            type="date"
            {...register("startDate", {
              required: true,
            })}
          />
        </Form.Control>
      </FormField>
      <FormField
        label="End date"
        name="endDate"
        errorMatch={() => Boolean(errors.endDate)}
        errorMessage="This field is required"
      >
        <Form.Control asChild>
          <Input type="date" {...register("endDate")} />
        </Form.Control>
      </FormField>
      {locationName}

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
          position={position}
          setPosition={setPosition}
          setName={setLocationName}
        />
      </MapContainer>

      <Form.Submit asChild>
        <Button className="block w-fit ml-auto my-6" type="submit">
          Create
        </Button>
      </Form.Submit>
    </Form.Root>
  );
}

function FormField({
  name,
  label,
  children,
  errorMatch,
  errorMessage,
}: {
  children: React.ReactNode;
  name: string;
  label: string;
  errorMatch: Form.FormMessageProps["match"];
  errorMessage?: string;
}) {
  return (
    <Form.Field className="grid mb-[10px]" name={name}>
      <div className="flex items-baseline justify-between">
        <Form.Label className="flex-1 text-[15px] font-medium leading-[35px] ">
          {label}
        </Form.Label>
        <Form.Message
          match={errorMatch}
          className="text-[13px] text-red-600/80"
        >
          {errorMessage}
        </Form.Message>
      </div>
      {children}
    </Form.Field>
  );
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

function LocationMarker({
  position,
  setPosition,
  setName,
}: {
  position: LatLng | null;
  setPosition: (position: LatLng) => void;
  setName: (name: string) => void;
}) {
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
