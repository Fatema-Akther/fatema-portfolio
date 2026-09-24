// src/components/Footer.tsx
"use client";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com/yourprofile",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/yourusername",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/yourprofile",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-teal-900 to-emerald-900 text-gray-300 py-10 px-6 md:px-20 text-center border-t border-gray-700">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition duration-300 ${link.color}`}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 my-6 w-3/4 mx-auto"></div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Md Mijanur Rahman. All rights reserved.  
      </p>
      <p className="text-xs mt-2 text-gray-500">
        Built with ❤️ using Next.js, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
