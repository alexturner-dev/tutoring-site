import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Features />

      <Process />

      <Contact />
      
    </main>
  );
}