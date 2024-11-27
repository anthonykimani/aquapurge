import About from "@/components/About";
import Carousel from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import Impact from "@/components/Impact";
import Navigation from "@/components/nav";
import PhotoGrid from "@/components/PhotoGrid";
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
    </main>
  );
}
