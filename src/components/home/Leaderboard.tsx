"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Leaderboard() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const leaderboard = [
        { rank: 1, name: "Abinav Sawant", points: 1500, avatar: "/avatar/avatar2.webp" },
        { rank: 2, name: "Rishabh Singh", points: 1300, avatar: "/avatar/avatar3.webp" },
        { rank: 3, name: "Caroline Shine", points: 1000, avatar: "/avatar/avatar1.webp" }
    ];

    // Calculate the height of leaderboard div based on max points
    const calculateHeight = (points: number): string => {
        const maxPoints = Math.max(...leaderboard.map(item => item.points));
        let maxHeight, minHeight;
        
        if (isMobile) {
            maxHeight = 192;
            minHeight = 85;
        } else if (isTablet) {
            maxHeight = 280;
            minHeight = 95;
        } else {
            maxHeight = 360;
            minHeight = 100;
        }
        
        const height = (points / maxPoints) * (maxHeight - minHeight) + minHeight;
        return `${height}px`;
    };

    return (
        <section id="milestones" className="bg-[#2C2E8C] bg-[url(/home/leaderboard-bg.webp)] bg-cover bg-center flex flex-col items-center justify-between rounded-2xl px-4 md:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16 pb-0 w-full min-h-[300px] md:min-h-[450px] lg:min-h-[650px]">
            {/* Title Section */}
            <div className="justify-center items-center flex flex-col gap-2 md:gap-3 lg:gap-4 text-white mb-4 md:mb-6 lg:mb-8">
                <h2 className="text-center font-serif font-bold text-2xl md:text-3xl lg:text-4xl leading-[126%] tracking-widest">Our Leaderboard</h2>
                <p className="max-w-80 font-display text-center text-sm md:text-base lg:text-lg font-light leading-[157%]">Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.</p>
            </div>

            {/* Leaderboard Container */}
            <div className="relative w-full flex items-end justify-center h-[300px] md:h-[400px] lg:h-[500px] gap-4 md:gap-8 lg:gap-12">
                {/* Reorder: 3rd (left), 1st (center), 2nd (right) */}
                {[leaderboard[2], leaderboard[0], leaderboard[1]].map((user) => (
                    <div key={user.rank} className="w-24 md:w-32 lg:w-40 xl:w-48 flex flex-col items-center">
                        <div className="relative flex flex-col items-center gap-0">
                            {user.rank === 1 && (
                                <Image src="/icons/crown.svg" alt="crown" width={17} height={17} className="z-11 -mb-2 md:hidden" />
                            )}
                            {user.rank === 1 && (
                                <Image src="/icons/crown.svg" alt="crown" width={28} height={28} className="z-11 -mb-2.5 hidden md:block lg:hidden" />
                            )}
                            {user.rank === 1 && (
                                <Image src="/icons/crown.svg" alt="crown" width={40} height={40} className="z-11 -mb-3 hidden lg:block" />
                            )}
                            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full bg-[#407BFF] flex items-center justify-center z-10 relative">
                                <Image src={user.avatar} alt={`${user.name} avatar`} width={47} height={47} className="rounded-full md:hidden" />
                                <Image src={user.avatar} alt={`${user.name} avatar`} width={70} height={70} className="rounded-full hidden md:block lg:hidden" />
                                <Image src={user.avatar} alt={`${user.name} avatar`} width={90} height={90} className="rounded-full hidden lg:block xl:hidden" />
                                <Image src={user.avatar} alt={`${user.name} avatar`} width={110} height={110} className="rounded-full hidden xl:block" />
                            </div>
                        </div>
                        <div className="w-[80%] px-1.5 py-1 md:px-2 md:py-1.5 lg:p-3 rounded-sm bg-white text-center text-black font-sans text-xs md:text-sm lg:text-base font-medium leading-[160%] z-20 relative -mb-4 md:-mb-6 lg:-mb-8 -mt-3 lg:-mt-4">
                            {user.name}
                        </div>
                        <div style={{ height: calculateHeight(user.points) }} className="w-full bg-[url(/home/leaderboard-bar.webp)] bg-cover bg-center flex items-center justify-center rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl">
                            <div className="font-sans text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[160%]">#{user.rank}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}