
import Benefits from "@/components/landing-page/benefits";
import CallToAction from "@/components/landing-page/call-to-action";
import CreativeSteps from "@/components/landing-page/creative-steps";
import FAQ from "@/components/landing-page/faq";
import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/hero";
import IndustryShowcase from "@/components/landing-page/industry-showcase";

import { SparklesCore } from "@/components/landing-page/sparkles";
import { neoPrepLandingData } from "@/lib/landing-page-data";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#6366f1"
        />
      </div>

      <div className="relative z-10">
      

        
        <Header/>
        <Hero data={neoPrepLandingData.hero} />
        <CreativeSteps />
        <Benefits/>
        <IndustryShowcase data={neoPrepLandingData.industryShowcase} />
        <FAQ data={neoPrepLandingData.faq} />
        <CallToAction data={neoPrepLandingData.callToAction} />
      </div>
    </main>
  );
}
