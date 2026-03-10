"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg-image.png"
                    alt="SKS Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Left-to-Right Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
            </div>

            <div className="w-full px-7 md:px-10 lg:px-20 relative z-10 pt-40 pb-32">
                <div className="max-w-4xl">
                    {/* Yellow Tag */}
                    <div className="inline-block bg-brand-yellow px-5 py-0.5 mb-3">
                        <span className="text-brand-navy font-barlow-condensed font-bold text-[12px] tracking-[0.2em] uppercase">
                            KUWAIT & DUBAI · EST. 2004
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-[55px] md:text-[80px] lg:text-[100px] font-barlow-condensed font-extrabold text-brand-light leading-[0.85] mb-8 uppercase tracking-[-0.02em]">
                        ENGINEERED FOR <br />
                        <span className="text-brand-yellow">PERFORMANCE.</span> <br />
                        BUILT FOR IMPACT.
                    </h1>

                    {/* Subheadline */}
                    <p className="max-w-[420px] text-brand-gray/80 text-[14px] leading-relaxed mb-10 font-normal">
                        SKS Group of Companies delivers integrated Security, Facilities Management, and Logistics solutions across Kuwait and Dubai — backed by 22+ years of proven excellence, previously known as Alaska International.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mb-20 md:mb-32">
                        <Link
                            href="#services"
                            className="px-10 py-4 bg-brand-yellow text-brand-navy font-barlow font-bold text-[12px] tracking-[0.1em] hover:bg-white transition-all duration-300 rounded-sm uppercase"
                        >
                            EXPLORE SERVICES
                        </Link>
                        <Link
                            href="#contact"
                            className="px-10 py-4 border border-white/20 text-brand-light font-barlow font-bold text-[12px] tracking-[0.1em] hover:bg-white/10 transition-all duration-300 rounded-sm uppercase"
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                        >
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
