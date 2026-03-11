import SssksNavbar from "@/components/layout/sssks/SssksNavbar";
import Footer from "@/components/layout/LandingPage/Footer";

export default function SssksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SssksNavbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
