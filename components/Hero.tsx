"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

const rumunaStats = [
  {
    number: "12",
    label: "Years of Legacy",
  },
  {
    number: "20+",
    label: "Conferences Organized",
  },
  {
    number: "2000+",
    label: "Delegates Empowered",
  },
  {
    number: "15+",
    label: "Partner Organizations",
  },
];

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
  const shouldReduceMotion = useReducedMotion() ?? false;

  const animation = (delay: number, y = 28) => ({
    initial: shouldReduceMotion
      ? false
      : {
          opacity: 0,
          y,
        },
    animate: shouldReduceMotion
      ? undefined
      : {
          opacity: 1,
          y: 0,
        },
    transition: {
      duration: 0.85,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative flex min-h-[100svh]
        scroll-mt-20 items-center
        overflow-hidden bg-[#060e1a]
        pt-[76px] md:pt-[88px]
      "
    >
      {/* Background image with high quality scaling and subtle tone */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-[1.03] filter brightness-[0.8] contrast-[1.05]"
      />

      {/* Institutional Dark Gradient Overlays for High Contrast */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#040914]/98
          via-[#060e1a]/92
          to-[#0b192e]/75
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#040914]
          via-[#060e1a]/50
          to-[#060e1a]/70
        "
      />

      {/* Multi-layered Luminous Ambient Light Blooms */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_75%_35%,rgba(59,130,246,0.22),transparent_48%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_25%_25%,rgba(212,175,55,0.09),transparent_38%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-20 bottom-24
          h-96 w-96 rounded-full bg-[#1d4ed8]/15 blur-3xl
        "
      />

      {/* Gold atmospheric aurora orb */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-[18%] bottom-[22%]
          h-[340px] w-[340px] rounded-full
          bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(212,175,55,0.04)_50%,transparent_70%)]
          blur-3xl animate-aurora-float
        "
      />

      {/* Top subtle reflection line */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 h-[35%]
          bg-gradient-to-b from-white/[0.05] to-transparent
        "
      />

      {/* Architectural Geometric Diplomatic Rings */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-44 top-12
          h-[560px] w-[560px]
          rounded-full
          border border-white/[0.08]
          shadow-[inset_0_0_80px_rgba(59,130,246,0.14)]
          animate-ring-pulse
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-20 top-36
          h-[380px] w-[380px]
          rounded-full
          border border-[#3b82f6]/25
          shadow-[0_0_40px_rgba(59,130,246,0.08)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-4 top-52
          h-[220px] w-[220px]
          rounded-full
          border border-[#d4af37]/20
          shadow-[0_0_25px_rgba(212,175,55,0.1)]
        "
      />

      {/* Hero content container */}
      <div
        className="
          section-container relative z-10
          w-full pb-24 pt-14
          sm:pb-28 sm:pt-20
          md:pb-[170px]
          lg:pt-24
        "
      >
        <div className="max-w-5xl">
          {/* Badge Tagline with Pulsing Luminous Indicator */}
          <motion.div
            {...animation(0)}
            className="
              mb-6 inline-flex
              items-center gap-3
              rounded-full
              border border-blue-400/30
              bg-blue-950/40
              px-4 py-2
              backdrop-blur-2xl
              shadow-[0_4px_24px_rgba(29,78,216,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]
            "
          >
            <span
              aria-hidden="true"
              className="
                relative flex h-2.5 w-2.5 items-center justify-center
              "
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60a5fa] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#60a5fa]" />
            </span>

            <p
              className="
                text-[11px] font-bold uppercase
                tracking-[0.22em]
                text-[#93c5fd]
                sm:text-xs
              "
            >
              Leadership · Diplomacy · Global Dialogue
            </p>
          </motion.div>

          {/* Main Serif Display Heading */}
          <motion.h1
            id="hero-heading"
            {...animation(0.15, 36)}
            className="
              max-w-4xl font-serif
              text-4xl font-bold
              leading-[1.08] text-white
              sm:text-5xl
              md:text-6xl
              lg:text-[76px]
              tracking-[-0.01em]
            "
          >
            Empowering the
            <span
              className="
                mt-2 block
                bg-gradient-to-r
                from-[#93c5fd]
                via-[#3b82f6]
                to-[#f3e5ab]
                bg-clip-text text-transparent
                drop-shadow-[0_4px_24px_rgba(59,130,246,0.3)]
              "
            >
              Diplomats of Tomorrow
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...animation(0.3)}
            className="
              mt-7 max-w-2xl
              text-[15px] leading-8
              text-slate-300
              sm:text-lg sm:leading-8
            "
          >
            Rajshahi University Model United Nations Association provides a
            distinguished platform for young leaders to develop diplomacy,
            negotiation, public speaking and critical-thinking skills.
          </motion.p>

          {/* RUMUNA achievements Grid with Luxury Micro-Surfaces */}
          <motion.div
            {...animation(0.45)}
            className="
              mt-10 grid w-full
              max-w-[980px] grid-cols-2
              gap-3.5 sm:gap-5
              lg:grid-cols-4
            "
          >
            {rumunaStats.map((stat) => (
              <div
                key={stat.label}
                className="
                  group relative min-h-[118px]
                  overflow-hidden rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  px-5 py-5
                  backdrop-blur-2xl
                  shadow-[0_12px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-blue-400/55
                  hover:bg-white/[0.09]
                  hover:shadow-[0_24px_55px_rgba(29,78,216,0.3),0_0_20px_rgba(59,130,246,0.15)]
                "
              >
                {/* Micro reflection top edge — animates gold on hover */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-x-0 top-0 h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-[#60a5fa]/70
                    to-transparent
                    transition-all duration-500
                    group-hover:via-[#d4af37]/80
                  "
                />

                {/* Gold shimmer sweep on hover */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0
                    -translate-x-full skew-x-[-20deg]
                    bg-gradient-to-r from-transparent via-white/[0.05] to-transparent
                    transition-transform duration-700
                    group-hover:translate-x-[200%]
                  "
                />

                <p
                  className="
                    font-serif text-[32px]
                    font-bold leading-none
                    text-[#93c5fd]
                    group-hover:text-white
                    transition-colors duration-300
                    sm:text-[36px]
                  "
                >
                  {stat.number}
                </p>

                <p
                  className="
                    mt-2.5 max-w-[160px]
                    text-[10px] font-bold
                    uppercase leading-[1.4]
                    tracking-[0.14em]
                    text-white/80
                    sm:text-[11px]
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
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
                inline-flex min-h-[56px]
                items-center justify-center
                gap-3 rounded-xl px-8 py-3.5
                text-xs font-bold uppercase
                tracking-[0.12em]
                sm:text-[13px]
              "
            >
              <span>Register Now</span>

              <FiArrowRight
                aria-hidden="true"
                className="
                  text-base
                  transition-transform duration-300
                  group-hover:translate-x-1.5
                "
              />
            </Link>

            <Link
              href="#about"
              className="
                group inline-flex min-h-[56px]
                items-center justify-center
                gap-3 rounded-xl border border-white/20
                bg-white/[0.06]
                px-8 py-3.5
                text-xs font-bold uppercase
                tracking-[0.12em]
                !text-white
                backdrop-blur-2xl
                shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]
                transition-all duration-300
                hover:border-[#d4af37]
                hover:bg-[#d4af37]
                hover:!text-[#060e1a]
                hover:shadow-[0_12px_32px_rgba(212,175,55,0.35)]
                hover:-translate-y-0.5
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#3b82f6]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#060e1a]
                sm:text-[13px]
              "
            >
              <span>Discover RUMUNA</span>

              <FiArrowRight
                aria-hidden="true"
                className="
                  text-base
                  transition-transform duration-300
                  group-hover:translate-x-1.5
                "
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
              }
        }
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
              }
        }
        transition={{
          duration: 0.8,
          delay: shouldReduceMotion ? 0 : 1,
        }}
        className="
          absolute bottom-10 right-6 z-20
          hidden lg:block xl:right-12
        "
      >
        <Link
          href="#about"
          aria-label="Scroll to the About RUMUNA section"
          className="
            group flex flex-col
            items-center gap-3
            text-white/40
            transition-colors duration-300
            hover:text-[#93c5fd]
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

      {/* Desktop bottom highlights bar */}
      <div
        className="
          absolute bottom-0 left-0 z-10
          hidden w-full
          border-t border-white/10
          bg-[#060e1a]/90
          backdrop-blur-2xl
          md:block
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
                  text-[10px] font-bold uppercase
                  tracking-[0.22em]
                  text-[#93c5fd]
                "
              >
                {item.label}
              </p>

              <p className="mt-1 text-sm text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
