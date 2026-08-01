"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

const statistics = [
  {
    icon: FiCalendar,
    number: "10+",
    title: "Years of Excellence",
    description: "Promoting diplomacy, leadership and meaningful youth engagement.",
  },
  {
    icon: FiGlobe,
    number: "15+",
    title: "Conferences",
    description: "Successful national and international diplomatic events.",
  },
  {
    icon: FiUsers,
    number: "3,000+",
    title: "Delegates",
    description: "Young leaders connected through the RUMUNA community.",
  },
  {
    icon: FiAward,
    number: "50+",
    title: "Awards",
    description: "Recognitions and achievements earned throughout our journey.",
  },
];

export default function Stats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#071A33] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(200,164,67,0.14),transparent_32%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-36 -top-40 h-[460px] w-[460px] rounded-full border border-[#C8A443]/10"
      />

      <div
        aria-hidden="true"
        className="absolute -right-12 -top-16 h-[280px] w-[280px] rounded-full border border-[#C8A443]/15"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-52 -left-40 h-[440px] w-[440px] rounded-full bg-[#C8A443]/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-40 w-40 border-r border-t border-[#C8A443]/15 sm:h-56 sm:w-56"
      />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#C8A443]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E2C66E] sm:text-sm">
              Our Journey in Numbers
            </p>

            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-[#C8A443] to-transparent"
            />
          </div>

          <h2
            id="impact-heading"
            className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]"
          >
            Creating Meaningful{" "}
            <span className="bg-gradient-to-r from-[#C8A443] via-[#E2C66E] to-[#C8A443] bg-clip-text text-transparent">
              Impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/65 sm:text-base sm:leading-8">
            Empowering students to become confident leaders, thoughtful
            diplomats and responsible global citizens.
          </p>
        </motion.div>

        {/* Statistics grid */}
        <div className="mt-12 grid overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.title}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 30 }
                }
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                className="group relative min-h-[340px] border-b border-white/10 bg-[#0B2342] px-6 py-9 text-center transition-all duration-500 hover:z-10 hover:bg-[#102B4E] sm:border-r lg:border-b-0 lg:px-7 lg:py-10"
              >
                {/* Decorative number */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 font-serif text-6xl font-bold text-white/[0.035]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center border border-[#C8A443]/35 bg-[#C8A443]/10 text-2xl text-[#E2C66E] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#C8A443] group-hover:bg-[#C8A443] group-hover:text-[#071A33]">
                  <Icon aria-hidden="true" />
                </div>

                {/* Number */}
                <p className="mt-7 font-serif text-4xl font-bold text-[#E2C66E] sm:text-5xl">
                  {stat.number}
                </p>

                {/* Divider */}
                <div
                  aria-hidden="true"
                  className="mx-auto mt-4 h-[2px] w-8 bg-[#C8A443] transition-all duration-500 group-hover:w-16"
                />

                {/* Title */}
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-white">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-[240px] text-sm leading-6 text-white/55">
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-10 max-w-3xl border-l-4 border-[#C8A443] bg-white/[0.05] px-6 py-5 text-center backdrop-blur-sm sm:px-8"
        >
          <p className="text-sm leading-7 text-white/65 sm:text-[15px]">
            Every conference, delegate and achievement reflects RUMUNA’s
            continuing commitment to diplomacy, education and youth leadership.
          </p>
        </motion.div>
      </div>
    </section>
  );
}