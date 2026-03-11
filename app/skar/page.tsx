import Hero from "@/components/layout/skar/Hero";
import StatsBar from "@/components/layout/skar/StatsBar";
import ServiceOverview from "@/components/layout/skar/ServiceOverview";
import WhyChooseUs from "@/components/layout/skar/WhyChooseUs";
import DeliveryProcess from "@/components/layout/skar/DeliveryProcess";
import ContactUs from "@/components/layout/skar/ContactUs";
export default function SkarPage() {
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



