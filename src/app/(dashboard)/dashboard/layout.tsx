import React from "react";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  return <main className="p-6">{children}</main>;
}
