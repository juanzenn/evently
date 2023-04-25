import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { buttonVariants } from "~/components/ui/button";
import UserAuth from "~/components/UserAuth";
import { getCurrentUser } from "~/lib/session";
import { cn } from "~/lib/utils";

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/about");
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute top-4 left-4 md:top-8 md:left-8"
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome to Evently
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Sign in to your account or create a new one.
          </p>
        </div>

        <UserAuth />
      </div>
    </div>
  );
}
