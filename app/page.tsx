import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#081C3A] text-white">
      <Navbar />
      <Hero />
      <About />
      <Stats />
    </main>
  );
}
