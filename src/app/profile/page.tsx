import ProfileHero from "../../components/ProfileHero";
import ProfileLeaderboard from "../../components/ProfileLeaderboard";
import ProfileTasks from "../../components/ProfileTasks";

export default function ProfilePage() {
  return (
    <>
      <ProfileHero />
      <div className="mt-8">
          <ProfileLeaderboard />
        <div className="mt-6">
        <ProfileTasks />
        </div>
      </div>
    </>
  );
}
