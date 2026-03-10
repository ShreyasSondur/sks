"use client";

import React from "react";

export default function WhyChooseUs() {
    const advantages = [
        {
            icon: "🏆",
            title: "Proven Track Record",
            desc: "High-quality, timely delivery consistently demonstrated across diverse projects since 2004.",
        },
        {
            icon: "💻",
            title: "Technology Commitment",
            desc: "Committed to technological improvement and enhancement across all service operations.",
        },
        {
            icon: "👥",
            title: "Expert Teams",
            desc: "Strong management and professional delivery teams trained by successful market leaders.",
        },
        {
            icon: "🔗",
            title: "Integrated Solutions",
            desc: "Three specialist divisions under one roof — Security, FM, and Logistics, fully coordinated.",
        },
    ];

    return (
        <section id="why-us" className="py-12 md:py-20 bg-[#080C14] text-white overflow-hidden">
            <div className="w-full px-6 md:px-10 lg:px-20">

                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-2 block">
                        WHY CHOOSE US
                    </span>
                    <h2 className="text-[36px] md:text-[62px] font-barlow-condensed font-extrabold text-white leading-tight mb-2 uppercase">
                        Why SKS
                    </h2>
                    <p className="text-[#94a3b8] font-barlow text-[16px] leading-relaxed max-w-2xl mx-auto opacity-80">
                        A proven track record of high-quality, timely delivery combined with a commitment to technological improvement and enhancement.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-white/5 border border-white/5">
                    {advantages.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#080C14] p-6 lg:p-8 hover:bg-[#001135] transition-all duration-500 flex flex-col items-center text-center"
                        >
                            {/* Icon Container */}
                            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-yellow/10 transition-colors duration-500">
                                <span className="text-xl group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <h3 className="text-[18px] font-barlow-condensed font-bold uppercase group-hover:text-white transition-colors duration-500">
                                    {item.title}
                                </h3>
                                <p className="text-[#64748b] group-hover:text-white/60 font-barlow text-[13px] leading-relaxed transition-colors duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
