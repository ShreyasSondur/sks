"use client";

import React from "react";

export default function OurClients() {
    const clientList = [
        "General Contracting & Construction",
        "Gemsil Group of Companies",
        "ACICO Group",
        "Dong Yang Corrosion Eng.",
        "IPL",
        "IMCO Engineering",
        "Arabian Construction Co.",
    ];

    // Double the list for seamless marquee
    const marqueeClients = [...clientList, ...clientList];

    return (
        <section id="clients" className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="w-full">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16 px-6">
                    <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-4 block">
                        TRUSTED BY
                    </span>
                    <h2 className="text-[42px] md:text-[52px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-6 uppercase">
                        Our Clients
                    </h2>
                    <p className="text-[#64748b] font-barlow text-[16px] leading-relaxed max-w-3xl mx-auto">
                        We are proud to partner with leading organisations across construction, oil & gas, logistics, and retail sectors throughout the region.
                    </p>
                </div>

                {/* Horizontal Client Strip (Marquee) */}
                <div className="relative border-y border-gray-100 bg-white group mt-8">
                    {/* Gradient Fades for Premium Look */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="flex overflow-hidden group">
                        <div className="flex animate-marquee whitespace-nowrap py-8 group-hover:[animation-play-state:paused]">
                            {marqueeClients.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex items-center px-10 md:px-16 border-r border-gray-100 last:border-r-0"
                                >
                                    <span className="text-[14px] md:text-[16px] font-barlow-condensed font-bold text-[#001135] uppercase tracking-[0.1em] transition-all duration-300 hover:scale-110 cursor-default cursor-pointer">
                                        {client}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Marquee Animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </section>
    );
}
