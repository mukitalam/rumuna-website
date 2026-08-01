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
      className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute -left-48 top-20 h-[440px] w-[440px] rounded-full bg-[#C8A443]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-[#173B68]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-40 w-40 border-b border-r border-[#C8A443]/20 sm:h-56 sm:w-56"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-40 w-40 border-l border-t border-[#C8A443]/20 sm:h-56 sm:w-56"
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

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9F7B20] sm:text-sm">
              Delegate Support
            </p>

            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-[#C8A443] to-transparent"
            />
          </div>

          <h2
            id="resources-heading"
            className="mt-5 font-serif text-4xl font-bold leading-tight text-[#071A33] sm:text-5xl lg:text-[56px]"
          >
            Essential Delegate{" "}
            <span className="bg-gradient-to-r from-[#9F7B20] via-[#C8A443] to-[#E2C66E] bg-clip-text text-transparent">
              Resources
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
            Access essential materials to prepare confidently for RUMUNA
            conferences, committees and diplomatic simulations.
          </p>
        </motion.div>

        {/* Resource cards */}
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
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                className="group relative flex min-h-[390px] flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_16px_45px_rgba(7,26,51,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A443]/50 hover:shadow-[0_24px_60px_rgba(7,26,51,0.15)]"
              >
                {/* Card top */}
                <div className="relative overflow-hidden bg-[#071A33] px-7 py-8">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-14 h-36 w-36 rounded-full border border-[#C8A443]/20"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute right-6 top-4 font-serif text-6xl font-bold text-white/[0.05]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex h-14 w-14 items-center justify-center border border-[#C8A443]/35 bg-[#C8A443]/10 text-2xl text-[#E2C66E] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                    <Icon aria-hidden="true" />
                  </div>

                  <p className="relative mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2C66E]">
                    {item.category}
                  </p>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col border-b-4 border-[#C8A443] p-7">
                  <h3 className="font-serif text-2xl font-bold leading-snug text-[#071A33] transition-colors duration-300 group-hover:text-[#9F7B20]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      Coming Soon
                    </span>

                    <span
                      aria-label="This resource is not available yet"
                      className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50 text-slate-400"
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
        <div className="mx-auto mt-12 max-w-3xl border-l-4 border-[#C8A443] bg-[#071A33] px-6 py-5 shadow-lg sm:px-8">
          <p className="text-center text-sm leading-7 text-white/70">
            Resource files are currently being prepared and will be available
            for download before the upcoming conference.
          </p>
        </div>
      </div>
    </section>
  );
}