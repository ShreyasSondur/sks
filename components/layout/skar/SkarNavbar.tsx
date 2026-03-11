"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────
interface NavItem {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
}

// ─── Nav config ──────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
    { label: "HOME", href: "/" },
    { label: "OUR SERVICES", href: "#services" },
    { label: "OUR PROCESS", href: "#delivery-process" },
];

// ─── SKS Logo ─────────────────────────────────────────────────────────────────
function SksLogo() {
    return (
        <Link href="/" className="flex items-center select-none shrink-0 group">
            <Image
                src="/logo/logo.png"
                alt="SKS Logo"
                width={52}
                height={26}
                priority
                style={{ objectFit: "contain", height: "26px", width: "auto" }}
            />
            <div className="h-5 w-[1px] bg-white/10 mx-6"></div>
            <span className="text-[#64748b] font-barlow font-bold text-[10px] tracking-[0.3em] uppercase">
                DUBAI
            </span>
        </Link>
    );
}

// ─── Chevron icon ─────────────────────────────────────────────────────────────
function ChevronDown({ open }: { open: boolean }) {
    return (
        <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ml-1 transition-transform duration-200"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            aria-hidden="true"
        >
            <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

// ─── Dropdown Item ────────────────────────────────────────────────────────────
function DropdownItem({ label, href, isLast, mobile }: { label: string; href: string; isLast?: boolean; mobile?: boolean }) {
    const [hovered, setHovered] = useState(false);

    if (mobile) {
        return (
            <Link
                href={href}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="flex items-center py-3 pr-5 text-[11px] tracking-[0.12em] transition-all duration-200"
                style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 600,
                    paddingLeft: hovered ? "20px" : "16px",
                    borderLeft: hovered ? "3px solid var(--brand-yellow)" : "3px solid transparent",
                    color: hovered ? "#ffffff" : "#9ca3af",
                    background: hovered ? "rgba(255, 180, 0, 0.1)" : "transparent",
                }}
            >
                {label}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="block w-full transition-colors duration-200"
            style={{
                padding: "14px 20px",
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: hovered ? "var(--brand-yellow)" : "#d1d5db",
                background: hovered ? "rgba(255, 180, 0, 0.1)" : "transparent",
                borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)",
                textAlign: "left"
            }}
        >
            {label}
        </Link>
    );
}

