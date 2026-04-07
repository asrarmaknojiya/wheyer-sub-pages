import CoreDifferentiators from "@/components/About-Us/Differentiat";
import AboutHero from "@/components/About-Us/Hero";
import Hero from "@/components/About-Us/Hero";
import TheProblem from "@/components/About-Us/TheProblem";
import VendorSection from "@/components/About-Us/VendorSection";
import WhatIsWheyer from "@/components/About-Us/WhatIsWheyer";
import Hero from "@/components/About-Us/Hero";
import TheProblem from "@/components/About-Us/TheProblem";
import OurSolution from "@/components/About-Us/OurSolution";
import OurVision from "@/components/About-Us/OurVision";


export default function Home() {
    return (
        <>
            <AboutHero/>
            <TheProblem />
            <CoreDifferentiators/>
            <VendorSection/>
            <WhatIsWheyer/>
            <OurSolution/>
            <OurVision/>
        </>
    );
}
