"use client";

import { Package, Warehouse, Globe, Link, Ruler, Database } from "lucide-react";

export default function Security() {
    const standards = [
        {
            title: "Trained Loading & Packing Staff",
            desc: "Professionally trained staff ensuring cargo is handled safely and efficiently at every stage of the supply chain.",
            icon: <Package size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "Warehouse Operations",
            desc: "Managed warehouse facilities with dedicated operations staff and full inventory management capability.",
            icon: <Warehouse size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "Customs Clearance",
            desc: "Expert customs clearance and government liaising support for smooth cross-border logistics operations.",
            icon: <Globe size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "End-to-End Management",
            desc: "Complete end-to-end logistics support and management tailored entirely to your operational requirements.",
            icon: <Link size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "Client-Tailored Solutions",
            desc: "Solutions tailored to each client's specific needs — no one-size-fits-all approach to supply chain.",
            icon: <Ruler size={20} className="stroke-[2.5px]" />,
        },
        {
            title: "Storage Facilities",
            desc: "Secure, managed storage facilities available to support your warehousing and supply chain requirements.",
            icon: <Database size={20} className="stroke-[2.5px]" />,
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
                        Our Logistics Advantage
                    </h2>
                    <p className="text-[#64748b] font-barlow text-[16px] leading-relaxed max-w-3xl mx-auto">
                        Our logistics network is built on reliability, regional expertise, and a client-first approach to supply chain management.
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
