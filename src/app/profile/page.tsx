import ProfileHero from "../../components/ProfileHero";
import MilestoneCard from "../../components/MilestoneCard";
import ProfileLeaderboard from "../../components/ProfileLeaderboard";
import ProfileTasks from "../../components/ProfileTasks";
import RewardsPanel from "../../components/RewardsPanel";
import ReferralTracking from "../../components/ReferralTracking";

export default function ProfilePage() {
  return (
    <>
      <ProfileHero />
      <div className="mt-8 space-y-6">
        <ProfileLeaderboard />
        <ProfileTasks />
        <RewardsPanel />
        <ReferralTracking />
        <MilestoneCard />
      </div>
    </>
  );
}
