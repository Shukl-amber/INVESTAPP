"use client";
import Image from "next/image";
import userData from "../lib/userData";
import { useState, useEffect, useRef } from "react";
import { transform } from "next/dist/build/swc/generated-native";

// Example leaderboard data, replace with real data source if available
const leaderboard = [
  {
    rank: 1,
    name: "Abhinav Ram",
    points: 12334,
    avatar: "/avatar/avatar3.webp",
  },
  { rank: 2, name: "Priya Jain", points: 8334, avatar: "/avatar/avatar1.webp" },
  {
    rank: 3,
    name: "Arjun Singh",
    points: 8234,
    avatar: "/avatar/avatar2.webp",
  },
  { rank: 4, name: "Anuv Jain", points: 8334, avatar: "/avatar/avatar3.webp" },
  {
    rank: 5,
    name: "Honey Singh",
    points: 8200,
    avatar: "/avatar/avatar1.webp",
  },
  { rank: 6, name: "Priya Jain", points: 8334, avatar: "/avatar/avatar1.webp" },
  {
    rank: 7,
    name: "Test Man",
    points: 8234,
    avatar: "/avatar/avatar2.webp",
  },
  { rank: 8, name: "Test Man", points: 8334, avatar: "/avatar/avatar3.webp" },
  {
    rank: 9,
    name: "Test Woman",
    points: 8200,
    avatar: "/avatar/avatar1.webp",
  },
  // ...add more users as needed
];

