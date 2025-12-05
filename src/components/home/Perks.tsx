import Image from "next/image"

export default function Perks() {
    const perks = [
        { title: "Goodies & Certification", description: "for completing periodic activities", icon: "/icons/goodies.svg", bg: "#EEEEFF"},
        { title: "Letter of Recommendation from Us", description: "for completing periodic activities", icon: "/icons/letterofrecommendation.svg", bg: "#FFF7E8" },
        { title: "Stipend worth 5000", description: "for completing periodic activities", icon: "/icons/stipend.svg", bg: "#EEFFF0" },
        ]

    return (
        <section id="perks" className="w-full flex flex-col gap-16">
            <div className="justify-center items-center flex flex-col gap-2">
                <h2 className="text-center font-serif font-bold text-4xl leading-[126%]">Perks of Program</h2>
                <p className="max-w-3xl font-display text-center font-light leading-[157%]">Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.</p>
            </div>
            <div className="grid grid-cols-3 justify-between items-center gap-16">
                {perks.map((perk, index) => (
                    <div key={index} className="relative rounded-3xl p-6 flex flex-col gap-4 aspect-square w-full items-start justify-start" style={{ backgroundColor: perk.bg }}>
                        <div className="font-display font-semibold text-2xl text-black leading-[126%] w-[70%]">{perk.title}</div>
                        <div className="font-display font-normal text-base leading-[142%] text-[#393939] w-[70%]">{perk.description}</div>
                        <Image src={perk.icon} alt={perk.title} className="absolute bottom-0 right-0" width={24} height={24} />
                    </div>
                ))}
            </div>
        </section>
  )
}