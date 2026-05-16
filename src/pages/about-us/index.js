import Head from "next/head";
import HeroSection from "@/components/About-Us/HeroSection";
import ProblemSection from "@/components/About-Us/ProblemSection";
import OriginSection from "@/components/About-Us/OriginSection";
import ConvictionSection from "@/components/About-Us/Convictionsection";
import FourWaysSection from "@/components/About-Us/Fourwayssection";
import TeamSection from "@/components/About-Us/TeamSection";
import BelieveSection from "@/components/About-Us/BelieveSection";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us — Wheyer | India&apos;s First Vendor-First Travel Marketplace</title>
        <meta
          name="description"
          content="Discover the story behind Wheyer — India's first open travel marketplace built for independent operators and genuine travellers."
        />
      </Head>

      <main className="overflow-x-hidden">
        <HeroSection />
        <ProblemSection />
        <OriginSection />
        <ConvictionSection />
        <FourWaysSection />
        <TeamSection />
        <BelieveSection />
       

      </main>
    </>
  );
}