"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiBookOpen,
  FiDownload,
  FiFileText,
  FiLock,
} from "react-icons/fi";

const resources = [
  {
    title: "Study Guides",
    category: "Academic Materials",
    description:
      "Committee-wise study guides, agendas and background materials designed to support effective delegate preparation.",
    icon: FiBookOpen,
  },
  {
    title: "Rules of Procedure",
    category: "Conference Guidelines",
    description:
      "Official MUN rules, debate procedures, motions, points, caucuses and voting guidelines for every delegate.",
    icon: FiFileText,
  },
  {
    title: "Delegate Resources",
    category: "Preparation Toolkit",
    description:
      "Position paper formats, research tips, country-policy guides and practical materials for conference preparation.",
    icon: FiDownload,
  },
];

export default function Resources() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background ambient glows */}
      <div
        aria-hidden="true"
        className="absolute -left-48 top-20 h-[440px] w-[440px] rounded-full bg-[#3b82f6]/[0.05] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-[#1d4ed8]/[0.04] blur-3xl"
      />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#1d4ed8]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1d4ed8] sm:text-sm">
              Delegate Support
            </p>

            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-[#1d4ed8] to-transparent"
            />
          </div>

          <h2
            id="resources-heading"
            className="mt-5 font-serif text-4xl font-bold leading-tight text-[#071426] sm:text-5xl lg:text-[56px]"
          >
            Essential Delegate{" "}
            <span className="bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#d4af37] bg-clip-text text-transparent">
              Resources
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base">
            Access essential materials to prepare confidently for RUMUNA
            conferences, committees and diplomatic simulations.
          </p>
        </motion.div>

        {/* Resource cards Grid */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 30 }
                }
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="formal-card group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_16px_45px_rgba(7,20,38,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#3b82f6]/50 hover:shadow-[0_24px_60px_rgba(29,78,216,0.14)]"
              >
                {/* Card Top Header */}
                <div className="relative overflow-hidden bg-[#071426] px-7 py-8">
                  {/* Pulsing ambient glow on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.18),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-14 h-36 w-36 rounded-full border border-white/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute right-6 top-4 font-serif text-6xl font-bold text-white/[0.05]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-[#3b82f6]/35 bg-[#1d4ed8]/20 text-2xl text-[#93c5fd] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#1d4ed8] group-hover:text-white">
                    <Icon aria-hidden="true" />
                  </div>

                  <p className="relative mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e2c66e]">
                    {item.category}
                  </p>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col border-b-4 border-[#1d4ed8] p-7">
                  <h3 className="font-serif text-2xl font-bold leading-snug text-[#071426] transition-colors duration-300 group-hover:text-[#1d4ed8]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      Coming Soon
                    </span>

                    <span
                      aria-label="This resource is not available yet"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] transition-all duration-300 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37]/20 group-hover:shadow-[0_0_18px_rgba(212,175,55,0.25)]"
                    >
                      <FiLock aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Availability message */}
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border-l-4 border-[#3b82f6] bg-[#071426] px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_25px_rgba(59,130,246,0.1),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-8">
          <span aria-hidden="true" className="shimmer-line absolute top-0 left-0 right-0" />
          <p className="text-center text-sm leading-7 text-slate-300">
            Resource files are currently being prepared and will be available
            for download before the upcoming conference.
          </p>
        </div>
      </div>
    </section>
  );
}
