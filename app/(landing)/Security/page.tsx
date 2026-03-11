import Hero from "@/components/layout/Security/Hero";
import StatsBar from "@/components/layout/Security/StatsBar";
import ServiceOverview from "@/components/layout/Security/ServiceOverview";
import Security from "@/components/layout/Security/Security";
import DeliveryProcess from "@/components/layout/Security/DeliveryProcess";
import ContactUs from "@/components/layout/Security/ContactUs";

export default function SecurityAndCash() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <Hero />
            <StatsBar />
            <ServiceOverview />
            <Security />
            <DeliveryProcess />
            <ContactUs />
        </main>
    );
}