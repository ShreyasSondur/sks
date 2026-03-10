"use client";

export default function ProjectGovernance() {
    const steps = [
        {
            number: "1",
            title: "Project Discussion with the Client",
            desc: "In depth discovery to understand scope, objectives, and expectations before work begins.",
        },
        {
            number: "2",
            title: "Milestone Based Delivery",
            desc: "Customized milestone-based delivery for every client, ensuring measurable progress.",
        },
        {
            number: "3",
            title: "Clear Definition of Roles & Responsibilities",
            desc: "Every team member has defined responsibilities, ensuring ownership and accountability.",
        },
        {
            number: "4",
            title: "Regular Project Reviews",
            desc: "Scheduled reviews to monitor completion and address challenges proactively.",
        },
        {
            number: "5",
            title: "All Stakeholder Engagement",
            desc: "Transparent communication with all stakeholders at all levels throughout delivery.",
        },
    ];

    const stats = [
        { label: "PERSONNEL", value: "350+" },
        { label: "YEARS", value: "22+" },
        { label: "COUNTRIES", value: "2" },
        { label: "DIVISIONS", value: "3" },
    ];

    return (
        <section className="py-12 md:py-24 bg-[#F8FAFC]">
            <div className="w-full px-6 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Content & Steps */}
                    <div className="lg:col-span-7">
                        <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-4 block">
                            HOW WE DELIVER
                        </span>
                        <h2 className="text-[42px] md:text-[52px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-8 uppercase">
                            Project Governance <br /> & Delivery
                        </h2>
                        <p className="text-[#64748b] font-barlow text-[16px] leading-relaxed mb-2 max-w-xl">
                            Our proven governance model ensures every project is structured around clear milestones, defined responsibilities, regular reviews, and full stakeholder engagement at all levels.
                        </p>

                        <div className="space-y-0">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6 py-4 border-b border-gray-200 last:border-0 group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#001135] text-[#FFC300] font-barlow-condensed font-bold flex items-center justify-center text-[16px]">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-barlow-condensed font-bold text-[#001135]">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#64748b] font-barlow text-[14px] leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Team Card */}
                    <div className="lg:col-span-5 relative">
                        <div className="bg-[#001135] p-8 md:p-10 text-white relative z-10">
                            {/* Subtle graphic in corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none overflow-hidden">
                                <svg width="100%" height="100%" viewBox="0 0 100 100">
                                    <circle cx="100" cy="0" r="80" fill="none" stroke="white" strokeWidth="0.5" />
                                    <circle cx="100" cy="0" r="60" fill="none" stroke="white" strokeWidth="0.5" />
                                    <circle cx="100" cy="0" r="40" fill="none" stroke="white" strokeWidth="0.5" />
                                </svg>
                            </div>

                            <span className="text-brand-yellow font-barlow-condensed font-bold text-[12px] tracking-[0.2em] mb-2 block">
                                SKS TEAM
                            </span>
                            <h3 className="text-[32px] md:text-[36px] font-barlow-condensed font-extrabold leading-tight mb-2 uppercase">
                                Strong Management. <br /> Professional Delivery.
                            </h3>
                            <p className="text-gray-400 font-barlow text-[14px] leading-relaxed mb-6">
                                Strong management team with combined experience across industries and geographies. Professional delivery team trained by successful market leaders. Qualified and skilled staff providing the best services across all sectors.
                            </p>

                            <ul className="space-y-3 mb-10">
                                {[
                                    "Strong management team — combined cross-industry experience",
                                    "Professional delivery team trained by market leaders",
                                    "Qualified & skilled staff across all service lines",
                                    "350+ staff: trained, semi-trained, and fully trained"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center text-[14px] text-gray-300 font-barlow">
                                        <span className="w-2 h-2 bg-brand-yellow rounded-full flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 border border-white/5 bg-[#FFC300]/10">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className={`p-4 md:p-6 border-white/5  
                                            ${i % 2 === 0 ? 'border-r' : ''} 
                                            ${i < 2 ? 'border-b' : ''}
                                            transition-colors duration-300 hover:bg-white/[0.02]
                                        `}
                                    >
                                        <div className="text-brand-yellow text-[36px] md:text-[44px] font-barlow-condensed font-extrabold mb-1 leading-none">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-500 text-[12px] font-barlow font-bold tracking-[0.2em] uppercase">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
