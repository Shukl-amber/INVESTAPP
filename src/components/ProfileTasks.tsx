"use client";

import React from "react";
import userData from "../lib/userData";

type Task = {
  category: string;
  description: string;
  dueInDays: number;
};

const pillStyles: Record<string, string> = {
  "Learn and Grow": "border-[#A7C1FF] text-[#407BFF] bg-white",
  "Social Buzz": "border-[#FFD7B3] text-[#FF8C42] bg-white",
  "Recruit & Rise": "border-[#BFF5D1] text-[#16A34A] bg-white",
};

export default function ProfileTasks() {
  const tasks: Task[] = (userData.tasks || []).map((t: any) => ({
    category: t.category,
    description: t.description,
    dueInDays: t.dueInDays,
  }));

  const MAX_VISIBLE = 4;
  const TASK_ITEM_ESTIMATED = 125; // px per task row including gaps/padding (approx)
  const tasksBodyStyle: React.CSSProperties =
    tasks.length > MAX_VISIBLE
      ? { minHeight: 0, maxHeight: `${MAX_VISIBLE * TASK_ITEM_ESTIMATED}px`, overflowY: "auto" }
      : { minHeight: 0 };

  return (
    <div className="card mt-6 md:mt-0">
      <div className="card-inner">
        <div>
          <h3 className="text-lg font-semibold mb-3">Task</h3>
        </div>

        <div className="card-body flex-1 flex flex-col gap-4" style={{ ...tasksBodyStyle, minHeight: 0 }}>
        {tasks.map((task, i) => {
            const pill =
              pillStyles[task.category] ||
              "border-gray-200 text-gray-700 bg-white";
            return (
              <div
                key={task.description + i}
                className="w-full bg-white rounded-xl border border-gray-300 px-3 py-3 flex items-center justify-between"
                style={{ minHeight: "90px" }}
              >
                <div className="flex flex-col items-start min-w-0">
                  <div
                    className={`px-3 py-1 rounded-full border-2 ${pill} text-xs font-semibold mb-4`}
                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }}
                  >
                    {task.category}
                  </div>
                  <div className="w-full">
                    <span
                      className="text-base font-semibold text-gray-900 truncate block"
                      style={{ lineHeight: "1.05rem" }}
                    >
                      {task.description}
                    </span>
                  </div>
                </div>

                <div
                  className="flex flex-col items-end flex-shrink-0"
                  style={{ marginLeft: "12px", marginTop: "-10px" }}
                >
                  <span className="text-red-600 font-semibold text-sm">
                    Due in {task.dueInDays} Days
                  </span>
                  <div className="text-black text-2xl">›</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
