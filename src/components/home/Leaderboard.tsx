export default function Leaderboard() {
    const leaderboard = [
        { rank: 1, name: "Abinav Sawant", points: 1500, avatar: "" },
        { rank: 2, name: "Rishabh Singh", points: 1400, avatar: "" },
        { rank: 3, name: "Caroline Shine", points: 1200, avatar: "" }
    ];

    // Calculate the height of leaderboard div based on max points
    const calculateHeight = (points: number): string => {
        const maxPoints = Math.max(...leaderboard.map(item => item.points));
        const maxHeight = 300; // Maximum height in pixels
        const minHeight = 50; // Minimum height in pixels
        const height = (points / maxPoints) * maxHeight + minHeight;
        return `${height}px`;
    };

    return (
        <section id="milestones" className="bg-[#2C2E8C] flex flex-col items-center justify-between rounded-2xl px-8 w-full h-150">
            <div className="justify-center items-center flex flex-col gap-2 h-fit">
                <h2 className="text-center font-serif font-bold text-4xl leading-[126%]">Our Leaderboard</h2>
                <p className="max-w-3xl font-display text-center font-light leading-[157%]">Bridge the gap between academic learning and practical financial expertise through our gamified internship ecosystem.</p>
            </div>
        </section>
    );
}