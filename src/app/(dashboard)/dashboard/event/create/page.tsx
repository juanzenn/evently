import { Metadata } from "next";
import React from "react";
import BackButton from "~/components/BackButton";
import { Heading } from "~/components/ui/typography";
import EventForm from "../../../../../components/EventForm";

export default function CreateEventPage() {
  return (
    <div>
      <BackButton />
      <main className="mx-auto max-w-lg px-4">
        <Heading className="my-6">Create event</Heading>
        <EventForm />
      </main>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Evently | Create event",
  description:
    "Evently is a platform for event organizers to manage their events.",
};
