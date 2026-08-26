"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";

const opportunities = [
  {
    icon: FiUsers,
    title: "Delegate Opportunities",
    description: "Join conferences and represent nations in global committees.",
  },
  {
    icon: FiCalendar,
    title: "Events & Workshops",
    description: "Participate in diplomatic training and academic programs.",
  },
  {
    icon: FiCheckCircle,
    title: "Leadership Experience",
    description: "Develop communication, negotiation and leadership skills.",
  },
];

export default function Register() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="register"
      aria-labelledby="register-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#071426] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* Decorative background ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.16),transparent_38%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-36 h-[460px] w-[460px] rounded-full border border-white/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-40 h-[480px] w-[480px] rounded-full bg-[#1d4ed8]/[0.08] blur-3xl"
      />

      {/* Gold aurora orb for warm contrast */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-[8%] top-[12%]
          h-[280px] w-[280px] rounded-full
          bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(212,175,55,0.04)_50%,transparent_70%)]
          blur-3xl animate-aurora-float
        "
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 30 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-9 bg-gradient-to-r from-transparent to-[#3b82f6]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd] sm:text-sm">
              Join RUMUNA
            </p>

            <span
              aria-hidden="true"
              className="h-[2px] w-9 bg-gradient-to-r from-[#3b82f6] to-transparent"
            />
          </div>

          {/* Heading */}
          <h2
            id="register-heading"
            className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[58px]"
          >
            Be Part of the{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#3b82f6] to-[#e2c66e] bg-clip-text text-transparent">
              Diplomatic Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-300 sm:text-base">
            Register for upcoming conferences, events, workshops and delegate
            opportunities organized by Rajshahi University Model United Nations
            Association.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="formal-button group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg px-9 py-4 text-xs font-bold uppercase tracking-[0.14em] sm:text-sm"
            >
              <span>Register Now</span>

              <FiArrowRight
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>

            <Link
              href="#conference"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[0.05] px-9 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#3b82f6] hover:bg-[#1d4ed8]/20 hover:text-[#93c5fd] sm:text-sm"
            >
              <span>View Conferences</span>

              <FiArrowRight
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </motion.div>

        {/* Opportunity cards Grid */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl md:grid-cols-3 lg:mt-16">
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 24 }
                }
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-[#0b192e] p-8 text-center transition-all duration-500 hover:bg-[#172554] sm:p-9"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3b82f6]/30 bg-[#1d4ed8]/20 text-2xl text-[#93c5fd] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-[#3b82f6] group-hover:bg-[#1d4ed8] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6),0_0_0_4px_rgba(59,130,246,0.12)]">
                  <Icon aria-hidden="true" />
                </div>

                <h3 className="mt-6 font-serif text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-9 text-center text-xs leading-6 text-slate-400">
          Registration details and eligibility requirements will be shared
          through official RUMUNA announcements.
        </p>
      </div>
    </section>
  );
}
