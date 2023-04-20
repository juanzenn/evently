import { Sticker } from "lucide-react";
import React from "react";
import NavbarLink from "./NavbarLink";

type Props = { children?: React.ReactNode };

export default function Navbar({ children }: Props) {
  return (
    <header className="container sticky top-0 z-40 bg-white">
      <div className="flex h-16 items-center justify-between py-4">
        <span className="flex gap-2 items-center">
          <Sticker className="w-6 h-6" />
          <span className="tracking-wide font-bold">Evently</span>
        </span>

        {children}
      </div>
    </header>
  );
}

function MarketingLinks() {
  return (
    <ul className="gap-4 mr-auto ml-12 hidden md:flex">
      <Navbar.Link href="/">Home</Navbar.Link>
      <Navbar.Link href="/about">About</Navbar.Link>
    </ul>
  );
}

Navbar.MarketingLinks = MarketingLinks;
Navbar.Link = NavbarLink;
