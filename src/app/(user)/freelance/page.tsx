// app/freelance/page.tsx
import UserLayout from "@/components/UserLayout";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: "NewsPortal",
    description:
      "A responsive news website built for an international client in Bangladesh. Developed a clean, modern frontend using HTML, CSS, and JavaScript to ensure readability and smooth performance.",
    image:
      "/project-1.png",
    url: "https://guileless-hamster-24ca14.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript","Responsive"],
  },
  {
    id: 2,
    title: "MatchConnect",
    description:
      "Developed a responsive matchmaking website where users can log in, view potential matches, and manage their profiles. Built for a US client with a focus on clean UI and smooth functionality.",
    image:
      "/project-2.png",
    url: "https://hanzala-matrimonials.netlify.app/",
  tech: ["React","Firebase","Responsive"],
  },
  {
  id: 3,
  title: "DriveEase",
  description:
    "A responsive single-page car rental website with a modern frontend design, built using React and TailwindCSS.",
  image: "/project-3.png",
  url: "https://hanzala-car-website.netlify.app/",
  tech: ["React", "TailwindCSS", "JavaScript", "Responsive"],
},
];
export const metadata = {
  title: "Freelance Work",
  description:
    "Learn more about freelance projects and collaborations with international and local clients.",
  alternates: { canonical: "/freelance" },
};


export default function FreelancePage() {
  
  return (
    <UserLayout>
      <h1 className="md:text-[48px] text-[30px] leading-[48px] text-black tracking-[-1.2px] font-bold mb-4">
        Freelancing
      </h1>

      <p className="text-gray-600 mb-10 hidden md:block">
        I love building products and web apps for humans. 👑
        <br />
        Most of my projects come from my website. However, I'm also a Top Rated
        Freelancer on{" "}
        <Link
          href="https://www.upwork.com/freelancers/~01164acd98cb58d10a"
          target="_blank"
          className="font-bold text-green-600"
        >
          Upwork
        </Link>{" "}
        and Teach coding to people on Codementor.
      </p>
      <h2 className="md:text-4xl text-[24px] font-bold mb-10">Featured Projects</h2>

      <div className="flex flex-col space-y-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid md:grid-cols-2 gap-5"
          >
            {/* Image Card */}
            <Link
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-bg"
>
  <div className="rounded-lg overflow-hidden">
    <Image
      src={project.image}
      alt={project.title}
      width={600}
      height={400}
      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
    />
  </div>
</Link>

            {/* Content */}
            <div className="">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <p className="font-semibold text-gray-800 mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-600 px-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/projects" className="flex items-center gap-2 text-gray-500 mt-10 text-lg">See all of my Projects <FaArrowRightLong className="text-xl" /></Link>
    </UserLayout>
  );
}
