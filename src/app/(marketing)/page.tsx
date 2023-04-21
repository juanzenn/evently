import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Heading, Paragraph } from "~/components/ui/typography";

export default async function Home() {
  return (
    <>
      <section className="mt-12 flex flex-col-reverse lg:flex-row lg:items-center">
        <div className="flex-1">
          <Heading className="lg:text-6xl">Evently</Heading>
          <Paragraph className="text-xl max-w-2xl">
            Your open source solution for event management and ticketing. Built
            with <strong>Server Components</strong> and Next.js 13 app
            directory. Explore how a modern web application can be built.
          </Paragraph>

          <section className="flex items-center mt-8 gap-2">
            <Link href="/login">
              <Button size="lg" className="text-lg">
                Get started
              </Button>
            </Link>
            <a target="_blank" href="https://github.com/juanzenn/evently">
              <Button size="lg" variant="ghost" className="gap-2 text-lg">
                <Github />
                Github
              </Button>
            </a>
          </section>
        </div>

        <figure className="relative lg:flex-1 min-h-[300px] lg:min-h-[60vh]">
          <Image
            fill
            src="/app-launch.svg"
            alt="Decorative - Popsy Rocket"
            className="md:mx-auto max-w-[400px] lg:max-w-3xl"
          />
        </figure>
      </section>
    </>
  );
}

export const metadata = {
  title: "Evently",
  description:
    "Evently is a platform for event organizers to manage their events.",
};
