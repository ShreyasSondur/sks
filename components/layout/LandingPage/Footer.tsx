import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#001135] text-white pt-16 pb-8 relative border-t-4 border-[#FFC300]">
            <div className="w-full px-6 md:px-10 lg:px-12 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">

                    {/* Column 1: About */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo/logo.png"
                                alt="SKS Logo"
                                width={90}
                                height={30}
                                className="h-auto w-auto"
                                style={{ maxHeight: "30px" }}
                            />
                            <span className="text-[13px] font-barlow-condensed font-bold uppercase tracking-[0.2em] text-[#94a3b8]">
                                Group
                            </span>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[#94a3b8] font-barlow text-[14px] leading-relaxed max-w-md">
                                SKS Group of Companies for Project Management Kuwait • SKS Technical Services Company Dubai.
                            </p>
                            <p className="text-[#94a3b8] font-barlow text-[14px] leading-relaxed max-w-md">
                                Incorporating SKAR Facilities Management, SKAR for Security and Cash Services, and SKS Logistics and Supply Chain Solutions.
                            </p>
                            <p className="text-[#94a3b8] font-barlow text-[14px] leading-relaxed max-w-md">
                                Previously known as Alaska International. Est. 2004.
                            </p>
                        </div>

                    </div>

                    {/* Column 2: Company */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-[#FFC300] font-barlow-condensed font-bold text-[13px] tracking-[0.2em] uppercase">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/#top" },
                                { name: "About Us", href: "/#about" },
                                { name: "Core Values", href: "/#values" },
                                { name: "Quality & Safety", href: "/#quality" },
                                { name: "Social Commitment", href: "/#sustainability" },
                                { name: "Our Clients", href: "/#clients" },
                                { name: "Contact Us", href: "/#contact" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="text-[#94a3b8] font-barlow text-[14px] hover:text-white transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-[#FFC300] font-barlow-condensed font-bold text-[13px] tracking-[0.2em] uppercase">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "SKAR Security & Cash Services", href: "/Security" },
                                { name: "SKAR Facilities Management", href: "/Facilities" },
                                { name: "SKS Logistics & Supply Chain", href: "/Logistics" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="text-[#94a3b8] font-barlow text-[14px] hover:text-white transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="lg:col-span-3 space-y-8">
                        <div>
                            <h4 className="text-[#FFC300] font-barlow-condensed font-bold text-[13px] tracking-[0.2em] uppercase mb-4">
                                Contact
                            </h4>
                            <div className="space-y-4">
                                <div className="text-[#94a3b8] font-barlow text-[14px] leading-relaxed">
                                    <span className="block text-white font-semibold mb-1">Kuwait HQ</span>
                                    PO Box 27786, Safat 131374<br />
                                    Kuwait City, Kuwait
                                </div>
                                <div className="text-[#94a3b8] font-barlow text-[14px] leading-relaxed">
                                    <span className="block text-white font-semibold mb-1">Dubai Office</span>
                                    Dubai, United Arab Emirates
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1 pt-2">
                            <a href="mailto:info@sksgrpme.com" className="block text-[#FFC300] font-barlow text-[14px] hover:underline underline-offset-4">
                                info@sksgrpme.com
                            </a>
                            <a href="https://www.sksgrpme.com" className="block text-[#FFC300] font-barlow text-[14px] hover:underline underline-offset-4">
                                www.sksgrpme.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#475569] font-barlow text-[12px]">
                        © {new Date().getFullYear()} SKS Group of Companies. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-[#475569] font-barlow text-[12px] hover:text-[#94a3b8]">Privacy Policy</Link>
                        <Link href="#" className="text-[#475569] font-barlow text-[12px] hover:text-[#94a3b8]">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
