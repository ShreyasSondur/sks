"use client";

const STATS = [
    { label: "ESTABLISHED", value: "2004" },
    { label: "TRAINED PERSONNEL", value: "350+" },
    { label: "REGIONAL PRESENCE", value: "KUWAIT & DUBAI" },
    { label: "EXPERIENCE", value: "22+ YRS" },
    { label: "SECTORS SERVED", value: "MULTI-INDUSTRY" },
];

export default function StatsBar() {
    return (
        <div className="relative z-20 bg-black/40 backdrop-blur-md border-t border-white/10">
            <div className="w-full">
                <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 items-stretch no-scrollbar">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-center py-4 px-6 min-w-[140px] md:min-w-0 md:py-6 md:px-10 lg:px-20 border-white/10
                                ${index !== STATS.length - 1 ? 'border-r' : ''}
                                md:border-none md:border-l
                            `}
                        >
                            <span className="text-brand-yellow font-barlow-condensed font-bold text-[18px] md:text-[32px] leading-tight mb-0.5">
                                {stat.value}
                            </span>
                            <span className="text-brand-gray/60 font-barlow-condensed font-bold text-[8px] md:text-[9px] tracking-[0.15em] uppercase leading-tight whitespace-nowrap">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {/* 3px Selective Yellow Line */}
            <div className="h-[3px] w-full bg-[#FFB400]"></div>
        </div>
    );
}
