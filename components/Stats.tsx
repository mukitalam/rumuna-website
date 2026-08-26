"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
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
    endValue: 12,
    suffix: "+",
    title: "Years of Excellence",
    description: "Promoting diplomacy, leadership and meaningful youth engagement.",
  },
  {
    icon: FiGlobe,
    endValue: 20,
    suffix: "+",
    title: "Conferences",
    description: "Successful national and international diplomatic events.",
  },
  {
    icon: FiUsers,
    endValue: 3000,
    suffix: "+",
    title: "Delegates",
    description: "Young leaders connected through the RUMUNA community.",
  },
  {
    icon: FiAward,
    endValue: 50,
    suffix: "+",
    title: "Awards",
    description: "Recognitions and achievements earned throughout our journey.",
  },
];

export default function Stats() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { ref: containerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="impact"
      ref={containerRef}
      aria-labelledby="impact-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#060e1a] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* Ambient Glow Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(59,130,246,0.18),transparent_42%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[#1d4ed8]/[0.1] blur-3xl"
      />

      <div className="section-container relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#3b82f6]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd] sm:text-sm">
              Our Journey in Numbers
            </p>

            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-[#3b82f6] to-transparent"
            />
          </div>

          <h2
            id="impact-heading"
            className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]"
          >
            Creating Meaningful{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#3b82f6] to-[#f3e5ab] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(59,130,246,0.3)]">
              Impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-300 sm:text-base">
            Empowering students to become confident leaders, thoughtful
            diplomats and responsible global citizens.
          </p>
        </motion.div>

        {/* Statistics Grid with Micro-Surface Cards */}
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              className="group relative min-h-[330px] border-b border-white/10 bg-[#0b192e]/60 px-6 py-10 text-center transition-all duration-500 hover:z-10 hover:bg-[#1d4ed8]/20 hover:shadow-[inset_0_0_40px_rgba(29,78,216,0.12)] sm:border-r lg:border-b-0 lg:px-7 lg:py-12"
              >
                {/* Index watermark */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 font-serif text-6xl font-bold text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.08]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon Container with Luminous Ambient Shadow */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#3b82f6]/40 bg-[#1d4ed8]/20 text-2xl text-[#93c5fd] shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#60a5fa] group-hover:bg-[#1d4ed8] group-hover:text-white group-hover:shadow-[0_0_40px_rgba(59,130,246,0.7),0_10px_30px_rgba(29,78,216,0.4)]">
                  <Icon aria-hidden="true" />
                </div>

                {/* CountUp Number */}
                <p className="mt-6 font-serif text-4xl font-bold text-white sm:text-5xl tracking-tight">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.endValue}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    stat.endValue
                  )}
                  <span className="text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors duration-300">{stat.suffix}</span>
                </p>

                {/* Accent Line */}
                <div
                  aria-hidden="true"
                  className="mx-auto mt-4 h-[2px] w-8 bg-[#3b82f6] transition-all duration-500 group-hover:w-16 group-hover:bg-[#60a5fa]"
                />

                {/* Title */}
                <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-2.5 max-w-[240px] text-xs leading-6 text-slate-300">
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Statement Box */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border-l-4 border-[#3b82f6] border border-white/10 bg-white/[0.05] px-6 py-5 text-center backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.35),0_0_25px_rgba(59,130,246,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] sm:px-8"
        >
          <p className="text-sm leading-7 text-slate-300 sm:text-[15px]">
            Every conference, delegate and achievement reflects RUMUNA’s
            continuing commitment to diplomacy, education and youth leadership.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
