"use client";

import { Users, MapPin, Home, Monitor, ClipboardList, ShieldCheck } from "lucide-react";

export default function Security() {
    const standards = [
        {
            title: "Professional FM Teams",
            desc: "Trained, professional FM teams assigned to each client site ensuring consistent service standards throughout.",
            icon: <Users size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "Remote Site Capability",
            desc: "Proven capability in remote site management and life support services in challenging environments.",
            icon: <MapPin size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "Accommodation Expertise",
            desc: "Full furnished and unfurnished accommodation solutions managed to the highest standards.",
            icon: <Home size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "Full Support Staff",
            desc: "Office boys, administrative and site support personnel available across all categories and skill levels.",
            icon: <Monitor size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "Documented SOPs",
            desc: "All facilities services are governed by documented Standard Operating Procedures and escalation matrices.",
            icon: <ClipboardList size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "BCP/DR Aligned",
            desc: "FM projects customizable and tied into each customer's Business Continuity and Disaster Recovery plans.",
            icon: <ShieldCheck size={20} className="stroke-[2.5px]" />,
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#f8fafc]">
            <div className="w-full px-6 md:px-10 lg:px-24">

                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-4 block">
                        WHY CHOOSE SKS
                    </span>
                    <h2 className="text-[42px] md:text-[52px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-4 uppercase">
                        Our Facilities Advantage
                    </h2>
                    <p className="text-[#64748b] font-barlow text-[16px] leading-relaxed max-w-3xl mx-auto">
                        SKAR takes ownership of your facilities operations so your business can focus on what it does best.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {standards.map((item, index) => (
                        <div key={index} className="relative bg-white py-10 px-10 border border-[#e2e8f0] shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300 group overflow-hidden hover:bg-brand-navy border-transparent hover:shadow-2xl">

                            {/* Icon Box */}
                            <div className="w-11 h-11 bg-[#f1f5f9] rounded-sm mb-6 flex items-center justify-center text-brand-navy group-hover:bg-white/5 group-hover:text-brand-yellow transition-all duration-300">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <h3 className="text-[20px] font-barlow-condensed font-bold text-[#001135] group-hover:text-brand-yellow mb-4 leading-tight uppercase transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-[#64748b] group-hover:text-white/60 font-barlow text-[14px] leading-relaxed transition-colors duration-300">
                                {item.desc}
                            </p>

                            {/* Bottom Yellow Bar on Hover - Pixel Perfect Detail */}
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
