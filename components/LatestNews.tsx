"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

const newsItems = [
  {
    date: "August 2026",
    dateTime: "2026-08",
    category: "Conference",
    title: "NBMUN Season V Registration Opening Soon",
    description:
      "Prepare for an exciting diplomatic experience featuring committees, debate, negotiation and meaningful global dialogue.",
    href: "#register",
  },
  {
    date: "July 2026",
    dateTime: "2026-07",
    category: "Announcement",
    title: "RUMUNA Announces Upcoming Events",
    description:
      "Rajshahi University Model United Nations Association is preparing a new series of academic and diplomatic programs.",
    href: "#contact",
  },
  {
    date: "June 2026",
    dateTime: "2026-06",
    category: "Resources",
    title: "Delegate Resources Updated",
    description:
      "Updated study guides, rules of procedure and delegate preparation materials will be available for participants.",
    href: "#contact",
  },
];

export default function LatestNews() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="latest-news"
      aria-labelledby="latest-news-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28 text-[#060e1a]"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 top-24 h-[460px] w-[460px] rounded-full bg-[#3b82f6]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-10 h-[480px] w-[480px] rounded-full bg-[#1d4ed8]/[0.05] blur-3xl"
      />

      <div className="section-container relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#1d4ed8]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1d4ed8] sm:text-sm">
              News & Updates
            </p>

            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-[#1d4ed8] to-transparent"
            />
          </div>

          <h2
            id="latest-news-heading"
            className="mt-5 font-serif text-4xl font-bold leading-tight text-[#060e1a] sm:text-5xl lg:text-[56px]"
          >
            Latest from{" "}
            <span className="diplomatic-title-gradient">
              RUMUNA
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base">
            Stay informed about our latest announcements, conferences,
            activities and delegate resources.
          </p>
        </motion.div>

        {/* News Cards Grid */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="formal-card group flex min-h-[390px] flex-col rounded-3xl border border-slate-200/90 bg-white shadow-[0_12px_35px_rgba(6,14,26,0.05)] transition-all duration-450 hover:-translate-y-2.5 hover:border-[#3b82f6]/50 hover:shadow-[0_25px_60px_rgba(29,78,216,0.14)]"
            >
              {/* Card Header Header with Institutional Midnight Background */}
              <div className="relative overflow-hidden bg-[#060e1a] px-6 py-7 sm:px-7 text-white">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute right-6 top-5 font-serif text-5xl font-bold text-white/[0.06] transition-colors duration-300 group-hover:text-white/[0.12]"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#3b82f6]/40 bg-[#1d4ed8]/20 text-[#93c5fd] shadow-md transition-transform duration-300 group-hover:scale-105">
                    <FiCalendar aria-hidden="true" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3e5ab]">
                      {item.category}
                    </p>

                    <time
                      dateTime={item.dateTime}
                      className="mt-0.5 block text-xs font-bold text-[#93c5fd]"
                    >
                      {item.date}
                    </time>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col border-b-4 border-[#1d4ed8] bg-white p-6 sm:p-7">
                <h3 className="font-serif text-2xl font-bold leading-snug text-[#060e1a] transition-colors duration-300 group-hover:text-[#1d4ed8]">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-xs leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <Link
                    href={item.href}
                    aria-label={`Read more about ${item.title}`}
                    className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1d4ed8] transition-colors duration-300 hover:text-[#1e3a8a]"
                  >
                    <span>Read More</span>

                    <FiArrowRight
                      aria-hidden="true"
                      className="text-sm transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <Link
            href="#contact"
            className="formal-button group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em]"
          >
            <span>Contact RUMUNA</span>

            <FiArrowRight
              aria-hidden="true"
              className="text-sm transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
