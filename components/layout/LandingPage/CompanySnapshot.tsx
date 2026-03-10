"use client";

export default function CompanySnapshot() {
    const gridItems = [
        { title: "Established Name", desc: "Contracting business in Kuwait & Dubai" },
        { title: "Best in Class", desc: "Management team with years of experience" },
        { title: "350 Staff", desc: "Trained, semi-trained & fully trained" },
        { title: "Since 2004", desc: "Previously known as Alaska International" },
    ];

    const listItems = [
        "Established contracting name across Kuwait & Dubai",
        "Best-in-class management team with cross-industry expertise",
        "350 staff — trained, semi-trained and fully trained personnel",
        "Experience and expertise across a range of services and industries",
        "Successfully delivering projects since 2004",
    ];

    return (
        <section id="about" className="py-12 md:py-20 bg-white overflow-hidden">
            <div className="w-full px-6 md:px-10 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Side: 2x2 Grid - Massive Presence */}
                    <div className="w-full lg:w-[55%] pt-22">
                        <div className="grid grid-cols-1 md:grid-cols-2 bg-white/10 gap-[2px] border border-white/5 shadow-[0_20px_50px_rgba(0,17,53,0.15)] overflow-hidden">
                            {gridItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[100px] md:min-h-[120px]"
                                    style={{ backgroundColor: index % 2 === 0 ? '#001135' : '#080C14' }}
                                >
                                    <h3 className="text-brand-yellow font-barlow-condensed font-bold text-[18px] md:text-[22px] uppercase leading-tight tracking-tight mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-brand-gray/50 font-barlow text-[13px] md:text-[14px] leading-tight">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-[45%] pt-4">
                        <span className="text-brand-yellow font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-4 block">
                            COMPANY SNAPSHOT
                        </span>
                        <h2 className="text-[28px] md:text-[28px] lg:text-[34px] font-barlow-condensed font-extrabold text-[#001135] leading-[1.1] mb-2 uppercase tracking-[-0.01em] max-w-2xl">
                            An Established Name in Contracting Across Kuwait & Dubai
                        </h2>
                        <p className="text-[#64748b] font-barlow text-[15px] leading-[1.6] mb-4 max-w-lg font-normal">
                            SKS Group is a trusted multi-service organisation with a best-in-class management team, a skilled workforce of 350+ personnel, and a proven track record of successful project delivery since 2004 — previously known as Alaska International.
                        </p>

                        {/* List with Yellow Dashes */}
                        <ul className="space-y-1">
                            {listItems.map((text, index) => (
                                <li key={index} className="flex items-center gap-5 text-[#64748b] font-barlow text-[14px]">
                                    <span className="w-8 h-[2px] bg-brand-yellow shrink-0"></span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}