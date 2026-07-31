"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#081C3A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="RUMUNA"
            className="w-12 h-12"
          />

          <div>
            <h1 className="font-bold text-xl text-[#D4AF37]">
              RUMUNA
            </h1>

            <p className="text-xs text-gray-300">
              Rajshahi University MUN Association
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-white">

          <Link href="/" className="hover:text-[#D4AF37] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#D4AF37] transition">
            About
          </Link>

          {/* Conferences */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#D4AF37]">
              Conferences <FiChevronDown />
            </button>

            <div className="absolute hidden group-hover:block bg-white text-black rounded-xl shadow-xl w-64 mt-3 overflow-hidden">
              <Link href="#" className="block px-5 py-3 hover:bg-gray-100">
                North Bengal MUN (NBMUN)
              </Link>

              <Link href="#" className="block px-5 py-3 hover:bg-gray-100">
                Rajshahi University MUN (RUMUN)
              </Link>

              <Link href="#" className="block px-5 py-3 hover:bg-gray-100">
                Previous Conferences
              </Link>
            </div>
          </div>

          <Link href="/events" className="hover:text-[#D4AF37]">
            Events
          </Link>

          <Link href="/gallery" className="hover:text-[#D4AF37]">
            Gallery
          </Link>

          {/* Resources */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#D4AF37]">
              Resources <FiChevronDown />
            </button>

            <div className="absolute hidden group-hover:block bg-white text-black rounded-xl shadow-xl w-64 mt-3 overflow-hidden">
              <Link href="#" className="block px-5 py-3 hover:bg-gray-100">
                Study Guides
              </Link>

              <Link href="#" className="block px-5 py-3 hover:bg-gray-100">
                Rules of Procedure
              </Link>

              <Link href="#" className="block px-5 py-3 hover:bg-gray-100">
                Delegate Resources
              </Link>
            </div>
          </div>

          {/* Governing Body */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#D4AF37]">
              Governing Body <FiChevronDown />
            </button>

            <div className="absolute hidden group-hover:block bg-white text-black rounded-xl shadow-xl w-64 mt-3 overflow-hidden">
              <Link href="#" className="block px-5 py-3 hover:bg-gray-100">
                Current Governing Body
              </Link>

              <Link href="#" className="block px-5 py-3 hover:bg-gray-100">
                Former Presidents
              </Link>

              <Link href="#" className="block px-5 py-3 hover:bg-gray-100">
                Faculty Advisors
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-[#D4AF37]">
            Contact
          </Link>

          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Register
          </button>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#081C3A] px-8 pb-8 text-white space-y-5">

          <Link href="/">Home</Link><br />
          <Link href="/about">About</Link><br />
          <Link href="/events">Events</Link><br />
          <Link href="/gallery">Gallery</Link><br />
          <Link href="/contact">Contact</Link><br />

          <button className="mt-4 bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold">
            Register
          </button>

        </div>
      )}
    </header>
  );
}