"use client";

import { signIn, signOut } from "next-auth/react";
import React from "react";

export default function LoginPage() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  );
}
