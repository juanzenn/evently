import { Metadata } from "next";
import React from "react";
import Navbar from "~/components/Navbar";
import { Heading } from "~/components/ui/typography";
import { getCurrentUser } from "~/lib/session";

export default async function Dashboard() {
  const user = await getCurrentUser();

  return (
    <main>
      <Heading className="mb-4">Dashboard</Heading>
      <p className="mb-4">Welcome back, {user?.name}!</p>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Evently | Dashboard",
  description: "Create and manage your events with Evently.",
};