// ─── Dropdown Menu ────────────────────────────────────────────────────────────
function DropdownMenu({
    items,
    visible,
}: {
    items: { label: string; href: string }[];
    visible: boolean;
}) {
    return (
        <div
            className={`absolute top-[100%] left-1/2 -translate-x-1/2 pt-[24px] transition-all duration-200 z-50 ${visible
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
        >
            <div
                style={{
                    background: "var(--brand-navy)",
                    borderTop: "2px solid var(--brand-yellow)",
                    minWidth: "260px",
                    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.7)",
                }}
            >
                {items.map((item, index) => (
                    <DropdownItem
                        key={item.label}
                        label={item.label}
                        href={item.href}
                        isLast={index === items.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}

// ─── Desktop NavLink ──────────────────────────────────────────────────────────
function DesktopNavLink({ item }: { item: NavItem }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    if (item.dropdown) {
        return (
            <div
                ref={ref}
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <button
                    className="flex items-center text-[11px] tracking-[0.18em] text-gray-300 hover:text-[var(--brand-yellow)] transition-colors duration-200 py-1 cursor-pointer whitespace-nowrap"
                    style={{ fontFamily: "var(--font-barlow), sans-serif", fontWeight: 600 }}
                    aria-haspopup="true"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {item.label}
                    <ChevronDown open={open} />
                </button>
                <DropdownMenu items={item.dropdown} visible={open} />
            </div>
        );
    }

    return (
        <Link
            href={item.href}
            className="text-[11px] tracking-[0.18em] text-gray-300 hover:text-[var(--brand-yellow)] transition-colors duration-200 py-1 whitespace-nowrap"
            style={{ fontFamily: "var(--font-barlow), sans-serif", fontWeight: 600 }}
        >
            {item.label}
        </Link>
    );
}

// ─── Mobile NavLink ───────────────────────────────────────────────────────────
function MobileNavLink({
    item,
    onClose,
}: {
    item: NavItem;
    onClose: () => void;
}) {
    const [open, setOpen] = useState(false);

    if (item.dropdown) {
        return (
            <div>
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="flex items-center justify-between w-full text-[11px] font-semibold tracking-[0.18em] text-gray-300 hover:text-[var(--brand-yellow)] transition-colors duration-200 py-3 border-b border-white/5"
                >
                    {item.label}
                    <ChevronDown open={open} />
                </button>
                {open && (
                    <div className="py-1 mt-1" style={{ borderLeft: "1px solid rgba(255, 180, 0, 0.12)" }}>
                        {item.dropdown.map((sub) => (
                            <div key={sub.label} onClick={onClose}>
                                <DropdownItem
                                    label={sub.label}
                                    href={sub.href}
                                    mobile
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={item.href}
            onClick={onClose}
            className="block text-[11px] font-semibold tracking-[0.18em] text-gray-300 hover:text-[var(--brand-yellow)] transition-colors duration-200 py-3 border-b border-white/5"
        >
            {item.label}
        </Link>
    );
}

// ─── Hamburger Icon ───────────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect
                x="0"
                y="0"
                width="22"
                height="2"
                rx="1"
                fill="currentColor"
                className="transition-all duration-300 origin-center"
                style={open ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}}
            />
            <rect
                x="0"
                y="7"
                width="22"
                height="2"
                rx="1"
                fill="currentColor"
                className="transition-all duration-300"
                style={open ? { opacity: 0 } : {}}
            />
            <rect
                x="0"
                y="14"
                width="22"
                height="2"
                rx="1"
                fill="currentColor"
                className="transition-all duration-300 origin-center"
                style={open ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}}
            />
        </svg>
    );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add subtle shadow on scroll
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
            style={{
                background: "var(--brand-navy)",
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontWeight: 600,
                boxShadow: "0 2px 24px 0 rgba(0,0,0,0.6)",
            }}
        >
            {/* ── Main bar ── */}
            <nav className="mx-auto flex items-center justify-between px-6 md:px-10 lg:px-14" style={{ height: "60px" }}>
                {/* Logo */}
                <SksLogo />

                {/* Desktop – centered nav links */}
                <ul className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label}>
                            <DesktopNavLink item={item} />
                        </li>
                    ))}
                </ul>

                {/* Desktop – right CTAs */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="#contact"
                        className="px-8 py-3 text-[11px] tracking-[0.15em] text-[var(--brand-navy)] bg-[var(--brand-yellow)] hover:bg-white transition-all duration-300 rounded-[14px] whitespace-nowrap"
                        style={{
                            fontFamily: "var(--font-barlow), sans-serif",
                            fontWeight: 700,
                        }}
                    >
                        ENQUIRY
                    </Link>
                </div>

                {/* Mobile – hamburger */}
                <button
                    className="lg:hidden flex items-center justify-center p-2 text-gray-300 hover:text-[var(--brand-yellow)] transition-colors duration-200 -mr-2"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    <HamburgerIcon open={mobileOpen} />
                </button>
            </nav>

            {/* ── Mobile drawer ── */}
            <div
                id="mobile-menu"
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                style={{ background: "var(--brand-navy)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
                <div className="px-6 py-4">
                    {NAV_ITEMS.map((item) => (
                        <MobileNavLink
                            key={item.label}
                            item={item}
                            onClose={() => setMobileOpen(false)}
                        />
                    ))}

                    {/* Mobile CTAs */}
                    <div className="flex flex-col gap-3 mt-5">
                        <Link
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="text-center px-8 py-3 text-[11px] tracking-[0.15em] text-[var(--brand-navy)] bg-[var(--brand-yellow)] hover:bg-white transition-all duration-300 rounded-[14px]"
                            style={{
                                fontFamily: "var(--font-barlow), sans-serif",
                                fontWeight: 700,
                            }}
                        >
                            ENQUIRY
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