export default function ProfileLeaderboard() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const userRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Find current user in leaderboard
  const currentUser = leaderboard.find((u) => u.name === userData.name);
  const currentUserRank = currentUser ? currentUser.rank : null;

  // Podium order: 2nd, 1st, 3rd
  const podium = [leaderboard[1], leaderboard[0], leaderboard[2]];

  // Scroll to current user row
  const handleViewPosition = () => {
    if (userRowRef.current) {
      userRowRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const MAX_VISIBLE = 4;
  const LEADER_ITEM_EST = 70; // px per leaderboard row including gap/padding (approx)
  const listBodyStyle: React.CSSProperties =
    leaderboard.length > MAX_VISIBLE
      ? { minHeight: 0, maxHeight: `${MAX_VISIBLE * LEADER_ITEM_EST}px`, overflowY: "auto" }
      : { minHeight: 0 };

  return (
    <section className="card">
      <div className="card-inner">
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg text-[#222]">Leaderboard</h2>
            <button
              className="border border-[#2C2E8C] text-[#2C2E8C] rounded-full px-4 py-1 text-xs font-semibold hover:bg-[#f0f2ff] transition"
              onClick={handleViewPosition}
            >
              View Your Position
            </button>
          </div>
          {/* Podium Card with BG */}
          <div
            className="bg-[url('/home/leaderboard-bg.webp')] bg-cover bg-center rounded-xl px-2 pt-6 pb-2 flex flex-col items-center mb-4"
            style={{ minHeight: "170px" }}
          >
            <div
              className="relative w-full flex items-end justify-center h-[180px] gap-6"
              style={{ marginTop: 0, paddingBottom: 0 }}
            >
          {podium.map((user, idx) => {
            // Classic fixed heights for podium
            let barHeight = 110,
              barWidth = 68,
              avatarSize = 68;
            if (user.rank === 2) {
              barHeight = 90;
              barWidth = 52;
              avatarSize = 52;
            }
            if (user.rank === 3) {
              barHeight = 80;
              barWidth = 52;
              avatarSize = 52;
            }
            // increase avatar circle slightly (bigger for 1st)
            avatarSize = avatarSize + (user.rank === 1 ? 12 : 6);
            // Avatar sits halfway on top of bar (use updated avatarSize)
            const avatarTop = 150 - barHeight - avatarSize / 2 + 36;
            // Semicircle overlay size: match avatar/bar width
            const semicircleSize = barWidth;
            // make semicircle a full half circle then crop a bit from the top
            const half = Math.round(semicircleSize / 2);
            const cropTop = 6; // pixels to crop from top of semicircle
            const semicircleContainerHeight = Math.max(10, half - cropTop);
            const semicircleInnerHeight = half + cropTop;
            return (
              <div
                key={user.rank}
                className="w-20 flex flex-col items-center relative"
                style={{ height: 180, justifyContent: "flex-end" }}
              >
                {/* Crown for 1st place */}
                {user.rank === 1 && (
                  <Image
                    src="/icons/crown.svg"
                    alt="Crown"
                    width={32}
                    height={24}
                    className="absolute left-1/2 -translate-x-1/2 z-40"
                    style={{ top: avatarTop - 20 }}
                  />
                )}
                {/* Avatar: width matches bar, sits halfway on top of bar */}
                <div
                  className="rounded-full bg-[#407BFF] flex items-center justify-center z-30 absolute left-1/2 -translate-x-1/2"
                  style={{
                    width: avatarSize,
                    height: avatarSize,
                    top: avatarTop,
                  }}
                >
                  <Image
                    src={user.avatar}
                    alt={`${user.name} avatar`}
                    width={avatarSize}
                    height={avatarSize}
                    style={{ transform: "translateY(-6px)" }}
                    className="rounded-full object-cover"
                  />
                </div>
                {/* Semicircle overlay with rank */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 z-40 flex items-center justify-center"
                  style={{
                    top: avatarTop + avatarSize - semicircleContainerHeight,
                    width: semicircleSize,
                    height: semicircleContainerHeight,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: semicircleSize + 50,
                      height: semicircleInnerHeight + 1,
                      background: "#fff",
                      borderBottomLeftRadius: semicircleSize / 2,
                      borderBottomRightRadius: semicircleSize / 2,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      transform: `translateY(-${cropTop}px)`,
                    }}
                  />
                  <span
                    className="absolute left-1/2 -translate-x-1/2 text-black font-bold"
                    style={{
                      top: 6,
                      fontSize: 14,
                      width: semicircleSize,
                      textAlign: "center",
                    }}
                  >
                    {user.rank}
                  </span>
                </div>
                {/* For 1st place, name below avatar */}
                {user.rank === 1 && (
                  <span
                    className="text-[10px] md:text-xs text-black w-full text-center truncate block z-30"
                    style={{
                      position: "absolute",
                      top: avatarTop + 80,
                      left: 0,
                    }}
                  >
                    {user.name.split(" ")[0]}
                  </span>
                )}
                {/* Bar: rectangle, only top rounded, bottom square */}
                <div
                  style={{
                    height: barHeight,
                    width: barWidth,
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundPosition: "center bottom",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    minHeight: 40,
                    overflow: "hidden",
                  }}
                  className="bg-[url(/home/leaderboard-bar.webp)] bg-cover relative"
                />
              </div>
            );
          })}
        </div>
      </div>
        {/* Leaderboard List Card - body fills card and scrolls after 4 entries */}
        <div
          className={"card-body flex-1 bg-white rounded-xl p-3 shadow-sm"}
          style={{ ...listBodyStyle, minHeight: 0 }}
        >
            {leaderboard.map((user) => (
            <div
              key={user.rank}
              ref={user.name === userData.name ? userRowRef : undefined}
              className={`flex items-center justify-between py-2 px-2 rounded-lg mb-1 ${
                user.name === userData.name
                  ? "bg-[#e6edff] border-2 border-[#2C2E8C]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[#24218F] text-base">#{user.rank}</span>
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={28}
                  height={28}
                  className="rounded-full border-2 border-white object-cover"
                />
                <span className="font-semibold text-base text-[#222]">
                  {user.name}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/icons/money.svg" alt="coin" width={18} height={18} />
                <span className="font-bold text-[#2C2E8C] text-base">
                  {user.points.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div></div>  
    </section>
  );
}
