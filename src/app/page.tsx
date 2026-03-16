import Navbar         from "@/components/Navbar";
import Hero           from "@/components/Hero";
import Stats          from "@/components/Stats";
import TechStack      from "@/components/TechStack";
import BentoShowcase  from "@/components/BentoShowcase";
import Features       from "@/components/Features";
import TrustBanner    from "@/components/TrustBanner";
import DataFlow       from "@/components/DataFlow";
import Pillars        from "@/components/Pillars";
import Team           from "@/components/Team";
import Process        from "@/components/Process";
import WhyAgentia     from "@/components/WhyAgentia";
import LeadMagnet     from "@/components/LeadMagnet";
import Pricing        from "@/components/Pricing";
import FAQ            from "@/components/FAQ";
import Footer         from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <TechStack />
      <BentoShowcase />
      <Features />
      <TrustBanner />
      <DataFlow />
      <Pillars />
      <Team />
      <Process />
      <WhyAgentia />
      <LeadMagnet />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
