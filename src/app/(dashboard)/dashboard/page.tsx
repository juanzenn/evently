import { Metadata } from "next";
import React from "react";
import { Heading } from "~/components/ui/typography";
import client from "~/server/db";
import CreateNewEvent from "./CreateNewEvent";

export default async function Dashboard() {
  const events = await client.event.findMany();

  return (
    <div>
      <Heading className="mb-4">Dashboard</Heading>

      {!Boolean(events.length) && <CreateNewEvent />}
      {Boolean(events.length) && <pre>{JSON.stringify(events, null, 2)}</pre>}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Evently | Dashboard",
  description: "Create and manage your events with Evently.",
};
