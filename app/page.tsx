import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Impact from "@/components/Impact";
import MarketingSection from "@/components/MarketingSection";
import Navigation from "@/components/nav";
import PhotoGrid from "@/components/PhotoGrid";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";



export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <About />
      <Impact />
      <Testimonials />
      <Carousel />
      <PhotoGrid />
      <Team />
      <MarketingSection />
      <Footer />
    </main>
  );
}
