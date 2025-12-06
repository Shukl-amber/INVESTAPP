"use client";
import Image from "next/image";

export default function ResearchProgram() {
  return (
    <section className="relative bg-[#24218F] lg:bg-yellow-400 bg-[url('/home/research-bg-mobile.webp')] lg:bg-[url('/home/research-bg-desktop.webp')] bg-center bg-cover lg:grid lg:grid-cols-2 lg:items-center lg:justify-between rounded-2xl px-4 md:px-6 lg:px-8 w-full h-fit min-h-70 overflow-hidden">
      <div className="h-fit flex flex-col gap-6 md:gap-7 lg:gap-8 py-8 md:py-9 lg:py-10">
        <div className="flex flex-col gap-2">
            <h2 className="hidden lg:block font-serif font-bold leading-[126%] text-4xl xl:text-6xl">Research Campus Program</h2>
            <h2 className="lg:hidden font-sans font-bold leading-[126%] text-[#FFCA56] text-lg md:text-xl">Research 360 Campus Program</h2>
            <p className="font-sans lg:font-display font-light leading-[156%] text-sm md:text-base lg:font-lg text-white lg:text-black">Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.</p>
        </div>
        <button className='bg-white text-black font-semibold px-4 md:px-5 lg:px-6 py-2.5 md:py-2.5 lg:py-3 rounded-4xl w-fit text-sm md:text-base'>
            Start Your 360 Journey
        </button>
      </div>
      <Image src="/home/research-img.webp" alt="Research Program" width={500} height={500} className="max-lg:hidden" />
      <Image src="/home/research-img.webp" alt="Research Program" width={180} height={180} className="lg:hidden -bottom-10 right-2 absolute" />
    </section>
  );
}