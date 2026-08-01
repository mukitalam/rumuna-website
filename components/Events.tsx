"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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
      "Develop negotiation, public-speaking and diplomatic communication skills through interactive sessions.",
    date: "15 August 2026",
    dateTime: "2026-08-15",
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
    dateTime: "2026-09-12",
    time: "2:30 PM",
    location: "RUMUNA Secretariat",
    image: "/event-2.jpg",
    category: "Training",
  },
  {
    title: "International Affairs Dialogue",
    description:
      "Students and emerging leaders discuss contemporary international issues and explore possible solutions.",
    date: "10 October 2026",
    dateTime: "2026-10-10",
    time: "3:00 PM",
    location: "Senate Building, RU",
    image: "/event-3.jpg",
    category: "Dialogue",
  },
];

export default function Events() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="
        section-padding relative overflow-hidden
        bg-[#F8FAFC]
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          absolute -left-40 top-20
          h-[380px] w-[380px] rounded-full
          bg-[#C8A443]/[0.07] blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -right-44 bottom-10
          h-[440px] w-[440px] rounded-full
          bg-[#173B68]/[0.06] blur-3xl
        "
      />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div
          className="
            flex flex-col justify-between
            gap-7 md:flex-row md:items-end
          "
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-[2px] w-10
                  bg-gradient-to-r
                  from-[#9F7B20] to-[#E2C66E]
                "
              />

              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.22em] text-[#9F7B20]
                  sm:text-sm
                "
              >
                Upcoming Events
              </p>
            </div>

            <h2
              id="events-heading"
              className="
                mt-5 max-w-2xl font-serif
                text-4xl font-bold leading-[1.08]
                text-[#071A33]
                sm:text-5xl lg:text-[56px]
              "
            >
              Learn, Lead and{" "}
              <span className="gold-gradient-text">
                Make an Impact
              </span>
            </h2>

            <p
              className="
                mt-6 max-w-2xl text-[15px]
                leading-7 text-slate-600
                sm:text-base sm:leading-8
              "
            >
              Join workshops, training sessions and diplomatic events
              designed to prepare the next generation of thoughtful,
              confident and globally aware leaders.
            </p>
          </div>

          <Link
            href="#all-events"
            className="
              group inline-flex w-fit
              items-center gap-2.5
              border-b-2 border-[#C8A443]
              pb-2 text-xs font-bold uppercase
              tracking-[0.12em] text-[#071A33]
              transition-colors duration-300
              hover:text-[#9F7B20]
              sm:text-sm
            "
          >
            View All Events

            <FiArrowRight
              aria-hidden="true"
              className="
                text-[#9F7B20]
                transition-transform duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </div>

        {/* Event cards */}
        <div
          id="all-events"
          className="
            mt-12 grid scroll-mt-28
            gap-7 md:grid-cols-2
            lg:mt-16 lg:grid-cols-3
          "
        >
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              className="
                group flex h-full flex-col
                overflow-hidden border
                border-slate-200/80 bg-white
                shadow-[0_12px_35px_rgba(7,26,51,0.07)]
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[#C8A443]/45
                hover:shadow-[0_25px_60px_rgba(7,26,51,0.15)]
              "
            >
              {/* Event image */}
              <div
                className="
                  relative h-[250px]
                  overflow-hidden sm:h-[275px]
                "
              >
                <Image
                  src={event.image}
                  alt={`${event.title} at ${event.location}`}
                  fill
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform duration-1000
                    ease-out group-hover:scale-[1.06]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#041126]/80
                    via-[#071A33]/10
                    to-transparent
                  "
                />

                {/* Category */}
                <div
                  className="
                    absolute left-5 top-5
                    border border-[#E2C66E]/50
                    bg-[#C8A443]
                    px-4 py-2
                  "
                >
                  <p
                    className="
                      text-[10px] font-extrabold
                      uppercase tracking-[0.16em]
                      text-[#071A33]
                    "
                  >
                    {event.category}
                  </p>
                </div>

                {/* Image number */}
                <div
                  aria-hidden="true"
                  className="
                    absolute bottom-5 right-5
                    font-serif text-4xl font-bold
                    text-white/25
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Event information */}
              <div
                className="
                  relative flex flex-1
                  flex-col p-6 sm:p-7
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute right-0 top-0
                    h-16 w-16 border-b border-l
                    border-[#C8A443]/30
                  "
                />

                <div
                  className="
                    relative flex items-center gap-2
                    text-[11px] font-bold uppercase
                    tracking-[0.1em] text-[#9F7B20]
                  "
                >
                  <FiCalendar
                    aria-hidden="true"
                    className="shrink-0 text-sm"
                  />

                  <time dateTime={event.dateTime}>
                    {event.date}
                  </time>
                </div>

                <h3
                  className="
                    relative mt-4 font-serif
                    text-2xl font-bold leading-snug
                    text-[#071A33]
                    transition-colors duration-300
                    group-hover:text-[#9F7B20]
                  "
                >
                  {event.title}
                </h3>

                <p
                  className="
                    mt-4 text-sm leading-7
                    text-slate-600
                  "
                >
                  {event.description}
                </p>

                <div
                  className="
                    mt-6 space-y-3.5
                    border-t border-slate-200
                    pt-5
                  "
                >
                  <div
                    className="
                      flex items-center gap-3
                      text-sm text-slate-600
                    "
                  >
                    <span
                      className="
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        bg-[#C8A443]/10
                        text-[#9F7B20]
                      "
                    >
                      <FiClock aria-hidden="true" />
                    </span>

                    <time
                      dateTime={`${event.dateTime}T${event.time}`}
                    >
                      {event.time}
                    </time>
                  </div>

                  <div
                    className="
                      flex items-center gap-3
                      text-sm text-slate-600
                    "
                  >
                    <span
                      className="
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        bg-[#C8A443]/10
                        text-[#9F7B20]
                      "
                    >
                      <FiMapPin aria-hidden="true" />
                    </span>

                    <span>{event.location}</span>
                  </div>
                </div>

                <Link
                  href="#contact"
                  aria-label={`View details for ${event.title}`}
                  className="
                    group/link mt-auto
                    inline-flex w-fit items-center
                    gap-2 pt-7 text-xs font-bold
                    uppercase tracking-[0.1em]
                    text-[#071A33]
                    transition-colors duration-300
                    hover:text-[#9F7B20]
                  "
                >
                  Event Details

                  <FiArrowRight
                    aria-hidden="true"
                    className="
                      text-[#9F7B20]
                      transition-transform duration-300
                      group-hover/link:translate-x-1.5
                    "
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="
            relative mt-12 overflow-hidden
            bg-[#071A33] px-6 py-8
            shadow-[0_24px_60px_rgba(7,26,51,0.2)]
            sm:px-9 sm:py-10
            md:flex md:items-center
            md:justify-between md:gap-8
            lg:mt-16 lg:px-12
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute -right-20 -top-24
              h-56 w-56 rounded-full
              border border-[#C8A443]/20
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute -right-8 -top-12
              h-40 w-40 rounded-full
              border border-[#C8A443]/15
            "
          />

          <div className="relative max-w-2xl">
            <p
              className="
                text-[11px] font-bold uppercase
                tracking-[0.22em] text-[#E2C66E]
                sm:text-xs
              "
            >
              Become Part of RUMUNA
            </p>

            <h3
              className="
                mt-3 font-serif text-2xl
                font-bold leading-tight text-white
                sm:text-3xl lg:text-4xl
              "
            >
              Ready to Begin Your Diplomatic Journey?
            </h3>

            <p
              className="
                mt-3 max-w-xl text-sm
                leading-6 text-white/60
              "
            >
              Connect with an ambitious community of students and
              develop the skills needed to create meaningful impact.
            </p>
          </div>

          <Link
            href="#register"
            className="
              formal-button group relative mt-7
              inline-flex min-h-12 shrink-0
              items-center justify-center gap-3
              px-7 py-3.5 text-xs
              font-bold uppercase tracking-[0.11em]
              md:mt-0 sm:text-[13px]
            "
          >
            Join RUMUNA

            <FiArrowRight
              aria-hidden="true"
              className="
                text-base transition-transform
                duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}