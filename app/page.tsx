import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Conference from "@/components/Conference";
import Events from "@/components/Events";
import LatestNews from "@/components/LatestNews";
import Resources from "@/components/Resources";
import Executive from "@/components/Executive";
import OrganizationSections from "@/components/OrganizationSections";
import Alumni from "@/components/Alumni";
import Gallery from "@/components/Gallery";
import Register from "@/components/Register";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="
          fixed left-4 top-4 z-[100]
          -translate-y-24
          rounded-lg bg-[#1d4ed8] px-5 py-3
          text-xs font-bold uppercase tracking-widest text-white
          shadow-2xl transition-transform duration-300
          focus:translate-y-0
          focus:outline-none
          focus:ring-2
          focus:ring-white
          focus:ring-offset-2
          focus:ring-offset-[#071426]
        "
      >
        Skip to main content
      </a>

      {/* Website navigation */}
      <Navbar />

      {/* Main website content */}
      <main
        id="main-content"
        tabIndex={-1}
        className="
          relative isolate
          min-h-screen overflow-x-hidden
          bg-background text-foreground
        "
      >
        <Hero />

        <About />

        <Stats />

        <Conference />

        <Events />

        <LatestNews />

        <Resources />

        <Executive />

        <OrganizationSections />

        <Alumni />

        <Gallery />

        <Register />

        <Contact />
      </main>

      {/* Website footer */}
      <Footer />
    </>
  );
}
