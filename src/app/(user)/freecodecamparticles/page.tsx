import ContactCard from "@/components/ContactCard";
import UserLayout from "@/components/UserLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "FreeCodeCamp Learnings",
  description:
    "Articles and insights gained from reading and learning on FreeCodeCamp, improving technical knowledge and skills.",
  alternates: { canonical: "/freecodecamp" },
};
const FreeCodeCamp = () => {
  const articles = [
    {
      id: 1,
      href: "https://www.freecodecamp.org/news/build-smart-expense-tracker-with-python-and-llms/",
      imgSrc: "/freecodecamp-1.webp",
      date: "September 8, 2025",
      title: "How to Build a Smart Expense Tracker with Python and LLMs",
    },
    {
      id: 2,
      href: "https://www.freecodecamp.org/news/how-to-enhance-images-with-neural-networks/",
      imgSrc: "/freecodecamp-2.webp",
      date: "September 4, 2025",
      title: "How to Enhance Images with Neural Networks",
    },
    {
      id: 3,
      href: "https://www.freecodecamp.org/news/caching-a-nextjs-api-using-redis-and-sevalla/",
      imgSrc: "/freecodecamp-3.png",
      date: "August 27, 2025",
      title: "Caching a Next.js API using Redis and Sevalla",
    },
    {
      id: 4,
      href: "https://www.freecodecamp.org/news/how-to-deploy-a-kubernetes-app-on-aws-eks/",
      imgSrc: "/freecodecamp-4.webp",
      date: "August 22, 2025",
      title: "How to Deploy a Kubernetes App on AWS EKS",
    },
  ];
  return (
    <UserLayout>
      <h1 className="md:text-[48px] text-[30px] leading-[48px] text-black tracking-[-1.2px] font-bold mb-8">
        Free Code Camp
      </h1>

      <h2 className="text-gray-600 mb-16 text-base leading-7 font-normal">
I regularly explore articles written by experienced developers on platforms  like       <Link
          href="https://www.freecodecamp.org/news/author/manu/"
          className="text-blue-500 underline font-medium p-1"
        >
          freeCodeCamp.
        </Link>
        These articles cover real-world projects and technical learnings that have helped me deepen my understanding and improve my skills.  
Some of the insightful reads that contributed to my growth are listed below.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mb-5 text-gray-900 no-underline"
          >
           
              <Image
                src={article.imgSrc}
                alt={article.title}
                width={500}
                height={300}
                className="rounded-md w-full mx-auto h-auto transition-all duration-[4000ms] ease-in-out"
              />
            <p className="font-light text-sm leading-5 py-2 m-0">
              {article.date}
            </p>
            <div className="flex flex-col justify-between">
              <h2 className="text-gray-700 font-bold text-lg leading-7 m-0">
                {article.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <ContactCard/>
    </UserLayout>
  );
};

export default FreeCodeCamp;
