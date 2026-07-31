"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081C3A]/70 via-[#081C3A]/80 to-[#020817]/95"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.img
          src="/images/logo.png"
          alt="RUMUNA Logo"
          className="w-32 h-32 mx-auto mb-8"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        <motion.p
          className="text-[#D4AF37] uppercase tracking-[8px] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Rajshahi University • Since 2013
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Empowering
          <br />
          Future Leaders
        </motion.h1>

        <motion.p
          className="mt-8 text-xl text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Through Diplomacy, Dialogue, Leadership,
          Negotiation and International Cooperation.
        </motion.p>

        <motion.div
          className="mt-12 flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300">
            Become a Member
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300">
            Upcoming Events
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center"
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        <span className="text-sm tracking-widest mb-2">SCROLL</span>
        <FaArrowDown size={18} />
      </motion.div>
    </section>
  );
}