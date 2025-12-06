"use client";
import Image from "next/image";
import Button from "../Button";

export default function DownloadApp() {
    return (
        <section id="download-app" className="w-full grid grid-cols-2 items-start gap-10 justify-end">
            <div className="flex flex-col gap-4 items-start w-full max-w-2xl">
                <h2 className="font-serif font-bold text-4xl leading-[126%] text-[#080808]">Download Research App</h2>
                <p className="font-display font-light text-lg leading-[157%] text-black">
                    Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.
                </p>
                <div className="mt-6">
                    <Button label="Download Now" />
                </div>
                
            </div>
            <div className="w-full justify-end flex">
                <Image src="/home/download-app.webp" alt="Download Mobile App" width={500} height={500} />
            </div>
        </section>
    );
}