"use client";

import Link from "next/link";
import { MoveLeft, MoveDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-brand-navy">
            {/* Background Decorative Rings */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
                <div className="absolute inset-0 border border-white/20 rounded-full scale-[1.0]"></div>
                <div className="absolute inset-[15%] border border-white/20 rounded-full scale-[0.8]"></div>
                <div className="absolute inset-[30%] border border-white/20 rounded-full scale-[0.6]"></div>
            </div>

            <div className="w-full px-7 md:px-10 lg:px-24 relative z-10 pt-32 pb-24">
                <div className="max-w-5xl">
                    {/* Top Navigation Buttons */}
                    <div className="flex items-center gap-3 mb-10 w-fit">
                        <Link
                            href="/"
                            className="bg-brand-yellow/5 border border-brand-yellow/50 text-brand-yellow font-barlow font-bold text-[11px] tracking-widest px-6 py-2.5 flex items-center gap-2 transition-all hover:bg-brand-yellow/10 rounded-full uppercase"
                        >
                            <MoveLeft size={16} />
                            BACK TO HOME
                        </Link>
                        <div className="bg-brand-yellow text-brand-navy font-barlow font-bold text-[11px] tracking-widest px-6 py-2 uppercase transition-all">
                            Our Services
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-[45px] md:text-[65px] lg:text-[85px] font-barlow-condensed font-extrabold text-brand-light leading-[0.9] mb-8 uppercase tracking-[-0.01em]">
                        MOVING BUSINESS <br />
                        <span className="text-brand-yellow">FORWARD</span>
                    </h1>

                    {/* Subheadline/Description */}
                    <p className="max-w-[480px] text-brand-gray/60 text-[13px] leading-relaxed mb-12 font-barlow font-normal">
                        SKS Logistics, Warehousing & Supply Chain Solutions provides trained loading & packing staff, warehouse operations, end-to-end delivery, customs clearance, government liaising, and storage facilities — solutions tailored to the client.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <Link
                            href="/enquire"
                            className="px-10 py-3.5 bg-brand-yellow text-brand-navy font-barlow font-bold text-[12px] tracking-widest hover:bg-white transition-all duration-300 rounded-sm uppercase"
                        >
                            Get a Quote
                        </Link>
                        <Link
                            href="#services"
                            className="px-10 py-3.5 border border-white/20 text-brand-light font-barlow font-bold text-[12px] tracking-widest hover:bg-white/5 transition-all duration-300 rounded-sm uppercase flex items-center gap-2"
                        >
                            Learn More <MoveDown size={14} className="text-white/60" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
