import Hero from "@/components/layout/Logistics/Hero";
import StatsBar from "@/components/layout/Logistics/StatsBar";
import ServiceOverview from "@/components/layout/Logistics/ServiceOverview";
import Security from "@/components/layout/Logistics/Security";
import DeliveryProcess from "@/components/layout/Logistics/DeliveryProcess";
import ContactUs from "@/components/layout/Logistics/ContactUs";

export default function LogisticsPage() {
    return (
        <main className="bg-brand-navy">
            <Hero />
            <StatsBar />
            <div id="services">
                <ServiceOverview />
            </div>
            <Security />
            <DeliveryProcess />
            <ContactUs />
        </main>
    );
}