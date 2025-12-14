import React from "react";
import userData from "../lib/userData";

const { milestones } = userData;

export default function MilestoneCard() {
  return (
    <section className="card">
      <div className="card-inner">
        <div>
          <h2 className="text-lg font-medium">Milestone</h2>
        </div>
        <div className="card-body" style={{ minHeight: 0, overflow: 'hidden' }}>
          <div className="bg-white rounded-[20px] p-5 border border-gray-100 overflow-hidden md:scale-110 md:transform md:origin-top-left md:min-h-[220px] md:pb-6">
            <div className="flex justify-start gap-4 md:w-[452px] md:ml-0 overflow-hidden items-center">
              {milestones.levels.map((level, idx) => {
                const isActive = level === milestones.currentLevel;
                const iconUrl =
                  (milestones as any).milestoneLogoUrlMap?.[level] ??
                  "/icons/Student.svg";
                return (
                  <button
                    key={`${level}-${idx}`}
                      className={`flex-shrink-0 flex flex-col items-center justify-center gap-2 h-20 md:h-24 min-w-[86px] md:w-[135px] rounded-2xl cursor-pointer transition-all duration-150 transform overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                        isActive
                          ? "bg-[#231f7a] text-white shadow-[0_8px_20px_rgba(35,31,122,0.14)]"
                          : "bg-[#F6F6FB] text-[#221B7A]"
                      }`}
                    aria-pressed={isActive}
                    role="tab"
                    tabIndex={0}
                  >
                    <img
                      src={iconUrl}
                      alt={level + " icon"}
                      className="w-10 h-8 mb-1 flex-shrink-0 object-contain"
                      draggable={false}
                    />
                    <span className={`text-sm font-medium text-center w-full milestone-item-label`} style={{ whiteSpace: 'nowrap', fontSize: '12px', lineHeight: 1.1 }}>
                      {level}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4">
              <ul className="space-y-3 pl-1 md:flex md:space-x-8 md:space-y-0 mb-4 md:mb-0 md:items-center">
                <MilestoneItem
                  index={0}
                  done={milestones.progress.referrals >= 150}
                  label="150 Referrals"
                />
                <MilestoneItem
                  index={1}
                  done={milestones.progress.instaPosts >= 11}
                  label="10 Insta Posts"
                />
                <MilestoneItem
                  index={2}
                  done={milestones.progress.seminars >= 4}
                  label="3 Seminars"
                />
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
}: {
  index: number;
  done: boolean;
  label: string;
}) {
  const iconUrl = done ? "/icons/CheckGreen.svg" : "/icons/CheckGrey.svg";

  return (
    <li className={`flex items-center gap-1 milestone-item`}>
      <img
        src={iconUrl}
        alt={done ? "completed" : "pending"}
        className={`${done ? "w-5 h-5" : "w-5 h-5"} flex-shrink-0`}
        draggable={false}
      />
      <span className="font-medium text-gray-900 milestone-item-label text-xs">
        {label}
      </span>
    </li>
  );
}
