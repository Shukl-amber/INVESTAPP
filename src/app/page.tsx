"use client"

import ResearchProgram from "@/src/components/home/ResearchProgram";
import Perks from "../components/home/Perks";
import Howitworks from "../components/home/Howitworks";
import Leaderboard from "../components/home/Leaderboard";
import Testimonials from "../components/home/Testimonials";
import DownloadApp from "../components/home/DownloadApp";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex-grow w-full px-3 md:px-6 lg:px-16 xl:px-30 flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-30 my-6 md:my-8 lg:my-10 flex items-center justify-center">
        <ResearchProgram />
        <Perks />
        <Howitworks />
        <Leaderboard />
        <Testimonials />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}
