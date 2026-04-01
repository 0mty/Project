import React from "react";
import { footerLinks } from "../data/data";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-purple-600 text-white py-16">
      <div className="w-full px-8 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white text-sm hover:opacity-80 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h4 className="font-bold text-lg mb-6">GetHelp</h4>
            <ul className="space-y-3">
              {footerLinks.getHelp.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white text-sm hover:opacity-80 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white text-sm hover:opacity-80 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white text-sm hover:opacity-80 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-end gap-6 pt-8 border-t border-white border-opacity-20">
          <a
            href="#instagram"
            className="text-white hover:opacity-80 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#facebook"
            className="text-white hover:opacity-80 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a href="#twitter" className="text-white hover:opacity-80 transition">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
