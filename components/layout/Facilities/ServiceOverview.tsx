"use client";

import { Check, Sparkles, Monitor, MapPin, Home } from "lucide-react";

export default function ServiceOverview() {
    const listItems = [
        "Professional porters, cleaners, janitors & valets for all facility types",
        "Provision of office boys, administrative and support staff",
        "Remote site management for challenging or off-site locations",
        "Life support services including catering and welfare facilities",
        "Furnished and unfurnished accommodation management and provision",
    ];

    const gridItems = [
        {
            title: "Cleaning & Janitorial",
            desc: "Professional cleaners, janitors, porters & valets for all environments",
            icon: <Sparkles className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#001135"
        },
        {
            title: "Admin & Office Support",
            desc: "Provision of office boys, administrative and support staff",
            icon: <Monitor className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#080C14"
        },
        {
            title: "Remote Site Management",
            desc: "End-to-end FM management for remote and off-grid locations",
            icon: <MapPin className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#001135"
        },
        {
            title: "Accommodation Services",
            desc: "Furnished & unfurnished accommodation management",
            icon: <Home className="text-brand-yellow w-6 h-6 mb-4" />,
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
                            Integrated Facilities Management Solutions
                        </h2>
                        <p className="text-brand-navy/60 font-barlow text-[15px] leading-relaxed mb-6 max-w-xl">
                            SKAR Facilities Management delivers a comprehensive range of services tailored to your needs — from day-to-day cleaning and support staff to remote site management, life support, and full accommodation solutions.
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
