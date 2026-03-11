"use client";

import {
    Layout,
    Image as ImageIcon,
    Layers,
    Pipette,
    Grid3X3,
    Sparkles,
    Droplets,
    Hammer,
    Brush,
    Zap,
    Wind,
    Wrench,
    ClipboardCheck
} from "lucide-react";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const MAIN_SERVICES: ServiceItem[] = [
    {
        id: "01",
        title: "False Ceiling & Light Partitions Installation",
        description: "Professional installation of gypsum, metal, and acoustic false ceilings, along with lightweight partition systems for commercial and residential interiors.",
        icon: <Layout size={24} />,
    },
    {
        id: "02",
        title: "Wallpaper Fixing Works",
        description: "Expert wallpaper supply and installation across all surface types — from luxury residential spaces to high-traffic commercial environments, with precision finish guaranteed.",
        icon: <ImageIcon size={24} />,
    },
    {
        id: "03",
        title: "Insulation Contracting",
        description: "Thermal, acoustic, and fire-rated insulation contracting solutions for walls, roofs, and pipework, ensuring energy efficiency and regulatory compliance.",
        icon: <Layers size={24} />,
    },
    {
        id: "04",
        title: "Plaster Works",
        description: "Internal and external plastering works including skim coat, sand & cement, and decorative plaster finishes — applied to the highest workmanship standards.",
        icon: <Pipette size={24} />,
    },
    {
        id: "05",
        title: "Floor & Wall Tiling Works",
        description: "Precision floor and wall tiling for residential, commercial, and industrial projects — working with all materials including ceramic, porcelain, marble, and stone.",
        icon: <Grid3X3 size={24} />,
    },
    {
        id: "06",
        title: "Engraving & Ornamentation Works",
        description: "Decorative engraving, ornamental detailing, and bespoke finishing works for premium interiors — bringing artistic precision to architectural and design projects.",
        icon: <Sparkles size={24} />,
    },
    {
        id: "07",
        title: "Plumbing & Sanitary Installation",
        description: "Full plumbing and sanitary installation services for new builds and fit-outs — including supply lines, drainage, fixtures, and sanitary ware across all project types.",
        icon: <Droplets size={24} />,
    },
    {
        id: "08",
        title: "Carpentry & Wood Flooring Works",
        description: "Custom carpentry, joinery, and wood flooring installation for premium interiors — hardwood, engineered wood, and laminate flooring fitted to perfection.",
        icon: <Hammer size={24} />,
    },
    {
        id: "09",
        title: "Building Cleaning Services",
        description: "Professional post-construction and ongoing building cleaning services — internal, external, and specialist cleaning for handover-ready finishes.",
        icon: <Brush size={24} />,
    },
];

const FLAGSHIP_SUB_SERVICES = [
    {
        title: "Electrical Installation",
        description: "LV/MV panels, cabling, lighting, and power distribution systems installed to code.",
        icon: <Zap size={20} className="text-brand-yellow" />,
    },
    {
        title: "Mechanical Systems",
        description: "HVAC, ventilation, and mechanical equipment installation and commissioning.",
        icon: <Wind size={20} className="text-brand-yellow" />,
    },
    {
        title: "Preventive Maintenance",
        description: "Scheduled maintenance contracts ensuring maximum uptime and equipment longevity.",
        icon: <Wrench size={20} className="text-brand-yellow" />,
    },
    {
        title: "Compliance & Testing",
        description: "All works carried out to UAE regulatory standards with full testing and documentation.",
        icon: <ClipboardCheck size={20} className="text-brand-yellow" />,
    },
];

export default function ServiceOverview() {
    return (
        <section id="services" className="bg-[#f8fafc] px-6 md:px-12 pb-12">
            {/* ── Header ───────────────────────────────────────────────────────────── */}
            <div className="pt-24 pb-16 px-6 md:px-12 lg:px-24 text-center">
                <span className="text-brand-yellow font-barlow font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">
                    WHAT WE OFFER
                </span>
                <h2 className="text-[42px] md:text-[52px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-6 uppercase">
                    Our Services
                </h2>
                <p className="text-[#64748b] font-barlow text-[15px] leading-relaxed max-w-2xl mx-auto">
                    SKS Dubai provides a comprehensive range of technical contracting and fit-out services across the UAE — each delivered with precision, compliance, and quality assurance.
                </p>
            </div>
            {/* ── Main Services Grid (01-09) ───────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-gray-200">
                {MAIN_SERVICES.map((service) => (
                    <div
                        key={service.id}
                        className="relative p-10 md:p-12 border-b border-r last:border-r-0 md:even:border-r-0 lg:even:border-r lg:nth-3n:border-r-0 border-gray-200 group transition-all duration-500 hover:bg-brand-navy cursor-default overflow-hidden"
                    >
                        {/* Huge background number */}
                        <div className="absolute top-8 right-10 text-[80px] font-barlow-condensed font-black text-black/[0.03] group-hover:text-white/[0.03] transition-colors duration-500 select-none">
                            {service.id}
                        </div>

                        {/* Icon Box */}
                        <div className="w-12 h-12 bg-[#f1f5f9] group-hover:bg-white/5 rounded-sm flex items-center justify-center text-brand-navy group-hover:text-brand-yellow transition-all duration-500 mb-8 relative z-10">
                            {service.icon}
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-[20px] font-barlow-condensed font-bold text-[#001135] group-hover:text-brand-yellow uppercase leading-tight mb-4 transition-colors duration-500">
                                {service.title}
                            </h3>
                            <p className="text-[#64748b] group-hover:text-white/40 font-barlow text-[14px] leading-relaxed transition-colors duration-500">
                                {service.description}
                            </p>
                        </div>

                        {/* Bottom Yellow Bar (Visible on Hover) */}
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </div>
                ))}
            </div>

            {/* ── Flagship Service (10) ────────────────────────────────────────────── */}
            <div className="flex flex-col lg:flex-row min-h-[400px]">
                {/* Left Side: Service Description */}
                <div className="w-full lg:w-[33.28%] bg-brand-navy p-12 md:p-16 flex flex-col justify-center relative">
                    <span className="text-brand-yellow font-barlow font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">
                        FLAGSHIP SERVICE
                    </span>
                    <div className="text-brand-yellow font-barlow-condensed font-black text-[56px] leading-none mb-4">
                        10
                    </div>
                    <h3 className="text-white font-barlow-condensed font-bold text-[28px] uppercase leading-tight mb-6">
                        Electromechanical Equipment <br />
                        Installation & Maintenance
                    </h3>
                    <p className="text-white/40 font-barlow text-[14px] leading-relaxed mb-8">
                        End-to-end electromechanical solutions — from initial installation to long-term maintenance contracts.
                    </p>
                    <div className="w-12 h-[3px] bg-brand-yellow"></div>
                </div>
                {/* Right Side: Sub-services Grid */}
                <div className="w-full lg:w-[66.72%] bg-[#020a1a] p-8 md:p-12 lg:p-16 flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {FLAGSHIP_SUB_SERVICES.map((sub, idx) => (
                            <div key={idx} className="group bg-[#080f1d] p-8 lg:p-10 border border-white/[0.03] transition-all duration-300 hover:bg-[#0c1629] min-h-[160px] flex flex-col justify-center">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                        {sub.icon}
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-white font-barlow-condensed font-bold text-[18px] uppercase group-hover:text-brand-yellow transition-colors leading-tight mb-2">
                                            {sub.title}
                                        </h4>
                                        <p className="text-white/30 font-barlow text-[13px] leading-relaxed max-w-[280px]">
                                            {sub.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
