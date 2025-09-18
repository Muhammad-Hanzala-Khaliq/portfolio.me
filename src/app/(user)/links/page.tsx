import UserLayout from "@/components/UserLayout";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaTwitter, FaLinkedin, FaFreeCodeCamp } from "react-icons/fa";

const links = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/aint_hanzallah/",
    icon: <BsInstagram className="w-5 h-5 text-pink-600" />,

  },
  {
    name: "Twitter",
    href: "https://x.com/hanzala_khaliq",
    icon: <FaTwitter className="w-5 h-5 text-sky-500" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Muhammad-Hanzala-Khaliq",
    icon: <FaGithub className="w-5 h-5 " />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-hanzala-khaliq-34159a269/",
    icon: <FaLinkedin className="w-5 h-5 text-blue-700" />,
  },
  {
    name: "FreeCodeCamp",
    href: "https://www.freecodecamp.org/",
    icon: <FaFreeCodeCamp className="w-5 h-5" />,
  },
];

export const metadata = {
  title: "Links",
  description:
    "Find quick access to all important links, social profiles, and useful references related to Hanzala Khaliq.",
  alternates: { canonical: "/links" },
};

const LinksSection = () => {
  return (<UserLayout>
  <div className="md:w-[672px] w-full">
    <h1 className="md:text-4xl text-[30px] font-bold mb-2">Links</h1>
    <p className="text-gray-600 dark:text-gray-400 mb-6 md:block hidden ">
      Links to all my socials, projects, source codes and memes.
    </p>

    <div className="space-y-3">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-md border border-gray-300/20 hover:bg-text/10"
        >
          {link.icon}
          <span className="font-medium">{link.name}</span>
        </Link>
      ))}
    </div>
  </div>
</UserLayout>
  );
};

export default LinksSection;
