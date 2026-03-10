"use client";

import Link from "next/link";

export default function CoreServices() {
    const services = [
        {
            category: "SKAR FOR SECURITY AND CASH SERVICES",
            title: "SKAR Security & Cash Services",
            desc: "Provision of trained security staff, specialized guarding, private security & bodyguards, health & safety expertise, and full cash transportation, vaulting & management.",
            list: [
                "Provision of trained security staff",
                "Specialized guarding — private security, bodyguards",
                "Health & Safety expertise",
                "Cash transportation, vaulting & management",
            ],
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-navy">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
            href: "/Security",
        },
        {
            category: "SKAR FACILITIES MANAGEMENT",
            title: "SKAR Facilities Management",
            desc: "Professional porters, cleaners, janitors & valets; office boys, administrative staff, remote site management, life support services and furnished/unfurnished accommodation.",
            list: [
                "Professional porters, cleaners, janitors & valets",
                "Office boys & administrative staff",
                "Remote site management & life support",
                "Furnished & unfurnished accommodation",
            ],
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-navy">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                    <path d="M3 9h18" />
                    <path d="M3 15h18" />
                </svg>
            ),
            href: "/Facilities",
        },
        {
            category: "SKS LOGISTICS, WAREHOUSING & SUPPLY CHAIN",
            title: "SKS Logistics & Supply Chain",
            desc: "Trained loading & packing staff, warehouse operations, end-to-end delivery, customs clearance, government liaising, and storage facilities — solutions tailored to the client.",
            list: [
                "Trained loading & packing staff",
                "End to end delivery services",
                "Customs clearance & government liaising",
                "Storage facilities & warehouse operations",
            ],
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-navy">
                    <path d="M10 17h4V22h-4z" />
                    <path d="M20 17h2v5h-2z" />
                    <path d="M2 17h2v5H2z" />
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                </svg>
            ),
            href: "/Logistics",
        },
    ];

    return (
        <section id="services" className="py-24 md:py-32 bg-[#F8FAFC]">
            <div className="w-full px-6 md:px-10 lg:px-20">

                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-4 block">
                        WHAT WE DO
                    </span>
                    <h2 className="text-[42px] md:text-[52px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-6 uppercase">
                        Our Core Services
                    </h2>
                    <p className="text-[#64748b] font-barlow text-[16px] leading-relaxed max-w-3xl mx-auto">
                        SKS provides, integrates, oversees, and controls the full project lifecycle — from <br className="hidden md:block" />
                        discovery and resource deployment to seamless final delivery across three specialist <br className="hidden md:block" />
                        divisions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-8 md:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] group hover:bg-[#001135] transition-all duration-500 flex flex-col items-start min-h-[450px]"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-[#F1F5F9] rounded-sm flex items-center justify-center mb-8 group-hover:bg-brand-yellow/10 transition-colors duration-500">
                                <div className="group-hover:text-brand-yellow transition-colors duration-500">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full">
                                <span className="text-[#94a3b8] group-hover:text-brand-yellow font-barlow-condensed font-bold text-[10px] tracking-[0.15em] uppercase block transition-colors duration-500">
                                    {service.category}
                                </span>
                                <h3 className="text-[24px] font-barlow-condensed font-extrabold text-[#001135] group-hover:text-white leading-tight mb-3 uppercase transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-[#64748b] group-hover:text-white/70 font-barlow text-[14px] leading-relaxed mb-5 transition-colors duration-500">
                                    {service.desc}
                                </p>

                                {/* List */}
                                <ul className="space-y-3 mb-6">
                                    {service.list.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2  text-[#64748b] group-hover:text-white font-barlow text-[13px] leading-tight transition-colors duration-500">
                                            <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full mt-1.5 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Link */}
                            <div className="mt-auto">
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-2 text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.1em] uppercase hover:gap-4 transition-all duration-300"
                                >
                                    EXPLORE SERVICE <span className="text-lg">→</span>
                                </Link>
                            </div>

                            {/* Bottom Yellow Bar on Hover - Pixel Perfect Detail */}
                            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
