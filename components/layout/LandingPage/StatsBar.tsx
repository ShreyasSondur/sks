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
        <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="bg-black/30 backdrop-blur-sm border-t border-white/5">
                <div className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch">
                        {STATS.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-center py-8 px-6 md:py-6 md:px-10 lg:px-20 
                                    ${index % 2 === 0 ? 'border-r border-white/5' : ''} 
                                    ${index < 4 ? 'border-b border-white/5' : ''}
                                    md:border-none md:divide-x md:divide-white/10
                                    ${index !== 0 ? 'md:border-l md:border-white/10' : ''}
                                `}
                            >
                                <span className="text-brand-yellow font-barlow-condensed font-bold text-[36px] md:text-[32px] leading-none mb-2 md:mb-1">
                                    {stat.value}
                                </span>
                                <span className="text-brand-gray/60 font-barlow-condensed font-bold text-[10px] md:text-[9px] tracking-[0.2em] uppercase leading-tight">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* 2px Selective Yellow Line */}
            <div className="h-[3px] w-full bg-[#FFB400]"></div>
        </div>
    );
}
