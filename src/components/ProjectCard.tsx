import React from "react";
import Link from "next/link";


const projects = [
  {
    id:1,
    href: "https://movio-app.vercel.app/",
    label: "Movieo",
    description:
      "This responsive Movie App, built with React and Redux, lets you browse, search, and dive into detailed movie information seamlessly across all devices",
    tags: ["React", "API Integration", "Redux", "JavaScript", "TailwindCSS"],
    svg: (
  <svg
    className="text-heading w-12 h-8 block align-middle"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <rect width="64" height="64" rx="8" fill="none"></rect>
    <path
      d="M2 10h60v44H2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M6 14h6v6H6zm0 10h6v6H6zm0 10h6v6H6zm10-20h6v6h-6zm0 10h6v6h-6zm0 10h6v6h-6zm10-20h6v6h-6zm0 10h6v6h-6zm0 10h6v6h-6zm10-20h6v6h-6zm0 10h6v6h-6zm0 10h6v6h-6z"
      fill="currentColor"
    />
    <path
      d="M2 10l60 44M2 54L62 10"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
),
  },
  {
    id:2,
    href: "https://www.upwork.com/freelancers/~01164acd98cb58d10a?p=1871592601179914240",
    label: "Food Delivery Website",
    description:
      "A full-stack food delivery website featuring user authentication, dynamic menus, secure payments, and an admin panel for managing orders.",
    tags: ["React", "ExpressJS", "MongoDB", "Node.js", "Stripe"],
    svg: (
  <svg
    className="w-10 h-10 text-heading"
    viewBox="0 0 64 64"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" fill="none" />
    <line x1="20" y1="16" x2="20" y2="48" stroke="currentColor" strokeWidth="4" />
    <line x1="44" y1="16" x2="44" y2="48" stroke="currentColor" strokeWidth="4" />
    <path d="M32 20 L32 44" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
),

  },
  {
    id:3,
    href: "https://www.upwork.com/freelancers/~01164acd98cb58d10a?p=1920905714576277504",
    label: "Budget Tracker",
    description:
      "A full-stack financial website for managing transactions with secure authentication, real-time dashboards, AI insights, and interactive charts.",
    tags: ["React", "AI Insights", "ExpressJS", "MongoDB","Tailwind CSS"],
    svg: (
  <svg
    className="w-12 h-8 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="currentColor"
  >
    <path d="M32 4C17.64 4 6 15.64 6 30s11.64 26 26 26 26-11.64 26-26S46.36 4 32 4zm0 48c-12.15 0-22-9.85-22-22S19.85 8 32 8s22 9.85 22 22-9.85 22-22 22z"/>
    <path d="M33 14h-2v18h18v-2H33z"/>
    <path d="M14 33h18v2H14z"/>
  </svg>
)
  },
  {
    id:4,
    href: "https://openai.com",
    label: "ConvoAI",
    description:
      "Full-Stack ChatGPT app with React, Express, MongoDB & Google Gemini AI for real-time, AI-powered chats, secure logins, and responsive design",
    tags: ["React", "ExpressJS", "Gemini", "MongoDB","Node.js"],
    svg: (
  <svg
    className="w-10 h-10 text-emerald-600"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M12 3C7.03 3 3 6.58 3 11c0 2.4 1.18 4.56 3 6v4l4-2h5c4.97 0 9-3.58 9-8s-4.03-8-9-8zm-1 10H9v-2h2v2zm4-4h-6V7h6v2z"/>
  </svg>
)

  },
  {
    id:5,

    href: "https://github.com",
    label: "CineMobile",
    description:
      "Cross-platform React Native app with AI-powered movie suggestions, secure login, and persistent saved movies, delivering smooth performance",
    tags: ["TypeScript", "React Native", "AI Model Integration", "Mobile App",],
    svg: (
      <svg
        className="w-10 h-10 text-heading"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.1-1.7-1.1-1.7-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.3-1.1.6-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.6 11.6 0 013 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.3.3.6.8.6 1.6v2.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
      </svg>
    ),
  },
  {
    id:6,
    href: "https://webflow-website.netlify.app/",
    label: "SleekSite",
    description:
      "A single-page React website with smooth animations, built from a Figma design for a sleek and interactive user experience.",
  tags: ["React", "Single-Page", "Animations", "Figma", "UI", "Responsive"],
   svg: (
  <svg
    className="w-12 h-8 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="currentColor"
  >
    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm1 33h-2v-2h2v2zm2.071-7.071l-1.414 1.414C24.243 32.414 23 33 21 33h-1v-2h1c1.104 0 2-.896 2-2 0-.265-.105-.52-.293-.707l-2-2a2.004 2.004 0 01-.586-1.414V19h2v7h-1l2 2 2.071-2.071 1.414 1.414z" />
  </svg>
),
  },
];
type ProjectGridProps = {
  ButtonText:string,
  ButtonIcon?: React.ReactNode,
  ButtonHref: string,
  HeadingText:string
  limit?: number; // optional


}
const ProjectGrid:React.FC<ProjectGridProps> = ({ButtonText,ButtonIcon,ButtonHref,HeadingText,limit}) => {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <>
    <h3 className="md:text-[36px] text-[24px]  leading-10 text-black tracking-[-0.9px] font-bold mt-8 mb-4 box-border">{HeadingText}</h3>
    
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      {displayedProjects.map((project) => (
<Link
  key={project.id}
  href={project.href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={project.label}
  className="group relative w-full mb-4 rounded-xl text-text transition duration-200 ease-in-out hover:shadow-lg border border-slate-200 dark:border-none overflow-hidden"
>
  {/* Gradient Border (Dark Mode) */}
  <span className="hidden dark:block absolute inset-0 rounded-xl pointer-events-none">
    <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
    <span className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
    <span className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
  </span>

  {/* Hover Glow Effect (CSS only) */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
    <div className="w-[300%] h-[300%] -left-1/2 -top-1/2 absolute bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)]"></div>
  </div>

  {/* Card Content */}
  <div className="relative h-[308px] p-4 flex flex-col">
    {/* Logo */}
    <div className="my-4">{project.svg}</div>

    {/* Text Content */}
    <div>
      <h4 className="text-gray-900 dark:text-gray-100 font-bold text-lg leading-7 tracking-[-0.5px] m-0">
        {project.label}
      </h4>
      <p className="text-gray-700 dark:text-gray-300 leading-6 pt-4 m-0">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap pt-4">
        {project.tags.map((tag: string) => (
          <p
            key={tag}
            className="text-text italic text-xs leading-5 bg-bg/98 rounded-md px-1 mx-2 mb-2"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  </div>
</Link>



      ))}
    </div>
      <div className="flex justify-center w-full mt-6">
      <Link
        href={ButtonHref}
        className="flex items-center justify-center gap-2 transition"
      >
        {ButtonText}
         {ButtonIcon && <span>{ButtonIcon}</span>}

      </Link>
    </div>
    </>
  );
};

export default ProjectGrid;
