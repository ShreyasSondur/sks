"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-brand-navy">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-x-0 bottom-0 top-0 z-0 opacity-30 bg-cover bg-right-bottom bg-no-repeat"
                style={{ backgroundImage: "url('/bg-image2.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20 z-10 hidden xl:block">
                <div className="absolute inset-0 border border-white/20 rounded-full scale-[1.0]"></div>
                <div className="absolute inset-[10%] border border-white/10 rounded-full scale-[0.9]"></div>
                <div className="absolute inset-[20%] border border-white/5 rounded-full scale-[0.8] flex items-center justify-center">
                    <div className="rotate-90 text-white/40 font-barlow-condensed font-bold text-[14px] tracking-[0.4em] whitespace-nowrap uppercase">
                        SKS TECHNICAL SERVICES — DUBAI
                    </div>
                </div>
            </div>

            <div className="w-full px-6 md:px-12 lg:px-24 relative z-20 pt-20">
                <div className="max-w-5xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-black/40 border border-white/10 px-4 py-1.5 rounded-sm mb-12 shadow-2xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                        <span className="text-brand-yellow font-barlow font-bold text-[11px] tracking-[0.2em] uppercase">
                            SKS TECHNICAL SERVICES — DUBAI, UAE
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="mb-12">
                        <h1 className="text-[44px] md:text-[85px] lg:text-[110px] font-barlow-condensed font-extrabold text-brand-light leading-[0.9] uppercase tracking-[-0.01em]">
                            BUILDING <br />
                            EXCELLENCE <br />
                            <span className="text-brand-yellow">INTO EVERY SPACE</span>
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="max-w-[580px] text-[#A0AEC0] text-[15px] md:text-[17px] leading-relaxed mb-12 font-barlow font-normal">
                        SKS Dubai delivers expert technical contracting services across the UAE — from interior fit-outs and tiling works to full electromechanical installations. Every project delivered to the highest standards.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5 items-center">
                        <Link
                            href="#services"
                            className="px-10 py-4 bg-brand-yellow text-brand-navy font-barlow font-bold text-[12px] tracking-widest hover:bg-white transition-all duration-300 rounded-sm uppercase flex items-center gap-2 group shadow-xl"
                        >
                            EXPLORE OUR SERVICES
                            <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-10 py-4 border border-white/10 text-brand-light font-barlow font-bold text-[12px] tracking-widest hover:bg-white/5 transition-all duration-300 rounded-sm uppercase"
                        >
                            REQUEST A QUOTE
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

