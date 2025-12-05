import ResearchProgram from "@/src/components/home/ResearchProgram";
import Perks from "../components/home/Perks";
import Howitworks from "../components/home/Howitworks";
import Leaderboard from "../components/home/Leaderboard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full px-6 lg:px-30 flex-col gap-30 my-10">
          <ResearchProgram />
          <Perks />
          <Howitworks />
      </main>
    </div>
  );
}
