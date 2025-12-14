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
  { rank: 4, name: "Abhijeet Sawant", points: 8334, avatar: "/avatar/avatar3.webp" },
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

  const MAX_VISIBLE = 3;
  // remove inline fixed px maxHeight so responsive classes control desktop vs mobile scrolling
  // mobile: show ~3 entries (max-h), desktop: md:max-h uses CSS

  return (
    <section className="card">
      <div className="card-inner">
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium text-[#222]">Leaderboard</h2>
            <button
              className="border border-[#2C2E8C] text-[#2C2E8C] rounded-full px-4 py-1 text-xs font-semibold hover:bg-[#f0f2ff] transition"
              onClick={handleViewPosition}
            >
              View Your Position
            </button>
          </div>
          {/* Podium Card with BG */}
          <div className="bg-[url('/home/leaderboard-bg.webp')] bg-cover bg-center rounded-xl mb-4 border border-gray-100">
            <div className="px-3 pt-2 overflow-hidden">
              <div className="relative w-full flex items-end justify-center h-[176px] gap-6">
                {podium.map((user, idx) => {
                  // Classic fixed heights for podium (kept small for mobile)
                  // increased bar heights so bars reach the base of the container
                  let barHeight = 90,
                    barWidth = 68,
                    avatarSize = 72; // smaller base avatar
                  if (user.rank === 2) {
                    barHeight = 80;
                    barWidth = 52;
                    avatarSize = 60; // slightly smaller for 2nd
                  }
                  if (user.rank === 3) {
                    barHeight = 70;
                    barWidth = 52;
                    avatarSize = 60; // slightly smaller for 3rd
                  }
                  // Avatar container position — restore original vertical offset so the blue div stays where it was
                  let avatarTop = 130 - barHeight - avatarSize / 2 + 45;
                  // nudge 2nd and 3rd place avatars slightly down so they don't look like floating
                  if (user.rank === 2 || user.rank === 3) avatarTop += 5;
                  // Semicircle overlay size: match avatar/bar width
                  const semicircleSize = barWidth + 8;
                  const semicircleContainerHeight = Math.round(semicircleSize / 2);
                  // place avatar and semicircle relative to bar height and container
                  return (
                    <div key={user.rank} className="w-20 flex flex-col items-center relative" style={{ height: 176, justifyContent: "flex-end" }}>
                      {/* Crown for 1st place */}
                      {user.rank === 1 && (
                        <Image src="/icons/crown.svg" alt="Crown" width={28} height={20} className="absolute left-1/2 -translate-x-1/2 z-40" style={{ top: avatarTop - 18 }} />
                      )}
                      {/* Avatar: width matches bar, sits halfway on top of bar */}
                      <div
                        className="rounded-full bg-[#407BFF] flex items-center justify-center z-30 absolute left-1/2 -translate-x-1/2"
                        style={{ width: avatarSize, height: avatarSize, top: avatarTop, overflow: 'visible', flex: '0 0 auto' }}
                      >
                        {/* Render a noticeably smaller inner avatar image and move only the image upward inside the blue container.
                            Use position:relative on the img so the container size is unaffected. */}
                        {(() => {
                          const imageSize = Math.max(20, avatarSize - 22);
                          return (
                            <Image
                              src={user.avatar}
                              alt={`${user.name} avatar`}
                              width={imageSize}
                              height={imageSize}
                              style={{ position: 'relative', transform: 'translateY(-10px)', display: 'block', borderRadius: '50%' }}
                              className="object-cover"
                            />
                          );
                        })()}
                      </div>
                      {/* Semicircle overlay with rank: crop a bit more from the top by translating the circle further up */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 z-40 flex items-center justify-center"
                        style={{
                          // place the semicircle so it visually sits on top of the bar
                          bottom: Math.max(0, barHeight - Math.round(semicircleContainerHeight / 2) - 28),
                          width: semicircleSize - 4,
                          height: semicircleContainerHeight,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: semicircleSize,
                            height: semicircleSize + 5,
                            background: "#fff",
                            borderRadius: semicircleSize / 2,
                            // crop a bit more from the top by translating the circle further up
                            transform: `translateY(-${Math.round(semicircleContainerHeight * 0.85)}px)`,
                          }}
                        />
                        <span style={{ position: "absolute", left: -2, right: 0,margin: '0 auto', fontSize: 14, fontWeight: 700, width: semicircleSize, textAlign: "center", top: '35%', transform: 'translateY(-50%)' }}>{user.rank}</span>
                      </div>
                      {/* For 1st place, name below avatar (positioned slightly lower to avoid overlap) */}
                      {user.rank === 1 && (
                        <span className="text-[10px] text-black w-full text-center truncate block z-30" style={{ position: "absolute", top: avatarTop + avatarSize + 8, left: 0 }}>
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
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
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
          </div>
        {/* Leaderboard List Card - body fills card and scrolls after X entries (desktop: fill and scroll) */}
        <div className={"card-body flex-1 bg-white rounded-xl pt-3 px-3 pb-0 shadow-sm border border-gray-100 max-h-[168px] overflow-y-auto md:max-h-[300px] md:overflow-y-auto"} style={{ minHeight: 0 }}>
          {leaderboard.map((user) => (
            <div
              key={user.rank}
              ref={user.name === userData.name ? userRowRef : undefined}
              className={`flex items-center justify-between py-2 px-3 rounded-lg mb-2 ${
                user.name === userData.name
                  ? "bg-[#FFD66A] text-black shadow-md"
                  : "bg-white"
              }`}
              style={user.name === userData.name ? { border: 'none' } : undefined}
            >
              <div className="flex items-center gap-3">
                <span className="text-[#24218F] text-sm font-semibold">#{user.rank}</span>
                <Image src={user.avatar} alt={user.name} width={32} height={32} className="rounded-full border-2 border-white object-cover" />
                <span className="font-semibold text-sm text-[#222]">{user.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icons/money.svg" alt="coin" width={16} height={16} />
                <span className="font-semibold text-[#2C2E8C] text-sm">{user.points.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div></div>  
    </section>
  );
}
