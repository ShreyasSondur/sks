import Hero from "@/components/layout/LandingPage/Hero";
import StatsBar from "@/components/layout/LandingPage/StatsBar";
import CompanySnapshot from "@/components/layout/LandingPage/CompanySnapshot";
import CoreServices from "@/components/layout/LandingPage/CoreServices";
import QualitySafety from "@/components/layout/LandingPage/QualitySafety";
import CoreValues from "@/components/layout/LandingPage/CoreValues";
import ProjectGovernance from "@/components/layout/LandingPage/ProjectGovernance";
import Sustainability from "@/components/layout/LandingPage/Sustainability";
import WhyChooseUs from "@/components/layout/LandingPage/WhyChooseUs";
import ProjectsDelivered from "@/components/layout/LandingPage/ProjectsDelivered";
import OurClients from "@/components/layout/LandingPage/OurClients";
import ContactUs from "@/components/layout/LandingPage/ContactUs";

export default function Home() {
  return (
    <div className="relative bg-brand-navy">
      <div className="relative">
        <Hero />
        <StatsBar />
      </div>
      <CompanySnapshot />
      <CoreServices />
      <QualitySafety />
      <CoreValues />
      <ProjectGovernance />
      <Sustainability />
      <WhyChooseUs />
      <ProjectsDelivered />
      <OurClients />
      <ContactUs />
    </div>
  );
}
