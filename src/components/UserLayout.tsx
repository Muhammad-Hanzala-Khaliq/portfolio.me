// src/components/UserLayout.tsx
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function UserLayout({ children }: Props) {
  return (
     <main className="antialiased text-text px-6 md:px-8 bg-primary flex flex-col box-border min-h-screen">
      <div className="flex flex-col justify-start md:items-start w-full max-w-[672px] mb-16 mx-auto box-border">
        {children}
      </div>
    </main>
  );
}