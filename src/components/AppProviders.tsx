"use client";

type Props = {
  children: React.ReactNode;
};

export default function AppProviders(props: Props) {
  return <>{props.children}</>;
}
