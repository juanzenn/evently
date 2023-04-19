"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

interface NavbarLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function NavbarLink(props: NavbarLinkProps) {
  const path = usePathname();

  const isActive = path === props.href;

  return (
    <li
      className={cn([
        "text-slate-600 font-semibold hover:text-slate-700",
        isActive && "text-primary-700 hover:text-primary-700",
      ])}
    >
      <Link {...props}>{props.children}</Link>
    </li>
  );
}
