import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import Navbar from "~/components/Navbar";
import NavbarLink from "~/components/NavbarLink";
import { getCurrentUser } from "~/lib/session";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  const user = await getCurrentUser();
  console.log(user?.image);

  if (!user) redirect("/login");

  return (
    <div>
      <Navbar>
        <Image
          width={32}
          height={32}
          src={user?.image ?? ""}
          alt={`Profile picture of ${user?.name}`}
          title={`Profile picture of ${user?.name}`}
          className="block rounded-full ml-auto"
        />
      </Navbar>
      {children}
    </div>
  );
}
