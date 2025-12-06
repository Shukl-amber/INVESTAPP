"use client";
import Image from "next/image";

export default function Howitworks() {
    const steps = [
        { number: 1, icon: "/icons/UserCircle.svg", title: "Sign Up", description: "Fill the recruitment form and get onboarded to our ambassador program." },
        { number: 2, icon: "/icons/CheckCircle.svg", title: "Perform Tasks", description: "Fill the recruitment form and get onboarded to our ambassador program." },
        { number: 3, icon: "/icons/Ranking.svg", title: "Compete & Rank", description: "Fill the recruitment form and get onboarded to our ambassador program." },
        { number: 4, icon: "/icons/Gift.svg", title: "Unlock Rewards", description: "Fill the recruitment form and get onboarded to our ambassador program." }
    ];

    return (
        <section id="how-it-works" className="w-full flex flex-col gap-10 md:gap-12 lg:gap-16">
            <div className="justify-center items-center flex flex-col gap-2">
                <h2 className="text-center font-serif font-bold text-2xl md:text-3xl lg:text-4xl leading-[126%]">How it Works</h2>
                <p className="max-w-3xl font-display text-center text-sm md:text-base lg:text-lg font-light leading-[157%]">Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-6 md:gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="w-full h-fit flex flex-col lg:flex-col gap-8 lg:gap-8 items-center justify-center font-display">
                        {/* Desktop Design */}
                        <div className="max-lg:hidden bg-[#FFF7E8] grid grid-rows-2 gap-0 justify-center items-between h-44 xl:h-48 p-0 rounded-full">
                            <div className="font-semibold text-3xl xl:text-4xl leading-[126%] text-center justify-center items-center flex">{step.number}</div>
                            <div className="bg-[#FFBE45] rounded-full p-3 xl:p-4 flex justify-center items-center aspect-square"><Image src={step.icon} alt={step.title} width={32} height={32} className="xl:hidden" /><Image src={step.icon} alt={step.title} width={36} height={36} className="hidden xl:block" /></div>
                        </div>
                        
                        {/* Mobile Design */}
                        <div className="lg:hidden flex gap-4 items-center w-full">
                            <div className="relative size-[90px] shrink-0 border-2 border-[#24218F] rounded-full p-2 flex justify-center items-center">
                                <div className="font-sans flex flex-col items-center justify-center leading-[1.26] bg-[#24218F] rounded-full w-full h-full">
                                    <p className="font-medium text-center text-3xl text-white">0{step.number}</p>
                                    <p className="font-normal text-center text-[12px] text-[#DDDDDD]">Step</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <div className="font-semibold text-[15.542px] leading-[126%]">{step.title}</div>
                                <div className="font-normal text-[14px] leading-[142%] text-[#393939]">{step.description}</div>
                            </div>
                        </div>

                        {/* Desktop Text */}
                        <div className="hidden lg:flex flex-col justify-center items-center gap-2">
                            <div className="font-semibold text-xl xl:text-2xl leading-[126%] text-center">{step.title}</div>
                            <div className="font-normal text-sm xl:text-base leading-[142%] text-[#393939] text-center">{step.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}