"use client";

const STATS = [
    { label: "END-TO-END DELIVERY", value: "E2E" },
    { label: "COVERAGE AREA", value: "REGIONAL" },
    { label: "CLEARANCE CAPABILITY", value: "CUSTOMS" },
    { label: "YEARS EXPERIENCE", value: "22+" },
];

export default function StatsBar() {
    return (
        <div className="relative z-20">
            {/* Bottom Yellow Line */}
            <div className="h-[3px] w-full bg-brand-yellow"></div>

            <div className="bg-black/60 backdrop-blur-sm border-t border-white/5">
                <div className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-stretch">
                        {STATS.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-center py-8 px-6 md:py-6 md:px-10 lg:px-20 
                                    ${index % 2 === 0 ? 'border-r border-white/5' : ''} 
                                    ${index < 2 ? 'border-b border-white/5' : ''}
                                    md:border-none
                                    ${index !== 0 ? 'md:border-l md:border-white/10' : ''}
                                `}
                            >
                                <span className="text-brand-yellow font-barlow-condensed font-bold text-[36px] md:text-[32px] leading-none mb-2 md:mb-1">
                                    {stat.value}
                                </span>
                                <span className="text-brand-gray/60 font-barlow-condensed font-bold text-[10px] tracking-[0.2em] uppercase leading-tight">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
