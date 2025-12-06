"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const stats = [
        { value: "1,000+", label: "Students" },
        { value: "50+", label: "Colleges" },
        { value: "₹ 23 Lakh", label: "Rewards" }
    ];

    const testimonials = [
        {
            name: "Becky Nelson",
            role: "Campus Expert, MIT Institute of Design",
            image: "/home/testimonial-img.webp",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        },
        {
            name: "John Smith",
            role: "Student Ambassador, Harvard Business School",
            image: "/home/testimonial-img.webp",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"
        },
        {
            name: "Sarah Johnson",
            role: "Campus Leader, Stanford University",
            image: "/home/testimonial-img.webp",
            content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam"
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section id="testimonials" className="flex flex-col gap-10 py-20 w-full overflow-x-hidden">
            {/* Title Section */}
            <div className="flex flex-col gap-2 items-start w-full max-w-2xl">
                <h2 className="text-center font-serif font-bold text-2xl lg:text-4xl leading-[126%] text-[#080808]">Testimonials</h2>
                <p className="max-w-3xl font-display text-sm lg:text-lg font-light leading-[157%] text-black">
                    Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.
                </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row gap-12 items-start w-full overflow-x-hidden">
                {/* Stats Cards */}
                <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-64 shrink-0">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-[#2C2E8C] lg:bg-[#FFCA56] h-fit rounded-xl lg:rounded-3xl px-4 py-3 flex flex-col text-white lg:text-black w-full">
                            <p className="font-sans font-semibold text-base lg:text-3xl leading-[1.6] max-lg:tracking-wider">{stat.value}</p>
                            <p className="font-sans font-normal text-[12px] lg:text-sm leading-[1.6] ">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonials Cards */}
                <div className="relative flex items-center flex-1 overflow-hidden w-full">
                    {/* Fade overlay for next card - Desktop only */}
                    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Cards Container */}
                    <div 
                        className="flex gap-6 items-center transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (isMobile ? 383 : 670)}px)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="border border-[gainsboro] border-solid rounded-[20px] p-3 flex flex-row gap-[19px] shrink-0"
                            >
                                {/* Image - responsive sizing */}
                                <div className="w-[140px] h-[235px] lg:w-72 lg:h-80 rounded-[20px] overflow-hidden shrink-0">
                                    <Image 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                        width={286} 
                                        height={318} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Content - responsive sizing */}
                                <div className="flex flex-col gap-[22px] lg:gap-6 w-[174px] lg:w-80 font-display">
                                    <div className="flex flex-col gap-0.5 capitalize">
                                        <p className="text-base lg:text-2xl text-black leading-normal">{testimonial.name}</p>
                                        <p className="text-xs lg:text-base text-[#555555] leading-normal">{testimonial.role}</p>
                                    </div>
                                    <p className="text-xs lg:text-[17px] text-black leading-[1.45] lg:leading-8">
                                        {testimonial.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button 
                        onClick={handleNext}
                        className="absolute -right-2 lg:right-0 top-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-300 z-50 cursor-pointer"
                        aria-label="Next testimonial"
                        type="button"
                    >
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 24L20 16L12 8" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
