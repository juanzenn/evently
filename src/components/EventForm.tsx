"use client";

import * as Form from "@radix-ui/react-form";
import { LatLng } from "leaflet";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const EventFormMap = dynamic(() => import("./EventFormMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

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
      <EventFormMap
        position={position}
        setName={setLocationName}
        setPosition={setPosition}
      />

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
