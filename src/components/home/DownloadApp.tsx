"use client";
import Image from "next/image";
import Button from "../Button";

export default function DownloadApp() {
    return (
        <section id="download-app" className="w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-8 md:gap-9 lg:gap-10 justify-end">
            <div className="flex flex-col gap-3 md:gap-4 items-start w-full max-w-2xl">
                <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl leading-[126%] text-[#080808]">Download Research App</h2>
                <p className="font-display text-sm md:text-base lg:text-lg font-light leading-[157%] text-black">
                    Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.
                </p>
                <div className="mt-2 md:mt-3 lg:mt-6">
                    <Button label="Download Now" />
                </div>
                
            </div>
            <div className="w-full justify-end flex">
                <Image src="/home/download-app.webp" alt="Download Mobile App" width={500} height={500} className="w-full md:w-[400px] lg:w-[450px] xl:w-[500px]" />
            </div>
        </section>
    );
}