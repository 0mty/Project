import React from "react";
import { brandName, footerLinks } from "./data";

const Footer = () => {
  return (
    <footer
      id="contact"
      className=" bg-orange-500 border-t border-slate-200  text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row items-center md:items-start md:justify-between md:px-10">
        <div className="min-w-0 max-w-sm items-center">
          <p className="text-2xl font-bold text-white">{brandName}</p>
        </div>

        <div>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-white">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition hover:text-orange-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
