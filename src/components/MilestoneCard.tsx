import React from "react";
import userData from "../lib/userData";

const { milestones } = userData;

  export default function MilestoneCard() {
    return (
      <section className="rounded-2xl bg-white p-6 shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl mb-6">Milestone</h2>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {milestones.levels.map((level) => {
            const isActive = level === milestones.currentLevel;
            const iconUrl = (milestones as any).milestoneLogoUrlMap?.[level] ?? "/icons/Student.svg";
            return (
              <div
                key={level}
                className={`flex flex-col items-center px-3 py-4 rounded-2xl cursor-pointer transition-colors duration-150 overflow-hidden min-w-0 ${
                  isActive ? "bg-[#221B7A] text-white" : "bg-[#F6F6FB] text-[#221B7A]"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <img src={iconUrl} alt={level + " icon"} className="w-10 h-10 md:w-12 md:h-12 mb-3 flex-shrink-0" draggable={false} />
                {(() => {
                  const parts = level.split(" ");
                  const first = parts[0] ?? level;
                  const rest = parts.slice(1).join(" ");
                  return (
                    <span className="text-sm md:text-base font-normal text-center w-full block">
                      <span className="block md:inline leading-tight">{first}</span>
                      {rest ? (
                        <span className="block md:inline leading-tight mt-0">{rest}</span>
                      ) : null}
                    </span>
                  );
                })()}
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

