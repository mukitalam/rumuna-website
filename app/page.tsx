import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Conference from "@/components/Conference";
import Executive from "@/components/Executive";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#081C3A] text-white">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Conference />
      <Executive />
      <Events />
      <Gallery />
    </main>
  );
}
