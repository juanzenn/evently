import { Github, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-50 py-6">
      <div className="container flex justify-between">
        <p>
          Built by{" "}
          <a
            href="https://juanalvarez.dev"
            target="_blank"
            className="underline hover:text-primary-200"
          >
            Juan Alvarez
          </a>
          . Open Source, hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            className="underline hover:text-primary-200"
          >
            Vercel
          </a>
          .
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/juanzenn/evently"
            target="_blank"
            className="hover:text-primary-200"
          >
            <Github />
          </a>
          <a
            href="https://twitter.com/juanzenweb"
            target="_blank"
            className="hover:text-primary-200"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
