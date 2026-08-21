import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Conference from "@/components/Conference";
import Events from "@/components/Events";
import Resources from "@/components/Resources";
import OrganizationSections from "@/components/OrganizationSections";
import Gallery from "@/components/Gallery";
import Register from "@/components/Register";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Keyboard ব্যবহারকারীদের জন্য accessibility link */}
      <a
        href="#main-content"
        className="
          fixed left-4 top-4 z-[100]
          -translate-y-24
          bg-[#C8A443] px-5 py-3
          text-sm font-bold text-[#071A33]
          shadow-xl transition-transform
          focus:translate-y-0
          focus:outline-none
          focus:ring-2
          focus:ring-white
          focus:ring-offset-2
          focus:ring-offset-[#071A33]
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

        <Conference />

        <Events />

        <Resources />

        <OrganizationSections />

        <Gallery />

        <Register />

        <Contact />
      </main>

      {/* Website footer */}
      <Footer />
    </>
  );
}