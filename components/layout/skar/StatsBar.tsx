"use client";

const STATS = [
    { label: "UAE OPERATIONS", value: "DUBAI" },
    { label: "SERVICE LINES", value: "10+" },
    { label: "YEARS GROUP EXPERIENCE", value: "22+" },
    { label: "QUALITY COMMITMENT", value: "100%" },
    { label: "GROUP COMPANY", value: "SKS" },
];

export default function StatsBar() {
    return (
        <div className="relative z-20">


            <div className="bg-black/60 backdrop-blur-sm border-t border-white/5">
                <div className="w-full">
                    <div className="flex overflow-x-auto md:grid md:grid-cols-5 items-stretch no-scrollbar">
                        {STATS.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-center py-4 px-6 min-w-[150px] md:min-w-0 md:py-6 md:px-10 lg:px-16 border-white/10
                                    ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}
                                    md:bg-transparent md:border-none
                                    ${index !== 0 ? 'md:border-l' : ''}
                                `}
                            >
                                <span className="text-brand-yellow font-barlow-condensed font-bold text-[20px] md:text-[32px] leading-tight mb-0.5">
                                    {stat.value}
                                </span>
                                <span className="text-brand-gray/60 font-barlow-condensed font-bold text-[9px] tracking-[0.15em] uppercase leading-tight whitespace-nowrap">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Top Yellow Line */}
            <div className="h-[3px] w-full bg-brand-yellow"></div>
        </div>
    );
}
