import React from "react";
import { getCurrentUser } from "~/lib/session";

export default async function AboutPage() {
  const user = await getCurrentUser();

  return (
    <div>
      About page
      <div>{user?.email}</div>
    </div>
  );
}
