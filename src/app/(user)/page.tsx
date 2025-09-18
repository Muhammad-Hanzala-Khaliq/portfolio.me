import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import { HiArrowNarrowDown } from "react-icons/hi";
import Changelog from "@/components/ChangeLog";
import ContactCard from "@/components/ContactCard";
import UserLayout from "@/components/UserLayout";
import LatestBlog from "@/components/LatestBlog";

const Hero = () => {
  return (
    <UserLayout>
      {/* <ThemeToogle/> */}
 <div className="flex flex-col md:flex-row justify-between items-start w-full mb-10">
  {/* Left Content */}
  <div className="flex flex-col w-full md:w-3/4 mt-6 order-2 md:order-0">
    <h1 className="md:text-5xl text-[24px] leading-[48px] font-bold tracking-[-0.03em] text-black mb-2">
      Hanzala Khaliq
    </h1>

    <div className="flex flex-wrap items-center text-text leading-7 mb-5">
      Full
      <Link
        href="https://www.linkedin.com/in/muhammad-hanzala-khaliq-34159a269/"
        target="_blank"
        className="font-bold px-2 bg-bg-contact mx-1"
      >
        Stack Developer
      </Link>
      ,
      <Link
        href="https://www.linkedin.com/in/muhammad-hanzala-khaliq-34159a269/"
        target="_blank"
        className="font-bold px-2 bg-bg-contact mx-1 "
      >
        Software
      </Link>
      Engineer
      <span className="font-bold  ml-1">🤩</span>
    </div>

    <p className="">
      Senior Software Engineer building SaaS products and web apps. Find me on{" "}
      <Link
        href="https://x.com/hanzala_khaliq"
        target="_blank"
        className="font-bold  inline-flex relative"
      >
        <span>twitter</span>
      </Link>
    </p>
  </div>

  {/* Right Avatar */}
 <div className="relative w-full md:w-auto md:mb-0 md:ml-14 order-1 md:order-last flex md:block md:mx-0">
  <Link
    href="https://x.com/hanzala_khaliq"
    target="_blank"
    className="relative block w-20 h-20 md:w-24 md:h-24 rounded shadow-lg overflow-hidden"
  >
    <Image
  src="/me.jpeg"
  alt="Avatar"
  fill
  sizes="200px"
  className="object-contain transition duration-500 ease-in-out"
/>
  </Link>

  {/* Decorative bluish lines */}
<div className="absolute -top-3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-[30%] md:w-full" />

  <div className="absolute top-0 bottom-0 left-21 md:left-[100%] -right-3 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent " />

</div>
</div>

     <LatestBlog limit={2}/>
      <ProjectCard ButtonText="See More" ButtonIcon={<HiArrowNarrowDown />} ButtonHref="/projects" HeadingText="Projects" limit={5} />
      <Changelog />
      <ContactCard />
    </UserLayout>
  );
};

export default Hero;