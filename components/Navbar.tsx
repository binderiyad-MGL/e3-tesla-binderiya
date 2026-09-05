"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/Button";
import { calTriggerProps } from "@/lib/cal";

const links = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-ink">
      <div className="mx-auto flex h-18 w-full items-center gap-8 px-6 md:px-16">
        <a href="#" className="flex flex-1 items-center">
          <Image
            src="/assets/logo-alternate.png"
            alt="Tesla"
            width={84}
            height={32}
            className="h-8 w-21 object-contain"
            priority
          />
        </a>

        <nav className="hidden shrink-0 items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-base leading-6 text-white/90 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <Button
            variant="primary"
            className="px-5 py-2"
            aria-label="Жолоодож үзэх цаг захиалах"
            {...calTriggerProps}
          >
            Жолоодож үзэх
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Цэс"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 lg:hidden"
          >
            <span className="sr-only">Цэс нээх</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 text-base text-white/90 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
