"use client";

import React from "react";

const steps = [
    {
        number: "1",
        title: "Supply Chain Assessment",
        description: "We analyze your logistics requirements and identify the best solution for your operations."
    },
    {
        number: "2",
        title: "Resource & Facility Allocation",
        description: "Trained staff, warehouse space, and transport resources allocated to your contract."
    },
    {
        number: "3",
        title: "Customs & Government Coordination",
        description: "All customs clearance and government liaising requirements handled by our specialist team."
    },
    {
        number: "4",
        title: "Go-Live & Ongoing Management",
        description: "Full go-live support with ongoing end-to-end logistics management and regular performance reviews."
    }
];

export default function DeliveryProcess() {
    return (
        <section className="relative py-20 md:py-32 bg-brand-navy overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-5">
                <div className="absolute inset-0 border border-white rounded-full"></div>
                <div className="absolute inset-[15%] border border-white rounded-full"></div>
                <div className="absolute inset-[30%] border border-white rounded-full"></div>
            </div>

            <div className="w-full px-7 md:px-10 lg:px-24 relative z-10 max-w-[1720px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-64">

                    {/* Left Column: Heading (Centered Vertically) */}
                    <div className="w-full lg:w-[30%] text-left lg:mr-32">
                        <span className="text-brand-yellow font-barlow-condensed font-bold text-[12px] tracking-[0.25em] uppercase mb-4 block">
                            HOW IT WORKS
                        </span>
                        <h2 className="text-[36px] md:text-[45px] font-barlow-condensed font-extrabold text-white leading-[1.0] mb-6 uppercase tracking-tight">
                            Our Delivery Process
                        </h2>
                        <p className="text-white/50 font-barlow text-[16px] leading-relaxed max-w-sm">
                            Our logistics onboarding is designed to have your supply chain operational as quickly as possible.
                        </p>
                    </div>

                    {/* Right Column: Steps (Tighter Spacing) */}
                    <div className="w-full lg:w-[60%]">
                        <div className="flex flex-col">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-6 py-5 ${index !== steps.length - 1 ? "border-b border-white/10" : ""
                                        } group hover:bg-white/5 transition-all duration-300 rounded-sm px-4 -mx-4`}
                                >
                                    {/* Step Number Box */}
                                    <div className="flex-shrink-0 w-11 h-11 bg-brand-yellow flex items-center justify-center rounded-sm shadow-[0_4px_20px_rgba(255,195,0,0.3)]">
                                        <span className="text-brand-navy font-barlow-condensed font-black text-[20px]">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Step Content */}
                                    <div>
                                        <h3 className="text-white font-barlow-condensed font-bold text-[20px] uppercase leading-tight mb-2 group-hover:text-brand-yellow transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/40 font-barlow text-[14px] leading-relaxed max-w-xl">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
