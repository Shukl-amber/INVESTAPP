"use client"

import ResearchProgram from "@/src/components/home/ResearchProgram";
import Perks from "../components/home/Perks";
import Howitworks from "../components/home/Howitworks";
import Leaderboard from "../components/home/Leaderboard";
import Testimonials from "../components/home/Testimonials";
import DownloadApp from "../components/home/DownloadApp";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full px-3 lg:px-30 flex-col gap-30 my-10">
          <ResearchProgram />
          <Perks />
          <Howitworks />
          <Leaderboard />
          <Testimonials />
          {/* <DownloadApp /> */}
      </main>
    </div>
  );
}
