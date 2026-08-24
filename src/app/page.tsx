import { Hero } from "@/components/sections/Hero";
import { PreviewGenerator } from "@/components/sections/PreviewGenerator";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatsIncluded } from "@/components/sections/WhatsIncluded";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PreviewGenerator />
      <HowItWorks />
      <WhatsIncluded />
      <WhoItsFor />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </>
  );
}
