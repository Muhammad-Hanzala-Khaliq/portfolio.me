import Link from "next/link";
import React from "react";

const Changelog = () => {
 interface ChangelogItem {
  title: string;
  description?: string;
  link?: string; // <-- optional
}

interface ChangelogYear {
  year: string;
  items: ChangelogItem[];
}

const changelog: ChangelogYear[] = [
  {
    year: "2025",
    items: [
      {
        title: "Joined TrueSolvers as Full-Stack Developer 💻",
        description:
          "Applied and got hired for a full-stack role at TrueSolvers in July 2025.",
        link: "https://www.linkedin.com/in/muhammad-hanzala-khaliq-34159a269/",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Started Freelancing 👨‍💻",
        description:
          "Began offering web development services for local and international clients, including US and Bangladesh.",
        link: "/freelance",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Studying Software Engineering 🏫",
        description: "Continuing Software Engineering studies, expected to graduate in 2026.",
      },
      {
        title: "Started Learning Software Development 📚",
        description:
          "Started focused learning in Software Engineering to enhance skills for future career opportunities.",
      },
    ],
  },
];


  return (
    <section>
      <h3 className="md:text-4xl text-[24px] leading-10 text-black font-bold tracking-[-0.9px] mt-8 mb-4">
        Life Changelog and Updates
      </h3>

      {changelog.map((yearBlock) => (
        <div key={yearBlock.year}>
          <h3 className="text-xl leading-7 text-gray-900 font-bold tracking-[-0.5px] mb-4">
            {yearBlock.year}
          </h3>
          <ul className="list-none m-0 p-0">
            {yearBlock.items.map((item, idx) => (
              <li key={idx} className="ml-2 mb-4">
                <div className="text-green-700 flex items-center mb-2">
                  <span className="sr-only">Check</span>
                  <svg
                    className="text-blue-500 mr-2 block align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    width="16"
                    height="16"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="text-heading font-medium hover:underline"
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <p className="text-gray-900 font-medium m-0">{item.title}</p>
                  )}
                </div>
                {item.description && (
                  <p className="text-gray-600 ml-6">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 my-8 w-full" />
        </div>
      ))}
    </section>
  );
};

export default Changelog;
