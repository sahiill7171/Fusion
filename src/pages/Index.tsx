import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Introduction from "@/components/Introduction";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import FAQ from "@/components/FAQ";
import CTAMarquee from "@/components/CTAMarquee";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <CursorFollower />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Introduction />
      <Features />
      <Integrations />
      <FAQ />
      <CTAMarquee />
      <Footer />
    </main>
  );
};

export default Index;
