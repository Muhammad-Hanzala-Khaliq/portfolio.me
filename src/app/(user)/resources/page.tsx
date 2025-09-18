import ResourcesCard from "@/components/ResourceCard";
import React from "react";
import { resources,categories } from "./data";
import UserLayout from "@/components/UserLayout";

export const metadata = {
  title: "Resources",
  description:
    "Curated list of resources, tools, and guides for developers to learn and build better web applications.",
  alternates: { canonical: "/resources" },
};

const Resources = () => {
  

  return (
  <UserLayout>

       <h1 className="md:text-5xl text-[30px] font-bold mb-4 mr-auto">Resources</h1>
      <p className="text-gray-600 mb-4">
        Helpful <span className="text-gray-600 bg-gray-100 px-1 py-0.5 rounded border border-gray-300/40">websites</span>{" "}
        that I've been using for years that have helped me in developing applications and much more. 🔥
      </p>
       {categories.map((cat) => (
        <div key={cat} className="mb-10">
          <h2 className="text-2xl font-bold border-b-4 border-green-300 mb-4 inline-block">
            {cat}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources
              .filter((res) => res.category === cat)
              .map((res) => (
                <ResourcesCard key={res.title} {...res} />
              ))}
          </div>
        </div>
      ))}
   </UserLayout>
  );
};

export default Resources;
