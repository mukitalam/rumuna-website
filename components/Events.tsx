"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

const events = [
  {
    title: "Diplomatic Leadership Workshop",
    description:
      "Develop negotiation, public speaking and diplomatic communication skills through interactive sessions.",
    date: "15 August 2026",
    time: "10:00 AM",
    location: "University of Rajshahi",
    image: "/event-1.jpg",
    category: "Workshop",
  },
  {
    title: "Model UN Training Session",
    description:
      "A practical training session covering committee procedures, position papers and resolution writing.",
    date: "12 September 2026",
    time: "2:30 PM",
    location: "RUMUNA Secretariat",
    image: "/event-2.jpg",
    category: "Training",
  },
  {
    title: "International Affairs Dialogue",
    description:
      "Students and emerging leaders discuss contemporary international issues and possible solutions.",
    date: "10 October 2026",
    time: "3:00 PM",
    location: "Senate Building, RU",
    image: "/event-3.jpg",
    category: "Dialogue",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4AF37]" />

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A77D00]">
                Upcoming Events
              </p>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#081C3A] sm:text-4xl lg:text-5xl">
              Learn, Lead and
              <span className="text-[#B38B16]"> Make an Impact</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Join our workshops, training sessions and diplomatic events
              designed to prepare the next generation of global leaders.
            </p>
          </div>

          <Link
            href="#all-events"
            className="group inline-flex w-fit items-center gap-2 border-b-2 border-[#D4AF37] pb-2 text-sm font-bold uppercase tracking-[0.1em] text-[#081C3A]"
          >
            View All Events

            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Event cards */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group overflow-hidden bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/70 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 bg-[#D4AF37] px-4 py-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#081C3A]">
                    {event.category}
                  </p>
                </div>
              </div>

              {/* Information */}
              <div className="relative p-6 sm:p-7">
                <div className="absolute right-0 top-0 h-14 w-14 border-b border-l border-[#D4AF37]/30" />

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#A77D00]">
                  <FiCalendar />
                  <span>{event.date}</span>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold leading-snug text-[#081C3A] transition group-hover:text-[#A77D00]">
                  {event.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {event.description}
                </p>

                <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <FiClock className="shrink-0 text-[#B38B16]" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <FiMapPin className="shrink-0 text-[#B38B16]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link
                  href="#contact"
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[#081C3A]"
                >
                  Event Details

                  <FiArrowRight className="text-[#B38B16] transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          id="all-events"
          className="mt-14 flex flex-col items-start justify-between gap-6 bg-[#081C3A] px-7 py-8 sm:px-10 md:flex-row md:items-center"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Become Part of RUMUNA
            </p>

            <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
              Ready to begin your diplomatic journey?
            </h3>
          </div>

          <Link
            href="#register"
            className="inline-flex shrink-0 items-center gap-2 bg-[#D4AF37] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#081C3A] transition hover:bg-[#E4C65D]"
          >
            Join RUMUNA
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}