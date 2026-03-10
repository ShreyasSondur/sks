"use client";

import React, { useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    requirement: string;
}

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        requirement: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            requirement: "",
        });
    };

    const features = [
        "Free on-site security assessment available",
        "Rapid mobilization — deployment within 72 hours",
        "Flexible contract terms to suit your requirements",
        "Dedicated account manager assigned from day one",
    ];

    return (
        <section id="contact" className="py-12 md:py-16 bg-[#FDFDFD] overflow-hidden">
            <div className="container mx-auto px-7 md:px-10 lg:px-24">

                <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-8 lg:gap-12">

                    {/* Left Side: Dark Card */}
                    <div className="lg:w-[42%] bg-brand-navy p-8 md:p-10 flex flex-col justify-between shadow-xl rounded-sm">
                        <div>
                            {/* Logo/Icon Placeholder */}
                            <div className="w-12 h-12 bg-brand-yellow rounded-sm mb-6 flex items-center justify-center">
                                <svg className="w-6 h-6 text-brand-navy" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.11v4.71c0 4.52-3.12 8.71-7 9.87-3.88-1.16-7-5.35-7-9.87V6.29l7-3.11z" />
                                </svg>
                            </div>

                            <h3 className="text-white font-barlow-condensed font-bold text-[30px] leading-tight uppercase mb-4">
                                Let&apos;s Discuss Your <br />
                                Security Needs
                            </h3>
                            <p className="text-white/40 font-barlow text-[14px] leading-relaxed mb-8">
                                Our security specialists are ready to conduct a complimentary assessment and recommend the right protection strategy for your organisation.
                            </p>

                            <ul className="space-y-4">
                                {features.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-white/80 font-barlow text-[13px] font-medium">
                                        <div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 24HR Guarantee Block */}
                        <div className="mt-12 p-6 border border-white/10 rounded-sm bg-black/10">
                            <div className="text-brand-yellow font-barlow-condensed font-black text-[40px] leading-none mb-1">
                                24HR
                            </div>
                            <div className="text-white/30 font-barlow-condensed font-bold text-[12px] tracking-[0.1em] uppercase">
                                Response Guarantee
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Light Card */}
                    <div className="lg:w-[58%] bg-[#F8FAFC] p-8 md:p-10 shadow-lg border border-gray-100/50 rounded-sm">
                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-[28px] font-barlow-condensed font-extrabold text-brand-navy uppercase mb-4">Message Sent!</h3>
                                <p className="text-brand-navy/60 font-barlow mb-10">We have received your enquiry and will be in touch within 24 hours.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-brand-navy font-barlow-condensed font-bold text-[14px] uppercase tracking-widest border-b-2 border-brand-yellow hover:pb-1 transition-all duration-300"
                                >
                                    Send Another Enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-brand-navy font-barlow-condensed font-bold text-[11px] tracking-[0.05em] uppercase">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="John"
                                            className="w-full bg-white border border-[#E2E8F0] px-4 py-3 text-[14px] font-barlow text-brand-navy outline-none focus:border-brand-yellow transition-all shadow-sm"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-brand-navy font-barlow-condensed font-bold text-[11px] tracking-[0.05em] uppercase">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Smith"
                                            className="w-full bg-white border border-[#E2E8F0] px-4 py-3 text-[14px] font-barlow text-brand-navy outline-none focus:border-brand-yellow transition-all shadow-sm"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-brand-navy font-barlow-condensed font-bold text-[11px] tracking-[0.05em] uppercase">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="w-full bg-white border border-[#E2E8F0] px-4 py-3 text-[14px] font-barlow text-brand-navy outline-none focus:border-brand-yellow transition-all shadow-sm"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-brand-navy font-barlow-condensed font-bold text-[11px] tracking-[0.05em] uppercase">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+965 XXXX XXXX"
                                            className="w-full bg-white border border-[#E2E8F0] px-4 py-3 text-[14px] font-barlow text-brand-navy outline-none focus:border-brand-yellow transition-all shadow-sm"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-brand-navy font-barlow-condensed font-bold text-[11px] tracking-[0.05em] uppercase">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Ltd."
                                        className="w-full bg-white border border-[#E2E8F0] px-4 py-3 text-[14px] font-barlow text-brand-navy outline-none focus:border-brand-yellow transition-all shadow-sm"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-brand-navy font-barlow-condensed font-bold text-[11px] tracking-[0.05em] uppercase">Security Requirement</label>
                                    <textarea
                                        name="requirement"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="e.g., Trained security guards for a commercial complex, 3 shifts, plus cash-in-transit support..."
                                        className="w-full bg-white border border-[#E2E8F0] px-4 py-3 text-[14px] font-barlow text-brand-navy outline-none focus:border-brand-yellow transition-all resize-none shadow-sm"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-navy text-white font-barlow-condensed font-bold text-[14px] tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-3 hover:bg-brand-yellow hover:text-brand-navy transition-all duration-500 group"
                                >
                                    {isSubmitting ? "Processing..." : "Submit Security Enquiry —"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
