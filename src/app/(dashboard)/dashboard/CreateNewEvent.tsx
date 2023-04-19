"use client";

import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Heading,
  Paragraph,
  TypographySubtle,
} from "~/components/ui/typography";

export default function CreateNewEvent() {
  return (
    <section className="mt-8 text-center bg-gray-100 p-6 shadow rounded-md max-w-lg mx-auto">
      <TypographySubtle className="mb-6">
        You don&apos;t have any events.
      </TypographySubtle>

      <Link href="/dashboard/event/create">
        <Button variant="default">
          <Plus className="w-5 h-5 mr-4" />
          Create Event
        </Button>
      </Link>
    </section>
  );
}
