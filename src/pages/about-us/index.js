import CoreDifferentiators from "@/components/About-Us/Differentiat";
import AboutHero from "@/components/About-Us/Hero";
import Hero from "@/components/About-Us/Hero";
import TheProblem from "@/components/About-Us/TheProblem";
import VendorSection from "@/components/About-Us/VendorSection";


export default function Home() {
    return (
        <>
            {/* <Hero /> */}
            <AboutHero/>
            <TheProblem />
            <CoreDifferentiators/>
            <VendorSection/>
        </>
    );
}
