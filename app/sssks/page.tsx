import Hero from "@/components/layout/sssks/Hero";
import StatsBar from "@/components/layout/sssks/StatsBar";
import ServiceOverview from "@/components/layout/sssks/ServiceOverview";
import WhyChooseUs from "@/components/layout/sssks/WhyChooseUs";
import DeliveryProcess from "@/components/layout/sssks/DeliveryProcess";
import ContactUs from "@/components/layout/sssks/ContactUs";
export default function SssksPage() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <Hero />
            <StatsBar />
            <ServiceOverview />
            <WhyChooseUs />
            <DeliveryProcess />
            <ContactUs />
        </main>
    );
}



