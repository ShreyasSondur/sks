import Navbar from "@/components/layout/LandingPage/Navbar";
import Footer from "@/components/layout/LandingPage/Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-[60px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
