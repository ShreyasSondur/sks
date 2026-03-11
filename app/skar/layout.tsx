import SkarNavbar from "@/components/layout/skar/SkarNavbar";
import Footer from "@/components/layout/LandingPage/Footer";

export default function SkarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SkarNavbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
