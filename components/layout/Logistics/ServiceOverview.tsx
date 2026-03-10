"use client";

import { Check, Package, Warehouse, Truck, ClipboardList } from "lucide-react";

export default function ServiceOverview() {
    const listItems = [
        "Trained loading & packing staff for safe, efficient cargo handling",
        "Dedicated warehouse operations staff and storage facilities",
        "End-to-end delivery services across the region",
        "Customs clearance and government liaising support",
        "End-to-end logistics support & management tailored to client needs",
    ];

    const gridItems = [
        {
            title: "Loading & Packing",
            desc: "Trained staff for safe, efficient loading, packing, and cargo handling",
            icon: <Package className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#001135"
        },
        {
            title: "Warehouse Operations",
            desc: "Dedicated warehouse staff and managed storage facilities",
            icon: <Warehouse className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#080C14"
        },
        {
            title: "End-to-End Delivery",
            desc: "Full delivery management from origin to final destination",
            icon: <Truck className="text-brand-yellow w-6 h-6 mb-4" />,
            bgColor: "#001135"
        },
        {
            title: "Customs & Government",
            desc: "Customs clearance and government liaising for cross-border operations",
            icon: <ClipboardList className="text-brand-yellow w-6 h-6 mb-4" />,
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
                            End-to-End Logistics & Supply Chain
                        </h2>
                        <p className="text-brand-navy/60 font-barlow text-[15px] leading-relaxed mb-6 max-w-xl">
                            SKS Logistics provides a full-spectrum supply chain solution — from trained loading and packing staff to warehouse operations, customs clearance, government liaising, and solutions tailored entirely to the client's needs.
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
