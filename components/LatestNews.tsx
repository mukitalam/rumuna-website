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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="latest-news"
      aria-labelledby="latest-news-heading"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute -left-44 top-24 h-[420px] w-[420px] rounded-full bg-[#C8A443]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-10 h-[460px] w-[460px] rounded-full bg-[#173B68]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-40 w-40 border-b border-r border-[#C8A443]/20 sm:h-56 sm:w-56"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-44 w-44 border-l border-t border-[#C8A443]/20 sm:h-60 sm:w-60"
      />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#C8A443]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9F7B20] sm:text-sm">
              News & Updates
            </p>

            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-[#C8A443] to-transparent"
            />
          </div>

          <h2
            id="latest-news-heading"
            className="mt-5 font-serif text-4xl font-bold leading-tight text-[#071A33] sm:text-5xl lg:text-[56px]"
          >
            Latest from{" "}
            <span className="bg-gradient-to-r from-[#9F7B20] via-[#C8A443] to-[#E2C66E] bg-clip-text text-transparent">
              RUMUNA
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
            Stay informed about our latest announcements, conferences,
            activities and delegate resources.
          </p>
        </div>

        {/* News cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {newsItems.map((item, index) => (
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
              className="formal-card group flex min-h-[390px] flex-col"
            >
              {/* Card header */}
              <div className="relative overflow-hidden bg-[#071A33] px-6 py-6 sm:px-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-[#C8A443]/20"
                />

                <div
                  aria-hidden="true"
                  className="absolute right-6 top-5 font-serif text-5xl font-bold text-white/[0.06]"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C8A443]/30 bg-[#C8A443]/10 text-[#E2C66E]">
                    <FiCalendar aria-hidden="true" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                      {item.category}
                    </p>

                    <time
                      dateTime={item.dateTime}
                      className="mt-0.5 block text-sm font-semibold text-[#E2C66E]"
                    >
                      {item.date}
                    </time>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col border-b-4 border-[#C8A443] bg-white p-6 sm:p-7">
                <h3 className="font-serif text-2xl font-bold leading-snug text-[#071A33] transition-colors duration-300 group-hover:text-[#9F7B20]">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-7 border-t border-slate-200 pt-5">
                  <Link
                    href={item.href}
                    aria-label={`Read more about ${item.title}`}
                    className="group/link inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#9F7B20] transition-colors duration-300 hover:text-[#071A33]"
                  >
                    Read More

                    <FiArrowRight
                      aria-hidden="true"
                      className="text-base transition-transform duration-300 group-hover/link:translate-x-1.5"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom action */}
        <div className="mt-12 flex justify-center lg:mt-14">
          <Link
            href="#contact"
            className="formal-button group inline-flex min-h-12 items-center justify-center gap-3 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] sm:text-[13px]"
          >
            Contact RUMUNA

            <FiArrowRight
              aria-hidden="true"
              className="text-base transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}