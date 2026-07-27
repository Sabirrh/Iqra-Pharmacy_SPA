import About from "../pages/About";
import WhyChooseUs from "../pages/Choose";
import HeroSection from "../pages/Hero";
import Services from "../pages/Service";

export default function Home() {
    return (
        <div>
                <HeroSection />
                <div id="about">
                    <About />
                </div>
                <div id="services">
                    <Services />
                </div>
                <div id="choose">
                    <WhyChooseUs />
                </div>
        </div>
    )
}