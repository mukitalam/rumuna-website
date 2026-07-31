"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#081C3A] pt-[82px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#041126]/95 via-[#071a36]/80 to-[#071a36]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#041126]/85 via-transparent to-[#041126]/20" />

      <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D4AF37]/10" />
      <div className="absolute -right-20 top-32 h-[300px] w-[300px] rounded-full border border-[#D4AF37]/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 border-l-2 border-[#D4AF37] bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6C75A] sm:text-sm">
              Leadership · Diplomacy · Global Dialogue
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-4xl font-serif text-4xl font-bold leading-[1.12] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Empowering the
            <span className="block text-[#D4AF37]">
              Diplomats of Tomorrow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
          >
            Rajshahi University Model United Nations Association provides a
            platform for young leaders to develop diplomacy, negotiation,
            public speaking and critical-thinking skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <FiCalendar className="text-lg text-[#D4AF37]" />
              <span>NBMUN Season V · 2026</span>
            </div>

            <div className="flex items-center gap-2">
              <FiMapPin className="text-lg text-[#D4AF37]" />
              <span>University of Rajshahi, Bangladesh</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#register"
              className="group inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-[#081C3A] shadow-lg transition hover:bg-[#E4C65D]"
            >
              Register Now
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center justify-center border border-white/40 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#E4C65D]"
            >
              Discover RUMUNA
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-10 hidden w-full border-t border-white/10 bg-[#041126]/80 backdrop-blur-md md:block">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-8">
          <div className="py-5 pr-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Mission
            </p>
            <p className="mt-1 text-sm text-white/70">
              Building informed global citizens
            </p>
          </div>

          <div className="px-8 py-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Community
            </p>
            <p className="mt-1 text-sm text-white/70">
              Delegates, leaders and changemakers
            </p>
          </div>

          <div className="py-5 pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Legacy
            </p>
            <p className="mt-1 text-sm text-white/70">
              Excellence in diplomacy and dialogue
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}