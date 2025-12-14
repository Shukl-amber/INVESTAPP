"use client";
import ProfileHero from "../../components/ProfileHero";
import MilestoneCard from "../../components/MilestoneCard";
import ProfileLeaderboard from "../../components/ProfileLeaderboard";
import ProfileTasks from "../../components/ProfileTasks";
import RewardsPanel from "../../components/RewardsPanel";
import ReferralTracking from "../../components/ReferralTracking";
import ProfileFooter from "../../components/ProfileFooter";
import useViewport from "../../lib/useViewport";

export default function ProfilePage() {
  const { isMobile } = useViewport();

  // Desktop: render an explicit desktop grid composition (do not change mobile layout)
  if (!isMobile)
    return (
      <div className="min-h-screen flex flex-col py-8">
        <div className="container mx-auto px-8 flex-1" style={{ minHeight: 0 }}>
          <div className="grid gap-6 h-full" style={{ gridTemplateRows: '1fr auto', minHeight: 0 }}>
            {/* Top row: three columns (profile | leaderboard | tasks) */}
            {/* Reduce leaderboard width and widen tasks: center column smaller */}
            <div className="grid items-start grid-cols-[minmax(300px,360px)_minmax(380px,480px)_1fr] gap-6">
              <div className="overflow-hidden h-full" style={{ minHeight: 0 }}>
                <ProfileHero />
              </div>

              <div className="overflow-hidden h-full" style={{ minHeight: 0 }}>
                <ProfileLeaderboard />
              </div>

              <div className="overflow-hidden h-full" style={{ minHeight: 0 }}>
                <ProfileTasks />
              </div>
            </div>

            {/* Bottom row: Rewards under Profile (left), Referral under Leaderboard (center), Milestone + Footer split on right */}
            <div className="grid items-stretch grid-cols-[minmax(300px,360px)_minmax(380px,480px)_1fr] gap-6" style={{ maxHeight: '480px', minHeight: 0 }}>
              {/* Left: Rewards (same width as Profile column) */}
              <div className="flex flex-col gap-6 h-full" style={{ minHeight: 0 }}>
                <RewardsPanel />
              </div>

              {/* Center: Referral tracking (same width as Leaderboard column) */}
              <div className="flex flex-col gap-6 h-full" style={{ minHeight: 0 }}>
                <ReferralTracking />
              </div>

              {/* Right: split Milestone and Footer to share the right column space */}
              <div className="flex flex-col gap-6 h-full" style={{ minHeight: 0 }}>
                <div className="flex-1 overflow-auto" style={{ minHeight: 0 }}>
                  <MilestoneCard />
                </div>

                <div className="flex-1 overflow-auto" style={{ minHeight: 0 }}>
                  <ProfileFooter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  // Mobile: keep current stacked layout (unchanged components)
  return (
    <>
      <ProfileHero />
      <div className="mt-8 space-y-6">
        <ProfileLeaderboard />
        <ProfileTasks />
        <RewardsPanel />
        <ReferralTracking />
        <MilestoneCard />
        <ProfileFooter />
      </div>
    </>
  );
}
