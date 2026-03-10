"use client";

import { Check, Shield, UserCheck, HardHat, Banknote } from "lucide-react";

export default function ServiceOverview() {
    const listItems = [
        "Provision of fully trained, licensed security staff for your specific requirements",
        "Specialized guarding services including private security and bodyguards",
        "Health & Safety expertise embedded in all security deployments",
        "Cash transportation with secure vaulting & full cash management",
        "Compliance with all local licensing, regulatory, and legislative requirements",
    ];

    const gridItems = [
        {
            title: "Trained Security Staff",
            desc: "Provision of trained, licensed security personnel for any environment",
            icon: <Shield className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#001135"
        },
        {
            title: "Private Security & Bodyguards",
            desc: "Specialized guarding — close protection and executive security",
            icon: <UserCheck className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#080C14"
        },
        {
            title: "Health & Safety Expertise",
            desc: "H&S specialists for safe site operations and incident prevention",
            icon: <HardHat className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#001135"
        },
        {
            title: "Cash Transportation & Vaulting",
            desc: "Secure cash-in-transit with vaulting and full cash management",
            icon: <Banknote className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#080C14"
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="w-full px-7 md:px-10 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-brand-yellow font-barlow-condensed font-bold text-[12px] tracking-[0.25em] uppercase mb-5 block">
                            SERVICE OVERVIEW
                        </span>
                        <h2 className="text-[40px] md:text-[50px] font-barlow-condensed font-extrabold text-brand-navy leading-[1.0] mb-10 uppercase tracking-tight">
                            Comprehensive Security & Cash Solutions
                        </h2>
                        <p className="text-brand-navy/60 font-barlow text-[15px] leading-relaxed mb-6 max-w-xl">
                            SKAR for Security and Cash Services provides end-to-end protection solutions — from trained security staff and specialized guarding to private security, bodyguards, and full cash transportation, vaulting & management.
                        </p>

                        {/* List with Yellow Checkmarks */}
                        <ul className="space-y-4">
                            {listItems.map((text, index) => (
                                <li key={index} className="flex items-start gap-4 text-brand-navy/80 font-barlow text-[14px] font-medium leading-tight">
                                    <div className="bg-brand-yellow p-1 shrink-0 rounded-[2px] mt-0.5">
                                        <Check size={12} className="text-brand-navy stroke-[4px]" />
                                    </div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: 2x2 Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 gap-0 overflow-hidden rounded-sm border border-white/5">
                            {gridItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-10 md:p-12 flex flex-col items-start min-h-[200px]"
                                    style={{ backgroundColor: item.bgColor }}
                                >
                                    {item.icon}
                                    <h3 className="text-white font-barlow-condensed font-bold text-[20px] uppercase leading-tight mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/40 font-barlow text-[12px] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
