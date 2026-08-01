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
      className="relative scroll-mt-24 overflow-hidden bg-[#071A33] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(200,164,67,0.15),transparent_32%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 -top-36 h-[420px] w-[420px] rounded-full border border-[#C8A443]/10"
      />

      <div
        aria-hidden="true"
        className="absolute -right-12 -top-16 h-[270px] w-[270px] rounded-full border border-[#C8A443]/15"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-52 -left-40 h-[440px] w-[440px] rounded-full bg-[#C8A443]/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-32 w-32 border-b border-r border-[#C8A443]/15 sm:h-48 sm:w-48"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, transform: "translateY(30px)" }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, transform: "translateY(0px)" }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-9 bg-gradient-to-r from-transparent to-[#C8A443]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E2C66E] sm:text-sm">
              Join RUMUNA
            </p>

            <span
              aria-hidden="true"
              className="h-[2px] w-9 bg-gradient-to-r from-[#C8A443] to-transparent"
            />
          </div>

          {/* Heading */}
          <h2
            id="register-heading"
            className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[58px]"
          >
            Be Part of the{" "}
            <span className="bg-gradient-to-r from-[#C8A443] via-[#E2C66E] to-[#C8A443] bg-clip-text text-transparent">
              Diplomatic Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/65 sm:text-base sm:leading-8">
            Register for upcoming conferences, events, workshops and delegate
            opportunities organized by Rajshahi University Model United Nations
            Association.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="formal-button group inline-flex min-h-14 items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] sm:text-sm"
            >
              Register Now

              <FiArrowRight
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>

            <Link
              href="#conference"
              className="group inline-flex min-h-14 items-center justify-center gap-3 border border-white/25 bg-white/[0.04] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#C8A443] hover:bg-[#C8A443]/10 hover:text-[#E2C66E] sm:text-sm"
            >
              View Conferences

              <FiArrowRight
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </motion.div>

        {/* Opportunity cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3 lg:mt-16">
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
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                className="group bg-[#0B2342] p-7 text-center transition-colors duration-300 hover:bg-[#102B4E] sm:p-8"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#C8A443]/30 bg-[#C8A443]/10 text-xl text-[#E2C66E] transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-serif text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-white/40">
          Registration details and eligibility requirements will be shared
          through official RUMUNA announcements.
        </p>
      </div>
    </section>
  );
}