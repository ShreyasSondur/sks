"use client";

import React from "react";

export default function Sustainability() {
    const commitmentList = [
        {
            icon: (
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: "Waste Reduction",
            desc: "Reduction of waste at every step and ensuring recycling of waste wherever possible.",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            ),
            title: "Waste Management",
            desc: "Responsible disposal of waste as per industry standards & country legislation.",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Environmental Protection",
            desc: "Ensuring minimal negative impact on the environment across all operations and projects.",
        },
    ];

    return (
        <section id="sustainability" className="py-8 md:py-16 bg-white overflow-hidden">
            <div className="w-full px-6 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Column */}
                    <div className="lg:col-span-6">
                        <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-2 block text-left">
                            SUSTAINABILITY
                        </span>
                        <h2 className="text-[42px] md:text-[52px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-4 uppercase">
                            Our Social Commitment
                        </h2>
                        <p className="text-[#64748b] font-barlow text-[16px] leading-relaxed mb-8 max-w-xl">
                            We are committed to responsible business practices that protect the environment, our people, and the communities in which we operate.
                        </p>

                        <div className="space-y-4">
                            {commitmentList.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex gap-6 items-start py-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#001135] flex items-center justify-center rounded-sm">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-[18px] font-barlow-condensed font-bold text-[#001135]">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#64748b] font-barlow text-[14px] leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                    {index < commitmentList.length - 1 && (
                                        <div className="h-[1px] w-full bg-gray-100" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-6 relative">
                        <div className="bg-[#001135] p-10 md:p-8 text-white relative z-10 flex flex-col gap-8 shadow-2xl">
                            {/* Earth Icon / Graphic */}
                            <div className="w-16 h-16 relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                                <img
                                    src="/icons/world.png"
                                    alt="🌍"
                                    className="w-full h-full relative z-10"
                                />
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-[28px] md:text-[42px] font-barlow-condensed font-extrabold leading-none uppercase">
                                    Reuse. Reduce.
                                </h3>
                                <h3 className="text-[28px] md:text-[42px] font-barlow-condensed font-extrabold leading-none uppercase text-brand-yellow">
                                    Recycle.
                                </h3>
                            </div>

                            <p className="text-gray-400 font-barlow text-[16px] leading-relaxed">
                                Our social commitment extends beyond service delivery. We integrate sustainable practices into every project, ensuring compliance with all legislative requirements and a positive legacy for our communities and environment.
                            </p>

                            <div className="border border-[#FFC300]/30 p-6 md:p-6 bg-[#FFC300]/5 backdrop-blur-sm relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-brand-yellow"></div>
                                <p className="text-brand-yellow font-barlow-condensed  text-[13px] md:text-[15px] italic leading-relaxed">
                                    "Compliance with legislative requirements and current industry standards through training of all concerned personnel."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
