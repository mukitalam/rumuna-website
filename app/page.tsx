import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Conference from "@/components/Conference";
import Events from "@/components/Events";
import Executive from "@/components/Executive";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pt-[92px]">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Conference />
      <Events />
      <Executive />
      <Gallery />
      <Footer />
    </main>
  );
}