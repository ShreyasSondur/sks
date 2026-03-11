import Hero from "@/components/layout/Facilities/Hero";
import StatsBar from "@/components/layout/Facilities/StatsBar";
import ServiceOverview from "@/components/layout/Facilities/ServiceOverview";
import Security from "@/components/layout/Facilities/Security";
import DeliveryProcess from "@/components/layout/Facilities/DeliveryProcess";
import ContactUs from "@/components/layout/Facilities/ContactUs";

export default function Facilities() {
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