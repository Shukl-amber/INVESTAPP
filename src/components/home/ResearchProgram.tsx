import Image from "next/image";

export default function ResearchProgram() {
  return (
    <section className="bg-[#24218F] lg:bg-yellow-400 lg:grid lg:grid-cols-2 lg:items-center lg:justify-between rounded-2xl px-8 w-full h-fit">
      <div className="h-fit flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-2">
            <h2 className="hidden lg:block font-serif font-bold leading-[126%] text-6xl">Research Campus Program</h2>
            <h2 className="lg:hidden font-sans font-bold leading-[126%] text-[#FFCA56] text-2xl">Research 360 Campus Program</h2>
            <p className="font-sans lg:font-display font-light leading-[156%] text-base lg:font-lg text-white lg:text-black">Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.</p>
        </div>
        <button className='bg-white text-black font-semibold px-6 py-3 rounded-4xl w-fit'>
            Start Your 360 Journey
        </button>
      </div>
    </section>
  );
}