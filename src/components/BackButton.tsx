"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  href?: string;
};

export default function BackButton({ href }: Props) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <Button className="text-gray-900" variant="ghost" onClick={handleClick}>
      <ArrowLeft className="w-5 h-5 mr-2" />
      Back
    </Button>
  );
}
