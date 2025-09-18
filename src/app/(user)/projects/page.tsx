import ContactCard from "@/components/ContactCard";
import ProjectGrid from "@/components/ProjectCard";
import UserLayout from "@/components/UserLayout";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
export const metadata = {
  title: "Projects",
  description:
    "Discover projects built by Hanzala Khaliq, showcasing expertise in full stack development, frontend, and backend systems.",
  alternates: { canonical: "/projects" },
};

const Projects = () => {
  return (
  <UserLayout>
        <h3 className="md:text-[50px] text-[30px] leading-10 text-heading tracking-[-0.9px] font-bold mb-4 box-border">
          Projects
        </h3>
        <p className="text-text mb-14 text-base leading-7 max-w-[565.625px] font-normal">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included (along with course related projects) here.
          
          <Link href="/blog" className="text-blue-500 underline font-medium">
           Check out my blog
          </Link>
          while you're here. <br />I write about technology, learning and memes.
        </p>
        <ProjectGrid
          ButtonText="See All at"
          ButtonIcon={<FaGithub />}
          ButtonHref="https://github.com/Muhammad-Hanzala-Khaliq?tab=repositories"
          HeadingText="Full Stack"
  
        />
        <ContactCard />
     </UserLayout>
  );
};

export default Projects;
