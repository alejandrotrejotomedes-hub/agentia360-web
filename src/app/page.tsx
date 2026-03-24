import Navbar         from "@/components/Navbar";
import Hero           from "@/components/Hero";
import Stats          from "@/components/Stats";
import TechStack      from "@/components/TechStack";
import BentoShowcase  from "@/components/BentoShowcase";
import Portfolio      from "@/components/Portfolio";
import Features       from "@/components/Features";
import TrustBanner    from "@/components/TrustBanner";
import DataFlow       from "@/components/DataFlow";
import { N8nWorkflowBlock } from "@/components/ui/n8n-workflow-block-shadcnui";
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
      <Portfolio />
      <Features />
      <TrustBanner />
      <DataFlow />
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <N8nWorkflowBlock />
      </section>
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
