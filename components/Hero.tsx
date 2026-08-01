"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowRight,
} from "react-icons/fi";

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
  const shouldReduceMotion = useReducedMotion();

  const animation = (delay: number, y = 24) => ({
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
        relative flex min-h-[100svh]
        scroll-mt-20 items-center
        overflow-hidden bg-[#071A33]
        pt-[76px] md:pt-[88px]
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

      {/* Dark background overlay */}
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

      {/* Bottom overlay */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#031022]/95
          via-transparent
          to-[#031022]/35
        "
      />

      {/* Golden light */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_72%_35%,rgba(200,164,67,0.14),transparent_36%)]
        "
      />

      {/* Subtle glossy overlay */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 h-[45%]
          bg-gradient-to-b
          from-white/[0.035] to-transparent
        "
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="
          absolute -right-40 top-20
          h-[500px] w-[500px]
          rounded-full
          border border-[#C8A443]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -right-20 top-40
          h-[320px] w-[320px]
          rounded-full
          border border-[#C8A443]/20
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
          w-full pb-20 pt-16
          sm:pb-24 sm:pt-20
          md:pb-[150px]
          lg:pt-24
        "
      >
        <div className="max-w-5xl">
          {/* Small heading */}
          <motion.div
            {...animation(0)}
            className="
              mb-7 inline-flex
              items-center gap-3
              border-l-2 border-[#C8A443]
              bg-white/[0.06]
              px-4 py-2.5
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
                text-[10px] font-bold uppercase
                tracking-[0.18em]
                text-[#E2C66E]
                sm:text-xs sm:tracking-[0.22em]
              "
            >
              Leadership · Diplomacy · Global Dialogue
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            id="hero-heading"
            {...animation(0.15, 32)}
            className="
              max-w-4xl font-serif
              text-4xl font-bold
              leading-[1.08] text-white
              sm:text-5xl
              md:text-6xl
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

          {/* Description */}
          <motion.p
            {...animation(0.3)}
            className="
              mt-7 max-w-2xl
              text-[15px] leading-7
              text-white/70
              sm:text-lg sm:leading-8
            "
          >
            Rajshahi University Model United Nations Association
            provides a distinguished platform for young leaders to
            develop diplomacy, negotiation, public speaking and
            critical-thinking skills.
          </motion.p>

          {/* RUMUNA achievements */}
          <motion.div
            {...animation(0.45)}
            className="
              mt-9 grid w-full
              max-w-[960px] grid-cols-2
              gap-3 sm:gap-4
              lg:grid-cols-4
            "
          >
            {rumunaStats.map((stat) => (
              <div
                key={stat.label}
                className="
                  group relative min-h-[112px]
                  overflow-hidden
                  border border-[#C8A443]/30
                  bg-white/[0.055]
                  px-4 py-5
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#C8A443]/70
                  hover:bg-white/[0.09]
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                "
              >
                {/* Top golden reflection */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-x-0 top-0 h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#E2C66E]/80
                    to-transparent
                  "
                />

                {/* Corner decoration */}
                <span
                  aria-hidden="true"
                  className="
                    absolute -right-5 -top-5
                    h-14 w-14 rotate-45
                    border border-[#C8A443]/15
                  "
                />

                <p
                  className="
                    font-serif text-[28px]
                    font-bold leading-none
                    text-[#E2C66E]
                    sm:text-[32px]
                  "
                >
                  {stat.number}
                </p>

                <p
                  className="
                    mt-2.5 max-w-[160px]
                    text-[9px] font-semibold
                    uppercase leading-[1.5]
                    tracking-[0.11em]
                    text-white/75
                    sm:text-[10px]
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
              mt-9 flex flex-col
              gap-4 sm:flex-row
            "
          >
            <Link
              href="#register"
              className="
                formal-button group
                inline-flex min-h-[54px]
                items-center justify-center
                gap-3 px-8 py-3.5
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
                group inline-flex min-h-[54px]
                items-center justify-center
                gap-3 border border-white/40
                bg-white/[0.08]
                px-8 py-3.5
                text-xs font-bold uppercase
                tracking-[0.12em]
                !text-white
                backdrop-blur-md
                transition-all duration-300
                hover:border-[#C8A443]
                hover:bg-[#C8A443]
                hover:!text-[#071A33]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E2C66E]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#071A33]
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
            text-white/50
            transition-colors duration-300
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

      {/* Desktop bottom highlights */}
      <div
        className="
          absolute bottom-0 left-0 z-10
          hidden w-full
          border-t border-white/10
          bg-[#031022]/80
          backdrop-blur-xl
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
                  tracking-[0.2em]
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