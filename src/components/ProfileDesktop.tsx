"use client";
import React from "react";
import ProfileHero from "./ProfileHero";
import MilestoneCard from "./MilestoneCard";
import ProfileLeaderboard from "./ProfileLeaderboard";
import ProfileTasks from "./ProfileTasks";
import RewardsPanel from "./RewardsPanel";
import ReferralTracking from "./ReferralTracking";
import ProfileFooter from "./ProfileFooter";

export default function ProfileDesktop() {
  return (
    <div className="min-h-screen flex flex-col py-8">
      <div className="container mx-auto px-8 flex-1" style={{ minHeight: 0 }}>
        {/* Layout: let rows size naturally — top row will be the height of the tallest child (hero) */}
        <div className="grid gap-6 h-full">

          {/* Top row: three columns with adjusted widths (wider profile & tasks, center flexible) */}
          <div className="grid grid-cols-[minmax(300px,360px)_1fr_minmax(300px,360px)] gap-6">
            <div className="overflow-hidden">
              <ProfileHero />
            </div>

            <div className="overflow-hidden">
              <ProfileLeaderboard />
            </div>

            <div className="overflow-hidden">
              <ProfileTasks />
            </div>
          </div>

          {/* Bottom row: panels and milestone — columns mirror top row for alignment */}
          <div className="grid grid-cols-[minmax(300px,360px)_1fr_minmax(300px,360px)] gap-6">
            <div className="flex flex-col gap-6">
              {/* left lower column intentionally left for spacing or future content */}
            </div>

            <div className="flex flex-col gap-6 overflow-hidden">
              <div className="grid grid-cols-2 gap-6">
                <div className="overflow-auto" style={{ minHeight: 0 }}>
                  <RewardsPanel />
                </div>

                <div className="overflow-auto" style={{ minHeight: 0 }}>
                  <ReferralTracking />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 overflow-auto" style={{ minHeight: 0 }}>
              <MilestoneCard />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <ProfileFooter />
        </div>
      </div>
    </div>
  );
}
