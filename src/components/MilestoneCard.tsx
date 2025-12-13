import React from "react";
import userData from "../lib/userData";

const { milestones } = userData;

  export default function MilestoneCard() {
    return (
      <section className="rounded-2xl bg-white p-6 shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl mb-6">Milestone</h2>
        <div className="flex justify-between mb-6 gap-3">
          {milestones.levels.map((level) => {
            const isActive = level === milestones.currentLevel;
            const iconUrl = (milestones as any).milestoneLogoUrlMap?.[level] ?? "/icons/Student.svg";
            return (
              <div
                key={level}
                className={`flex flex-col items-center flex-1 px-5 py-5 rounded-2xl cursor-pointer transition-colors duration-150 ${
                  isActive ? "bg-[#221B7A] text-white" : "bg-[#F6F6FB] text-[#221B7A]"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <img src={iconUrl} alt={level + " icon"} className="w-12 h-12 mb-3" draggable={false} />
                <span className="text-base md:text-lg font-medium text-center leading-snug">{level}</span>
              </div>
            );
          })}
        </div>

        <ul className="space-y-5">
          <MilestoneItem index={0} done={milestones.progress.referrals >= 150} label="150 Referrals" />
          <MilestoneItem index={1} done={milestones.progress.instaPosts >= 11} label="10 Insta Posts" />
          <MilestoneItem index={2} done={milestones.progress.seminars >= 4} label="3 Seminars" />
        </ul>
      </section>
    );
  }

  function MilestoneItem({
    index,
    done,
    label,
  }: {
    index: number;
    done: boolean;
    label: string;
  }) {
    const iconUrl = done ? "/icons/CheckGreen.svg" : "/icons/CheckGrey.svg";

    return (
      <li className="flex items-center gap-4 text-xl">
        <img src={iconUrl} alt={done ? "completed" : "pending"} className="w-8 h-8" draggable={false} />
        <span className={done ? "font-semibold text-lg" : "text-gray-700 text-lg"}>{label}</span>
      </li>
    );
  }

