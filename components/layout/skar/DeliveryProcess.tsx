"use client";

import React from "react";

const STEPS = [
    {
        id: "1",
        title: "Site Survey & Client Brief",
        desc: "We start with a thorough site survey and detailed client brief to fully understand the scope and requirements.",
    },
    {
        id: "2",
        title: "Proposal & Scope of Works",
        desc: "A detailed, transparent proposal and scope of works is prepared and agreed before any work begins.",
    },
    {
        id: "3",
        title: "Mobilization & Execution",
        desc: "Skilled teams are mobilized on schedule. Works are executed with precision and ongoing QA oversight.",
    },
    {
        id: "4",
        title: "Quality Inspection & Handover",
        desc: "Final quality inspection, snagging resolution, and formal project handover — delivered to your satisfaction.",
    },
];

const STATS = [
    {
        value: "10+",
        label: "SERVICE LINES",
        description: "Specialist service lines covering the full spectrum of interior contracting and MEP works",
    },
    {
        value: "UAE",
        label: "OPERATIONS",
        description: "Dubai-based operations with full capability across the United Arab Emirates",
    },
    {
        value: "24HR",
        label: "RESPONSE",
        description: "Response guarantee — our team will respond to all enquiries within 24 hours",
    },
    {
        value: "SKS",
        label: "GROUP",
        description: "Part of the SKS Group of Companies — Kuwait & Dubai. Est. 2004",
    },
];

export default function DeliveryProcess() {
    return (
        <section id="delivery-process" className="bg-brand-navy py-12 lg:py-20 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    
                    {/* ── Left Column: Steps ────────────────────────────────────────── */}
                    <div className="w-full lg:w-[55%]">
                        <span className="text-brand-yellow font-barlow font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">
                            HOW WE WORK
                        </span>
                        <h2 className="text-[32px] md:text-[42px] font-barlow-condensed font-extrabold text-white leading-tight mb-4 uppercase">
                            Our Project <br />
                            Delivery Process
                        </h2>
                        <p className="text-[#64748b] font-barlow text-[15px] leading-relaxed max-w-xl mb-8">
                            Every project follows our proven delivery methodology — ensuring clarity, accountability, and an exceptional end result.
                        </p>

                        <div className="flex flex-col">
                            {STEPS.map((step, index) => (
                                <div key={step.id} className={`flex gap-5 py-6 ${index !== STEPS.length - 1 ? 'border-b border-white/5' : ''}`}>
                                    <div className="w-9 h-9 bg-brand-yellow flex-shrink-0 flex items-center justify-center text-black font-barlow-condensed font-bold text-[16px]">
                                        {step.id}
                                    </div>
                                    <div className="flex flex-col pt-0.5">
                                        <h3 className="text-white font-barlow-condensed font-bold text-[19px] uppercase leading-none mb-2.5">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#64748b] font-barlow text-[13.5px] leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right Column: Stats Card ──────────────────────────────────── */}
                    <div className="w-full lg:w-[45%] flex items-start pt-8 lg:pt-16">
                        <div className="w-full bg-white/[0.02] border border-white/5 p-8 md:p-10 lg:p-12 relative">
                            {/* Accent Circle Shape (Decorative) */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 border border-white/5 rounded-full pointer-events-none opacity-20"></div>
                            
                            <span className="text-white/20 font-barlow font-bold text-[10px] tracking-[0.3em] uppercase mb-10 block">
                                BY THE NUMBERS
                            </span>

                            <div className="flex flex-col gap-8">
                                {STATS.map((stat, index) => (
                                    <div key={index} className={`flex flex-col pb-8 ${index !== STATS.length - 1 ? 'border-b border-white/5' : ''}`}>
                                        <div className="text-brand-yellow font-barlow-condensed font-extrabold text-[36px] leading-none mb-3">
                                            {stat.value}
                                        </div>
                                        <p className="text-[#64748b] font-barlow text-[13px] leading-relaxed">
                                            {stat.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

