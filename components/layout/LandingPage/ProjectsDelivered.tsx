"use client";

import React from "react";

export default function ProjectsDelivered() {
    const projects = [
        {
            icon: "📦",
            title: "Chinese Brand Logistics",
            desc: "Warehousing, customs clearance, storage and deliveries for major Chinese brands operating in the region.",
        },
        {
            icon: "⛽",
            title: "Iraq Oil & Gas Support",
            desc: "Logistics support for Oil and Gas projects in Southern Iraq, providing procurement and transportation services.",
        },
        {
            icon: "🏗️",
            title: "ACICO Group",
            desc: "Manpower supply and logistics support for ACICO Group across their construction and materials operations.",
        },
        {
            icon: "🔧",
            title: "Chevron Supply Chain",
            desc: "Supply Chain Logistics solutions delivered for Chevron's Kuwait operations.",
        },
        {
            icon: "🛢️",
            title: "FKS – Rig Maintenance",
            desc: "Manpower supply for FKS Company involved with rig maintenance and offshore operations.",
        },
        {
            icon: "🌐",
            title: "Gemsil Group",
            desc: "Project support services for Gemsil Group of Companies across multiple project workstreams.",
        },
        {
            icon: "🏋️",
            title: "Regional Gate – Heavy Lift",
            desc: "Manpower Supply & Logistics support for Regional Gate dealing with heavy lift operations.",
        },
    ];

    return (
        <section id="projects" className="py-12 md:py-20 bg-[#F8FAFC] overflow-hidden">
            <div className="w-full px-6 md:px-10 lg:px-20">

                {/* Header */}
                <div className="text-center mb-6 md:mb-12">
                    <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-4 block">
                        TRACK RECORD
                    </span>
                    <h2 className="text-[42px] md:text-[52px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-6 uppercase">
                        Projects Delivered
                    </h2>
                    <p className="text-[#64748b] font-barlow text-[16px] leading-relaxed max-w-3xl mx-auto">
                        A selection of projects delivered by SKS Group across Kuwait, Dubai, and the broader region.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-3 p-6 md:p-8 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1"
                        >
                            {/* Icon Box */}
                            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#001135] flex items-center justify-center rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <span className="text-xl md:text-2xl">
                                    {project.icon}
                                </span>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-[18px] md:text-[20px] font-barlow-condensed font-bold text-[#001135] mb-2 uppercase group-hover:text-[#001135] transition-colors duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-[#64748b] font-barlow text-[14px] md:text-[15px] leading-relaxed group-hover:text-[#475569] transition-colors duration-500">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
