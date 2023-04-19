import React from "react";
import DashboardButton from "~/components/DashboardButton";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <Navbar>
        <Navbar.MarketingLinks />

        <DashboardButton />
      </Navbar>
      <main className="container min-h-[90%]">{children}</main>
      <Footer />
    </>
  );
}
