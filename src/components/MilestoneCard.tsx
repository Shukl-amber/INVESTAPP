import React from "react";
import userData from "../lib/userData";

const { milestones } = userData;

  export default function MilestoneCard() {
    return (
      <section className="card">
        <div className="card-inner">
          <div>
            <h2 className="text-2xl mb-6">Milestone</h2>
          </div>
          <div className="card-body" style={{ minHeight: 0 }}>
            <div className="bg-white rounded-xl p-4 overflow-hidden">
              <div className="grid grid-cols-3 gap-3">
                {milestones.levels.map((level, idx) => {
                  const isActive = level === milestones.currentLevel;
                  const iconUrl = (milestones as any).milestoneLogoUrlMap?.[level] ?? "/icons/Student.svg";
                  return (
                    <div
                      key={`${level}-${idx}`}
                      className={`flex flex-col items-center px-3 py-4 rounded-2xl cursor-pointer transition-colors duration-150 overflow-hidden min-w-0 ${
                        isActive ? "bg-[#221B7A] text-white" : "bg-[#F6F6FB] text-[#221B7A]"
                      }`}
                      aria-selected={isActive}
                      role="tab"
                    >
                      <img src={iconUrl} alt={level + " icon"} className="w-10 h-10 md:w-12 md:h-12 mb-3 flex-shrink-0" draggable={false} />
                      <span className="text-sm md:text-sm font-normal text-center w-full milestone-item-label">
                        {level}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3">
                <ul className="flex items-center gap-6 flex-wrap">
                  <MilestoneItem index={0} done={milestones.progress.referrals >= 150} label="150 Referrals" compact />
                  <MilestoneItem index={1} done={milestones.progress.instaPosts >= 10} label="10 Insta Posts" compact />
                  <MilestoneItem index={2} done={milestones.progress.seminars >= 3} label="3 Seminars" compact />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function MilestoneItem({
    index,
    done,
    label,
    compact,
  }: {
    index: number;
    done: boolean;
    label: string;
    compact?: boolean;
  }) {
    const iconUrl = done ? "/icons/CheckGreen.svg" : "/icons/CheckGrey.svg";

    return (
      <li className={`flex items-center gap-3 milestone-item ${compact ? 'px-1 py-0' : ''}`}>
        <img src={iconUrl} alt={done ? "completed" : "pending"} className={`${compact ? 'w-5 h-5' : 'w-8 h-8'} flex-shrink-0`} draggable={false} />
        <span className={`${done ? "font-semibold" : "text-gray-700"} milestone-item-label text-sm`}>{label}</span>
      </li>
    );
  }

