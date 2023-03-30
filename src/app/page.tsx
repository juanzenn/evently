import { Metadata } from "next";
import { Heading } from "~/components/ui/typography";
import client from "~/server/db";

export default async function Home() {
  const data = await client.event.findMany();

  return (
    <div className="p-6">
      <Heading className="mb-4">Eventos</Heading>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Evently",
  description:
    "Evently is a platform for event organizers to manage their events.",
};
