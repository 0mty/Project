import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { brandName, navLinks } from "./data";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="text-xl font-bold text-orange-500">
          {brandName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="rounded-full border bg-amber-500 border-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-50"
          >
            Book Table
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 items-start">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
