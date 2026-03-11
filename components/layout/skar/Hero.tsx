"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
    const whatsappNumber = "+917259518788";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}`;

    return (
        <section className="relative min-h-screen flex flex-col font-barlow">
            {/* --- Navbar --- */}
            <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-16 bg-[#011135]">
                <div className="w-1/4 hidden md:block"></div>
                
                {/* Centered Logo */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-[200px] h-[80px]">
                        <Image 
                            src="/logo/skar-logo.png" 
                            alt="SKAR Logo" 
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 w-1/4 justify-end">
                    <a 
                        href={`tel:${whatsappNumber}`}
                        className="flex items-center gap-2 px-6 py-3 bg-[#E2E8F0]/90 hover:bg-white text-[#4A5568] rounded-full transition-all text-[15px] font-semibold"
                        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    >
                        <span>Call us</span>
                        <Phone size={18} strokeWidth={2.5} />
                    </a>
                    <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-white rounded-full transition-all text-[15px] font-bold shadow-lg"
                    >
                        <span>WhatsApp</span>
                        <MessageCircle size={20} fill="white" strokeWidth={0} />
                    </a>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <div className="relative flex-1 flex items-center justify-center pt-32 md:pt-40 min-h-[75vh]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/bg-image3.png" 
                        alt="Cityscape" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Coming Soon Text */}
                <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                    <h1 className="text-white text-[55px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-playfair tracking-normal leading-[1.1] uppercase select-none font-bold drop-shadow-2xl">
                        Coming Soon
                    </h1>
                </div>

                {/* Floating WhatsApp Right */}
                <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20"
                >
                    <div className="bg-white p-0.5 rounded-full shadow-2xl">
                        <div className="bg-[#25D366] p-4 md:p-5 rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer">
                            <MessageCircle size={40} fill="white" strokeWidth={0} className="text-white" />
                        </div>
                    </div>
                </a>
            </div>

            {/* --- Contact Form Section (Overlapping) --- */}
            <div className="relative z-30 -mt-20 md:-mt-16 px-6 pb-20">
                <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 md:p-12 border border-gray-100">
                    <form className="flex flex-col md:flex-row gap-6 items-stretch">
                        <div className="flex-1">
                            <input 
                                type="text" 
                                placeholder="Your Name"
                                className="w-full px-6 py-5 bg-white border border-[#CBD5E0]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow font-medium text-gray-700 placeholder:text-[#A0AEC0] text-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <input 
                                type="email" 
                                placeholder="Email Address"
                                className="w-full px-6 py-5 bg-white border border-[#CBD5E0]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow font-medium text-gray-700 placeholder:text-[#A0AEC0] text-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <input 
                                type="tel" 
                                placeholder="Mobile Number"
                                className="w-full px-6 py-5 bg-white border border-[#CBD5E0]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow font-medium text-gray-700 placeholder:text-[#A0AEC0] text-lg"
                            />
                        </div>
                        <div className="md:w-64">
                            <button 
                                type="button"
                                className="w-full h-full py-5 bg-[#050B1B] hover:bg-[#0A1633] text-[#FBD38D] text-xl font-bold rounded-xl transition-all shadow-xl uppercase tracking-[0.1em]"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
