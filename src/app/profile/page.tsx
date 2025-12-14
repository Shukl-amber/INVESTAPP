"use client";
import dynamic from "next/dynamic";
import ProfileHero from "../../components/ProfileHero";
import MilestoneCard from "../../components/MilestoneCard";
import ProfileLeaderboard from "../../components/ProfileLeaderboard";
import ProfileTasks from "../../components/ProfileTasks";
import RewardsPanel from "../../components/RewardsPanel";
import ReferralTracking from "../../components/ReferralTracking";
import ProfileFooter from "../../components/ProfileFooter";
import useViewport from "../../lib/useViewport";

const ProfileDesktop = dynamic(() => import("../../components/ProfileDesktop"), { ssr: false });

export default function ProfilePage() {
  const { isMobile } = useViewport();

  // Desktop: render the separate desktop-oriented composition
  if (!isMobile) return <ProfileDesktop />;

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
