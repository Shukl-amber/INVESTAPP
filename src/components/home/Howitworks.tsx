import Image from "next/image";

export default function Howitworks() {
    const steps = [
        { number: 1, icon: "/icons/user.svg", title: "Sign Up", description: "Fill the recruitment form and get onboarded to our ambassador program." },
        { number: 2, icon: "/icons/user.svg", title: "Perform Tasks", description: "Fill the recruitment form and get onboarded to our ambassador program." },
        { number: 3, icon: "/icons/user.svg", title: "Compete & Rank", description: "Fill the recruitment form and get onboarded to our ambassador program." },
        { number: 4, icon: "/icons/user.svg", title: "Unlock Rewards", description: "Fill the recruitment form and get onboarded to our ambassador program." }
    ];

    return (
        <section id="how-it-works" className="w-full flex flex-col gap-16">
            <div className="justify-center items-center flex flex-col gap-2">
                <h2 className="text-center font-serif font-bold text-4xl leading-[126%]">How it Works</h2>
                <p className="max-w-3xl font-display text-center font-light leading-[157%]">Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.</p>
            </div>
            <div className="grid grid-cols-4 justify-between items-center gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="w-full h-fit flex flex-col gap-8 items-center justify-center font-display">
                        <div className="bg-[#FFF7E8] grid grid-rows-2 gap-0 justify-center items-between h-48 p-0 rounded-full">
                            <div className="font-semibold text-4xl leading-[126%] text-center justify-center items-center flex">{step.number}</div>
                            <div className="bg-[#FFBE45] rounded-full p-4 flex justify-center items-center aspect-square"><Image src={step.icon} alt={step.title} width={36} height={36} /></div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 ">
                            <div className="font-semibold text-2xl leading-[126%] text-center">{step.title}</div>
                            <div className="font-normal text-base leading-[142%] text-[#393939] text-center">{step.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}