"use client";

import React, { useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const contactInfo = [
        {
            icon: (
                <svg className="w-5 h-5 text-[#FFC300]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            label: "WEBSITE",
            value: "www.sksgrpme.com",
        },
        {
            icon: (
                <svg className="w-5 h-5 text-[#FFC300]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "EMAIL",
            value: "info@sksgrpme.com",
        },
        {
            icon: (
                <svg className="w-5 h-5 text-[#FFC300]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            label: "KUWAIT HD",
            value: "PO Box 27786, Safat 131374, Kuwait",
        },
        {
            icon: (
                <svg className="w-5 h-5 text-[#FFC300]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            label: "DUBAI OFFICE",
            value: "Dubai, United Arab Emirates",
        },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.firstName || !formData.email || !formData.message) {
            setError("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // Simulated API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSuccess(true);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-[#F4F5F8] overflow-hidden">
            <div className="w-full px-6 md:px-10 lg:px-12">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-6 md:mb-10">
                    <span className="text-[#FFC300] font-barlow-condensed font-bold text-[13px] tracking-[0.25em] uppercase mb-4 block">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-[40px] md:text-[56px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-6 uppercase tracking-tight">
                        Contact Us
                    </h2>
                    <p className="text-[#64748b] font-barlow text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
                        Ready to discuss your requirements? Reach out and our team will respond within 24 hours with a tailored proposal.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 max-w-7xl mx-auto">

                    {/* Left Column: Info */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <h3 className="text-[28px] md:text-[34px] font-barlow-condensed font-extrabold text-[#001135] leading-tight mb-6 uppercase">
                            Let&apos;s Build Something <br className="hidden md:block" /> Exceptional Together
                        </h3>
                        <p className="text-[#64748b] font-barlow text-[15px] md:text-[16px] leading-relaxed mb-12">
                            Whether you need Security, Facilities Management, or Logistics solutions — we&apos;ll design a service package tailored to your exact operational requirements.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center gap-5">
                                    <div className="flex-shrink-0 w-11 h-11 bg-[#001135] flex items-center justify-center rounded-sm">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div className="text-[#94a3b8] font-barlow-condensed font-bold text-[10px] tracking-[0.2em] uppercase mb-1">
                                            {info.label}
                                        </div>
                                        <div className="text-[#001135] font-barlow text-[14px] md:text-[15px] font-semibold">
                                            {info.value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 md:p-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-50">
                            {isSuccess ? (
                                <div className="text-center py-12 flex flex-col items-center justify-center space-y-4">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-barlow-condensed font-extrabold text-[#001135] uppercase">Submission Successful!</h3>
                                    <p className="text-[#64748b] font-barlow">We have received your enquiry and will get back to you shortly.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-6 text-[#001135] font-barlow-condensed font-bold underline underline-offset-4 uppercase tracking-wider text-sm"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[#001135] font-barlow-condensed font-bold text-[11px] tracking-[0.1em] uppercase block">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="John"
                                                className="w-full bg-[#F8FAFC] border border-gray-100 px-4 py-3.5 text-[14px] font-barlow text-[#001135] outline-none focus:border-[#FFC300] transition-colors placeholder:text-[#757575] placeholder:opacity-100"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[#001135] font-barlow-condensed font-bold text-[11px] tracking-[0.1em] uppercase block">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Smith"
                                                className="w-full bg-[#F8FAFC] border border-gray-100 px-4 py-3.5 text-[14px] font-barlow text-[#001135] outline-none focus:border-[#FFC300] transition-colors placeholder:text-[#757575] placeholder:opacity-100"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[#001135] font-barlow-condensed font-bold text-[11px] tracking-[0.1em] uppercase block">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@company.com"
                                                className="w-full bg-[#F8FAFC] border border-gray-100 px-4 py-3.5 text-[14px] font-barlow text-[#001135] outline-none focus:border-[#FFC300] transition-colors placeholder:text-[#757575] placeholder:opacity-100"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[#001135] font-barlow-condensed font-bold text-[11px] tracking-[0.1em] uppercase block">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+965 XXXX XXXX"
                                                className="w-full bg-[#F8FAFC] border border-gray-100 px-4 py-3.5 text-[14px] font-barlow text-[#001135] outline-none focus:border-[#FFC300] transition-colors placeholder:text-[#757575] placeholder:opacity-100"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[#001135] font-barlow-condensed font-bold text-[11px] tracking-[0.1em] uppercase block">Service Required</label>
                                        <div className="relative">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-[#F8FAFC] border border-gray-100 px-4 py-3.5 text-[14px] font-barlow text-[#001135] outline-none focus:border-[#FFC300] transition-colors appearance-none"
                                            >
                                                <option value="" className="text-[#757575]">Select a service...</option>
                                                <option value="security">Security Services</option>
                                                <option value="facility">Facilities Management</option>
                                                <option value="logistics">Logistics & Support</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[#001135] font-barlow-condensed font-bold text-[11px] tracking-[0.1em] uppercase block">Your Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Tell us about your project or requirements..."
                                            className="w-full bg-[#F8FAFC] border border-gray-100 px-4 py-3.5 text-[14px] font-barlow text-[#001135] outline-none focus:border-[#FFC300] transition-colors resize-none placeholder:text-[#757575] placeholder:opacity-100"
                                            required
                                        ></textarea>
                                    </div>

                                    {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#001135] text-[#FFC300] font-barlow-condensed font-bold text-[14px] tracking-[0.25em] uppercase py-5 hover:bg-[#FFC300] hover:text-[#001135] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 text-brand-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Your Enquiry"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
