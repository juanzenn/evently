"use client";

import { CircleEllipsis, Github } from "lucide-react";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "./ui/button";

export default function UserAuth() {
  const [isLoadingGithub, setIsLoadingGithub] = useState(false);

  const handleGithubLogin = async () => {
    setIsLoadingGithub(true);
    await signIn("github");
    setIsLoadingGithub(false);
  };

  return (
    <div>
      <Button
        className="flex mx-auto gap-4"
        size="lg"
        onClick={handleGithubLogin}
        disabled={isLoadingGithub}
      >
        {isLoadingGithub ? (
          <>
            <CircleEllipsis />
            Signing in...
          </>
        ) : (
          <>
            <Github />
            Sign in with GitHub
          </>
        )}
      </Button>
    </div>
  );
}
