"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowRight,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const heroHighlights = [
  {
    label: "Our Mission",
    description: "Building informed global citizens",
  },
  {
    label: "Our Community",
    description: "Delegates, leaders and changemakers",
  },
  {
    label: "Our Legacy",
    description: "Excellence in diplomacy and dialogue",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const animation = (delay: number, y = 24) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    animate: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay: shouldReduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative flex min-h-screen
        scroll-mt-20 items-center
        overflow-hidden bg-[#071A33]
        pt-[82px] md:pb-[92px]
      "
    >
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Background overlays */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#031022]/[0.98]
          via-[#071A33]/85
          to-[#071A33]/45
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#031022]/90
          via-transparent
          to-[#031022]/35
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_70%_35%,rgba(200,164,67,0.12),transparent_36%)]
        "
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="
          absolute -right-40 top-20
          h-[500px] w-[500px]
          rounded-full border border-[#C8A443]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -right-20 top-40
          h-[320px] w-[320px]
          rounded-full border border-[#C8A443]/20
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute right-[8%] top-[28%]
          h-24 w-24 rotate-45
          border border-[#C8A443]/15
        "
      />

      {/* Hero content */}
      <div
        className="
          section-container relative z-10
          w-full py-20 sm:py-24
          lg:py-28
        "
      >
        <div className="max-w-4xl">
          <motion.div
            {...animation(0)}
            className="
              mb-7 inline-flex
              items-center gap-3
              border-l-2 border-[#C8A443]
              bg-white/[0.06] px-4 py-2.5
              backdrop-blur-md
            "
          >
            <span
              aria-hidden="true"
              className="
                h-2 w-2 shrink-0
                rotate-45 bg-[#E2C66E]
              "
            />

            <p
              className="
                text-[10px] font-bold
                uppercase tracking-[0.18em]
                text-[#E2C66E]
                sm:text-xs sm:tracking-[0.22em]
              "
            >
              Leadership · Diplomacy · Global Dialogue
            </p>
          </motion.div>

          <motion.h1
            id="hero-heading"
            {...animation(0.15, 32)}
            className="
              max-w-4xl font-serif
              text-4xl font-bold
              leading-[1.08] text-white
              sm:text-5xl md:text-6xl
              lg:text-[72px]
            "
          >
            Empowering the
            <span
              className="
                mt-1 block
                bg-gradient-to-r
                from-[#E2C66E]
                via-[#C8A443]
                to-[#F2D982]
                bg-clip-text text-transparent
              "
            >
              Diplomats of Tomorrow
            </span>
          </motion.h1>

          <motion.p
            {...animation(0.3)}
            className="
              mt-7 max-w-2xl
              text-[15px] leading-7
              text-white/70
              sm:text-lg sm:leading-8
            "
          >
            Rajshahi University Model United Nations Association provides a
            distinguished platform for young leaders to develop diplomacy,
            negotiation, public speaking and critical-thinking skills.
          </motion.p>

          {/* Conference details */}
          <motion.div
            {...animation(0.45)}
            className="
              mt-8 flex flex-col
              gap-4 text-sm text-white/75
              sm:flex-row sm:flex-wrap
              sm:gap-x-8
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  border border-[#C8A443]/30
                  bg-[#C8A443]/10
                  text-[#E2C66E]
                "
              >
                <FiCalendar aria-hidden="true" />
              </span>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                  Conference
                </p>

                <p className="mt-0.5 font-semibold">
                  NBMUN Season V · 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  border border-[#C8A443]/30
                  bg-[#C8A443]/10
                  text-[#E2C66E]
                "
              >
                <FiMapPin aria-hidden="true" />
              </span>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                  Location
                </p>

                <p className="mt-0.5 font-semibold">
                  University of Rajshahi, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            {...animation(0.6)}
            className="
              mt-10 flex flex-col
              gap-4 sm:flex-row
            "
          >
            <Link
              href="#register"
              className="
                formal-button group
                inline-flex min-h-12
                items-center justify-center
                gap-3 px-7 py-3.5
                text-xs font-bold uppercase
                tracking-[0.12em]
                sm:text-[13px]
              "
            >
              Register Now

              <FiArrowRight
                aria-hidden="true"
                className="
                  text-base transition-transform
                  duration-300
                  group-hover:translate-x-1.5
                "
              />
            </Link>

            <Link
              href="#about"
              className="
                inline-flex min-h-12
                items-center justify-center
                border border-white/30
                bg-white/[0.05] px-7 py-3.5
                text-xs font-bold uppercase
                tracking-[0.12em] text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:border-[#C8A443]
                hover:bg-[#C8A443]/10
                hover:text-[#E2C66E]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#E2C66E]
                sm:text-[13px]
              "
            >
              Discover RUMUNA
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: shouldReduceMotion ? 0 : 1,
        }}
        className="
          absolute bottom-8 right-5 z-20
          hidden lg:block xl:right-10
        "
      >
        <Link
          href="#about"
          aria-label="Scroll to the About RUMUNA section"
          className="
            group flex flex-col
            items-center gap-3
            text-white/50 transition-colors
            hover:text-[#E2C66E]
          "
        >
          <span
            className="
              text-[9px] font-bold uppercase
              tracking-[0.25em]
              [writing-mode:vertical-rl]
            "
          >
            Explore
          </span>

          <FiArrowDown
            aria-hidden="true"
            className="
              transition-transform duration-300
              group-hover:translate-y-1
            "
          />
        </Link>
      </motion.div>

      {/* Desktop highlights */}
      <div
        className="
          absolute bottom-0 left-0
          z-10 hidden w-full
          border-t border-white/10
          bg-[#031022]/80
          backdrop-blur-xl md:block
        "
      >
        <div
          className="
            section-container grid
            grid-cols-3 divide-x
            divide-white/10
          "
        >
          {heroHighlights.map((item, index) => (
            <div
              key={item.label}
              className={`
                py-5
                ${index === 0 ? "pr-8" : ""}
                ${index === 1 ? "px-8" : ""}
                ${index === 2 ? "pl-8 pr-16 lg:pr-8" : ""}
              `}
            >
              <p
                className="
                  text-[10px] font-bold
                  uppercase tracking-[0.2em]
                  text-[#E2C66E]
                "
              >
                {item.label}
              </p>

              <p className="mt-1.5 text-sm text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}