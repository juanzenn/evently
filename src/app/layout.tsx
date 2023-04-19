import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import AppProviders from "~/components/AppProviders";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Evently",
  description:
    "Open Source application for your ticketing needs. Built with Next.js 13, Tailwind CSS and Prisma.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Prisma",
  ],
  authors: [
    {
      name: "Juan Alvarez",
      url: "https://juanalvarez.dev",
    },
  ],
  creator: "Juan Alvarez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-white font-sans text-slate-900 antialiased",
          fontSans.variable
        )}
      >
        <AppProviders>
          {children}
          <Analytics />
        </AppProviders>
      </body>
    </html>
  );
}
