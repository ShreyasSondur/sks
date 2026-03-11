"use client";

import React from "react";
import { Trophy, GraduationCap, Ruler, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
    const advantages = [
        {
            icon: <Trophy size={22} className="text-brand-yellow" />,
            title: "Proven Excellence",
            desc: "22+ years of group experience delivering high-quality contracting projects on time and within budget.",
        },
        {
            icon: <GraduationCap size={22} className="text-gray-400" />,
            title: "Trained Specialists",
            desc: "Every trade is staffed by trained, certified specialists with deep expertise in their respective disciplines.",
        },
        {
            icon: <Ruler size={22} className="text-white rotate-[30deg]" />,
            title: "Precision Finish",
            desc: "Meticulous attention to detail at every stage — from first fix through to final handover inspection.",
        },
        {
            icon: <div className="bg-green-500 rounded-sm p-0.5"><CheckCircle2 className="text-white" size={16} /></div>,
            title: "UAE Compliance",
            desc: "All works delivered in full compliance with UAE building codes, regulations, and industry standards.",
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
                        Why SKS Dubai
                    </h2>
                    <p className="text-[#94a3b8] font-barlow text-[16px] leading-relaxed max-w-2xl mx-auto opacity-80">
                        A proven track record of technical delivery, quality workmanship, and full regulatory compliance across all project types in the UAE.
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
                                <span className="group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <h3 className="text-[18px] font-barlow-condensed font-bold uppercase group-hover:text-white transition-colors duration-500">
                                    {item.title}
                                </h3>
                                <p className="text-[#64748b] group-hover:text-white/60 font-barlow text-[14px] leading-relaxed transition-colors duration-500">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Bottom Yellow Bar on Hover */}
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


