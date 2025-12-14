"use client";
import React from "react";
import Image from "next/image";
import userData from "../lib/userData";

function formatSentDate(dateStr?: string) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return `Sent on ${d.getDate()} ${d.toLocaleString(undefined, {
      month: "short",
    })}`;
  } catch (e) {
    return "";
  }
}

function StatusBadge({ status }: { status: string }) {
  const lower = status.toLowerCase();
  const base = "px-3 py-1 rounded-full text-sm font-normal inline-block";
  if (lower.includes("signed"))
    return (
      <span
        className={`${base} text-green-600 border border-green-700 bg-green-50`}
        style={{ boxShadow: "inset 0 0 0 1px rgba(16,185,129,0.06)" }}
      >
        {status}
      </span>
    );
  if (lower.includes("pending"))
    return (
      <span
        className={`${base} text-amber-600 border border-amber-700 bg-amber-50`}
        style={{ boxShadow: "inset 0 0 0 1px rgba(234,179,8,0.06)" }}
      >
        {status}
      </span>
    );
  return (
    <span
      className={`${base} text-gray-700 border border-gray-500 bg-gray-50`}
      style={{ boxShadow: "inset 0 0 0 1px rgba(107,114,128,0.04)" }}
    >
      {status}
    </span>
  );
}

export default function ReferralTracking() {
  const referrals = userData.referralTracking || [];
  const avatarPool = [
    "/avatar/ref1.svg",
    "/avatar/ref2.svg",
    "/avatar/ref3.svg",
  ];

  return (
    <section className="card mt-6 md:mt-0">
      <div className="card-inner">
        <div>
          <h2 className="font-bold text-lg text-[#222] mb-3">Referral Tracking</h2>
        </div>

        <div>
          {referrals.length ? (
            referrals.map((r, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-white rounded-xl py-3 px-4 mb-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={avatarPool[idx % avatarPool.length]}
                    alt={r.name}
                    width={44}
                    height={44}
                    className="object-cover rounded-full"
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                    <div className="text-xs text-black mt-1">{formatSentDate(r.date)}</div>
                  </div>
                </div>

                <div>
                  <StatusBadge status={r.status} />
                </div>
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-500">No referrals yet.</div>
          )}
        </div>

        <div className="text-center mt-2">
          <a href="#" className="text-sm underline text-gray-800">View All</a>
        </div>
      </div>
    </section>
  );
}
