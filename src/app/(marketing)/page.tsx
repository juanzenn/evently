import { Heading } from "~/components/ui/typography";

export default async function Home() {
  return (
    <>
      <Heading className="mb-4">Evently</Heading>
    </>
  );
}

export const metadata = {
  title: "Evently",
  description:
    "Evently is a platform for event organizers to manage their events.",
};
