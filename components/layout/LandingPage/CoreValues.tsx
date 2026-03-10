"use client";

export default function CoreValues() {
    const values = [
        {
            title: "Investment in People",
            desc: "Investment in our people to ensure best resource deployment and continuous skill development.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
        },
        {
            title: "Health, Safety & Environment",
            desc: "Emphasis on HSE in all projects. Prevention of accidents and environmental protection is key.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
                </svg>
            ),
        },
        {
            title: "Robust Policies & Procedures",
            desc: "Robust policies and procedures to ensure standard delivery across all engagements.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
            ),
        },
        {
            title: "Strong Service Governance",
            desc: "Strong service delivery governance for all projects with documented KPIs, SLAs, and lessons learnt.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            ),
        },
        {
            title: "Efficiency & Productivity",
            desc: "Efficiency and productivity-focused delivery optimized for client outcomes and operational excellence.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
        },
        {
            title: "Reduce, Reuse & Recycle",
            desc: "Committed to reducing, reusing, and recycling waste in line with industry standards and country legislation.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="7 11 2 11 2 21 12 21 12 16" />
                    <polyline points="12 8 12 3 22 3 22 13 17 13" />
                    <polyline points="16 12 21 17 16 22" />
                    <polyline points="8 12 3 7 8 2" />
                </svg>
            ),
        },
    ];

    return (
        <section id="values" className="py-8 md:py-16 bg-[#001135] relative overflow-hidden">
            {/* Subtle Background Graphic */}
            <div className="absolute top-0 right-[-10%] w-[60%] h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="100" cy="50" r="50" fill="none" stroke="white" strokeWidth="0.1" />
                    <circle cx="100" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.1" />
                    <circle cx="100" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.1" />
                </svg>
            </div>

            <div className="w-full px-6 md:px-10 lg:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-4 block">
                        OUR PRINCIPLES
                    </span>
                    <h2 className="text-[42px] md:text-[52px] font-barlow-condensed font-extrabold text-white leading-tight mb-6 uppercase">
                        SKS Core Values
                    </h2>
                    <p className="text-gray-400 font-barlow text-[16px] leading-relaxed max-w-3xl mx-auto">
                        The values that drive every decision, deployment, and project we deliver <br className="hidden md:block" /> across all three divisions.
                    </p>
                </div>

                {/* Grid Container */}
                <div className=" grid grid-cols-1 gap-0.5 md:grid-cols-2 lg:grid-cols-3  ">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className=" border-1 border-white/5 relative p-8 md:p-10 bg-[#00143B] transition-all duration-500 group-hover:bg-brand-yellow/[0.04] group-hover:shadow-[inset_0_0_40px_rgba(255,180,0,0.03)] group"
                        >
                            {/* Hover Border Overlay */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-yellow pointer-events-none transition-all duration-300 z-10"></div>

                            <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center text-white mb-6 group-hover:bg-[#1c2a4a] transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-[22px] font-barlow-condensed font-extrabold text-white group-hover:text-brand-yellow mb-2 leading-tight transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 font-barlow text-[14px] leading-relaxed w-full">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
