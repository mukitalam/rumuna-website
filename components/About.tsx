"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const highlights = [
  "Leadership and diplomatic skills",
  "Critical thinking and negotiation",
  "Public speaking and teamwork",
  "International affairs and global awareness",
];

export default function About() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        section-padding relative
        overflow-hidden bg-[#f8fafc]
      "
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-36 top-16
          h-[500px] w-[500px]
          rounded-full
          bg-[#3b82f6]/[0.06]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 bottom-0
          h-[450px] w-[450px]
          rounded-full
          bg-[#1d4ed8]/[0.05]
          blur-3xl
        "
      />

      <div
        className="
          section-container relative z-10
          grid items-center gap-12
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-16 xl:gap-20
        "
      >
        {/* Image area with architectural luxury framing */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative mx-auto w-full max-w-[680px]
            lg:mx-0
          "
        >
          {/* Outer Accent Frames */}
          <div
            aria-hidden="true"
            className="
              absolute -left-3 -top-3
              h-full w-full rounded-2xl
              border border-blue-500/30
              shadow-[0_0_30px_rgba(59,130,246,0.08)]
              sm:-left-4 sm:-top-4
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute -right-3 -bottom-3
              h-full w-full rounded-2xl
              border border-[#d4af37]/25
              shadow-[0_0_20px_rgba(212,175,55,0.08)]
              sm:-right-4 sm:-bottom-4
            "
          />

          {/* Main Image Container */}
          <div
            className="
              group relative
              h-[440px] w-full
              overflow-hidden rounded-2xl
              bg-[#0b192e]
              shadow-[0_25px_60px_rgba(6,14,26,0.14)]
              sm:h-[550px]
              lg:h-[660px]
            "
          >
            <Image
              src="/session.jpg"
              alt="RUMUNA delegates participating in a diplomatic session"
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 680px,
                56vw
              "
              className="
                object-cover object-center
                transition-transform duration-1000
                ease-out group-hover:scale-[1.045]
              "
            />

            {/* Dark gradient overlay */}
            <div
              aria-hidden="true"
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#060e1a]/95
                via-[#060e1a]/25
                to-transparent
              "
            />

            {/* Image caption label */}
            <div
              className="
                absolute bottom-6 left-6
                max-w-[55%]
                sm:bottom-8 sm:left-8
                sm:max-w-[360px]
              "
            >
              <p
                className="
                  text-[10px] font-bold
                  uppercase tracking-[0.22em]
                  text-[#f3e5ab]
                  sm:text-[11px]
                "
              >
                Leadership through dialogue
              </p>

              <p
                className="
                  mt-2 hidden font-serif
                  text-xl font-bold
                  leading-snug text-white
                  sm:block sm:text-2xl
                "
              >
                Preparing young leaders for a globally connected future
              </p>
            </div>

            {/* Floating glassmorphism card inside the image */}
            <div
              className="
                absolute bottom-6 right-5
                w-[170px] overflow-hidden rounded-2xl
                border-l-4 border-[#3b82f6]
                border border-white/15
                bg-[#060e1a]/92
                px-5 py-5 text-white
                shadow-[0_25px_55px_rgba(0,0,0,0.6),0_0_20px_rgba(59,130,246,0.15),inset_0_1px_0_rgba(255,255,255,0.18)]
                backdrop-blur-2xl
                sm:bottom-8 sm:right-7
                sm:w-[270px]
                sm:px-6 sm:py-6
              "
            >
              {/* Shimmer top edge */}
              <span
                aria-hidden="true"
                className="shimmer-line absolute top-0 left-0 right-0"
              />
              <p
                className="
                  font-serif text-2xl
                  font-bold tracking-[0.04em]
                  text-[#93c5fd]
                  sm:text-3xl
                "
              >
                RUMUNA
              </p>

              <p
                className="
                  mt-2 hidden text-xs
                  leading-5 text-slate-300
                  sm:block
                "
              >
                Inspiring young leaders through diplomacy, cooperation and
                meaningful global dialogue.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content area */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label badge */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-[2px] w-10
                bg-gradient-to-r
                from-transparent to-[#1d4ed8]
              "
            />

            <p
              className="
                text-xs font-bold
                uppercase tracking-[0.22em]
                text-[#1d4ed8]
                sm:text-sm
              "
            >
              About RUMUNA
            </p>
          </div>

          {/* Heading */}
          <h2
            id="about-heading"
            className="
              mt-5 max-w-2xl
              font-serif text-[34px]
              font-bold leading-[1.12]
              text-[#060e1a]
              sm:text-[42px]
              lg:text-[48px]
            "
          >
            Shaping Future Leaders Through{" "}
            <span className="diplomatic-title-gradient">
              Diplomacy and Dialogue
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="
              mt-6 h-px w-full
              bg-gradient-to-r
              from-[#3b82f6]/40
              via-[#3b82f6]/10
              to-transparent
            "
          />

          {/* Description */}
          <p
            className="
              mt-7 text-[15px]
              leading-8 text-slate-600
              sm:text-[16px]
            "
          >
            Rajshahi University Model United Nations Association is a
            student-led organization dedicated to developing diplomacy,
            leadership, negotiation and public-speaking skills among young
            people.
          </p>

          <p
            className="
              mt-4 text-[15px]
              leading-8 text-slate-600
              sm:text-[16px]
            "
          >
            Through conferences, workshops and interactive sessions, RUMUNA
            creates opportunities for students to understand international
            affairs and participate in meaningful global dialogue.
          </p>

          {/* Highlights List */}
          <ul
            aria-label="RUMUNA development areas"
            className="
              mt-8 grid gap-3.5
              sm:grid-cols-2 sm:gap-4
            "
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="
                  group relative flex items-start gap-3.5
                  overflow-hidden
                  rounded-2xl border border-slate-200/90
                  bg-white px-4.5 py-4
                  shadow-[0_8px_24px_rgba(6,14,26,0.04)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#3b82f6]/50
                  hover:shadow-[0_16px_36px_rgba(29,78,216,0.12)]
                "
              >
                {/* Left accent line reveal */}
                <span
                  aria-hidden="true"
                  className="
                    absolute left-0 inset-y-0
                    w-[3px] rounded-r-full
                    bg-gradient-to-b from-[#1d4ed8] to-[#d4af37]
                    scale-y-0 origin-top
                    transition-transform duration-400
                    group-hover:scale-y-100
                  "
                />
                <span
                  className="
                    mt-0.5 flex h-6 w-6
                    shrink-0 items-center
                    justify-center rounded-full
                    bg-[#1d4ed8]/10
                    text-[#1d4ed8]
                    transition-all duration-300
                    group-hover:bg-[#1d4ed8]
                    group-hover:text-white
                    group-hover:shadow-[0_0_12px_rgba(29,78,216,0.4)]
                  "
                >
                  <FiCheck
                    aria-hidden="true"
                    className="text-xs font-bold"
                  />
                </span>

                <span
                  className="
                    text-[13px] font-semibold
                    leading-6 text-slate-800
                  "
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <Link
            href="#conference"
            className="
              formal-button group mt-9
              inline-flex min-h-12
              items-center justify-center
              gap-3 rounded-xl px-8 py-3.5
              text-[12px] font-bold
              uppercase tracking-[0.11em]
              sm:text-[13px]
            "
          >
            <span>Explore Our Conferences</span>

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
    </section>
  );
}
