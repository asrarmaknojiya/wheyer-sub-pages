import CoreDifferentiators from "@/components/About-Us/Differentiat";
import AboutHero from "@/components/About-Us/Hero";
import VendorSection from "@/components/About-Us/VendorSection";
import ForTravelers from "@/components/About-Us/ForTravelers";
import WhatIsWheyer from "@/components/About-Us/WhatIsWheyer";
import TheProblem from "@/components/About-Us/TheProblem";
import OurSolution from "@/components/About-Us/OurSolution";
import OurVision from "@/components/About-Us/OurVision";


export default function Home() {
    return (
        <>
            <AboutHero/>
            <WhatIsWheyer/>
            <TheProblem />
            <OurSolution/>
            <CoreDifferentiators/>
            <ForTravelers />
            <OurVision/>
            <VendorSection/>
            



        </>
    );
}