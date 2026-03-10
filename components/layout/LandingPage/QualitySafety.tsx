"use client";

export default function QualitySafety() {
    const standards = [
        {
            title: "Expert Staff",
            desc: "Expert staff with knowledge of customer requirements and delivery standards across every service line.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
        },
        {
            title: "Adherence to Quality",
            desc: "Strict adherence to quality to ensure continuity and best-in-class service performance across all engagements.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
        },
        {
            title: "Dedicated Project Manager",
            desc: "Strong service delivery governance structure with a dedicated Project Manager assigned to every contract.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
        },
        {
            title: "Documented SOPs & H&S",
            desc: "Documented Standard Operating Procedures, Health & Safety procedures, and escalation matrices for every project.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
        },
        {
            title: "Regular Quality Checks",
            desc: "Regular quality checks with clearly defined action points ensuring standards are maintained and continuously improved.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            ),
        },
        {
            title: "BCP/DR Aligned Projects",
            desc: "Customizable projects tied directly into the Business Continuity and Disaster Recovery plans of each customer.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="quality" className="py-24 md:py-32 bg-[#f8fafc]">
            <div className="w-full px-6 md:px-10 lg:px-24">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-4 block">
                        STANDARDS & ASSURANCE
                    </span>
                    <h2 className="text-[42px] md:text-[52px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-6 uppercase">
                        Quality & Safety
                    </h2>
                    <p className="text-[#64748b] font-barlow text-[16px] leading-relaxed max-w-3xl mx-auto">
                        Our commitment to quality and safety is embedded at every level — from documented <br className="hidden md:block" />
                        SOPs, H&S procedures, and escalation matrices, to BCP/DR-aligned project delivery.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {standards.map((item, index) => (
                        <div key={index} className="relative bg-white py-10 px-10 border border-[#e2e8f0] shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300 group overflow-hidden hover:bg-brand-navy border-transparent hover:shadow-2xl">

                            {/* Icon Box */}
                            <div className="w-11 h-11 bg-[#f1f5f9] rounded-sm mb-7 flex items-center justify-center text-brand-navy group-hover:bg-white/5 group-hover:text-brand-yellow transition-all duration-300">
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
