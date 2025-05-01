"use client"; // Add this line at the top to mark this file as a client component

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />

        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
