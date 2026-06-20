import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Transformations from "@/sections/Transformations";
import Testimonials from "@/sections/Testimonials";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Transformations />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
