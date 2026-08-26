"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

import { events, type EventItem } from "@/data/events";

function EventCard({
  event,
  index,
  shouldReduceMotion,
}: {
  event: EventItem;
  index: number;
  shouldReduceMotion: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(event.image);
  const fallbackImage = "/event-1.jpg";

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 32 }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        formal-card group flex h-full flex-col
        overflow-hidden rounded-3xl
        border border-slate-200/90
        bg-white
        shadow-[0_15px_45px_rgba(6,14,26,0.06)]
        transition-all duration-500
        hover:-translate-y-2.5
        hover:border-[#3b82f6]/50
        hover:shadow-[0_28px_65px_rgba(29,78,216,0.15)]
      "
    >
      {/* Event image container */}
      <div
        className="
          relative aspect-[16/11]
          overflow-hidden bg-[#060e1a]
        "
      >
        <Image
          src={imgSrc}
          alt={`${event.title} at ${event.location}`}
          fill
          onError={() => setImgSrc(fallbackImage)}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="
            object-cover object-center
            transition-transform
            duration-1000 ease-out
            group-hover:scale-[1.06]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#060e1a]/95
            via-[#060e1a]/25
            to-transparent
          "
        />

        {/* Category badge */}
        <span
          className="
            absolute left-5 top-5
            rounded-full
            border border-[#d4af37]/45
            ring-1 ring-[#d4af37]/20
            bg-[#060e1a]/92
            px-4 py-1.5
            text-[10px] font-bold
            uppercase tracking-[0.16em]
            text-[#f3e5ab]
            backdrop-blur-xl
            shadow-[0_8px_28px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.12),inset_0_1px_0_rgba(255,255,255,0.18)]
            sm:text-[11px]
          "
        >
          {event.category}
        </span>

        {/* Date displayed on image */}
        <div
          className="
            absolute bottom-5 left-5
            right-16 flex items-center gap-2
            text-[10px] font-bold
            uppercase tracking-[0.16em]
            text-white sm:text-[11px]
          "
        >
          <FiCalendar
            aria-hidden="true"
            className="shrink-0 text-[#93c5fd]"
          />

          <time dateTime={event.dateTime}>
            {event.date}
          </time>
        </div>

        {/* Event index watermark */}
        <span
          aria-hidden="true"
          className="
            absolute bottom-4 right-5
            font-serif text-4xl
            font-bold text-white/20
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Event information */}
      <div
        className="
          relative flex flex-1
          flex-col p-6 sm:p-7
        "
      >
        <h3
          className="
            relative pr-5
            font-serif text-[23px]
            font-bold leading-[1.25]
            text-[#060e1a]
            transition-colors duration-300
            group-hover:text-[#1d4ed8]
            sm:text-[26px]
          "
        >
          {event.title}
        </h3>

        <p
          className="
            mt-4 flex-1
            text-[14px] leading-7
            text-slate-600
            sm:text-[15px]
          "
        >
          {event.description}
        </p>

        {/* Time and location */}
        <div
          className="
            mt-6 space-y-3
            border-y border-slate-100
            py-5
          "
        >
          <div
            className="
              flex items-start gap-3
              text-[13px] text-slate-600
            "
          >
            <span
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center rounded-xl
                bg-[#1d4ed8]/10
                text-[#1d4ed8]
                transition-all duration-300
                group-hover:bg-[#1d4ed8]
                group-hover:text-white
                group-hover:shadow-[0_0_18px_rgba(29,78,216,0.5)]
              "
            >
              <FiClock aria-hidden="true" />
            </span>

            <time
              dateTime={event.startDateTime}
              className="pt-1 font-semibold leading-6 text-slate-800"
            >
              {event.time}
            </time>
          </div>

          <div
            className="
              flex items-start gap-3
              text-[13px] text-slate-600
            "
          >
            <span
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center rounded-xl
                bg-[#1d4ed8]/10
                text-[#1d4ed8]
                transition-all duration-300
                group-hover:bg-[#1d4ed8]
                group-hover:text-white
                group-hover:shadow-[0_0_18px_rgba(29,78,216,0.5)]
              "
            >
              <FiMapPin aria-hidden="true" />
            </span>

            <span className="pt-1 font-semibold leading-6 text-slate-800">
              {event.location}
            </span>
          </div>
        </div>

        <Link
          href={event.detailsLink || "#contact"}
          aria-label={`View details for ${event.title}`}
          className="
            group/link mt-6
            inline-flex w-fit
            items-center gap-2
            text-[11px] font-bold
            uppercase tracking-[0.14em]
            text-[#1d4ed8]
            transition-colors duration-300
            hover:text-[#1e3a8a]
          "
        >
          <span>Event Details</span>

          <FiArrowRight
            aria-hidden="true"
            className="
              text-base text-[#1d4ed8]
              transition-transform duration-300
              group-hover/link:translate-x-1.5
            "
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Events() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const visibleEvents = events
    .filter((event) => event.isPublished)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="
        section-padding relative scroll-mt-24
        overflow-hidden bg-[#f8fafc]
      "
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 top-20
          h-[450px] w-[450px]
          rounded-full bg-[#3b82f6]/[0.06]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-44 bottom-10
          h-[460px] w-[460px]
          rounded-full bg-[#1d4ed8]/[0.05]
          blur-3xl
        "
      />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 24 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
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
                  from-transparent to-[#1d4ed8]
                "
              />

              <p
                className="
                  text-[11px] font-bold uppercase
                  tracking-[0.22em] text-[#1d4ed8]
                  sm:text-xs
                "
              >
                Upcoming Events
              </p>
            </div>

            <h2
              id="events-heading"
              className="
                mt-5 max-w-2xl
                font-serif text-[34px]
                font-bold leading-[1.1]
                text-[#060e1a]
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Learn, Lead and{" "}
              <span className="diplomatic-title-gradient">
                Make an Impact
              </span>
            </h2>

            <p
              className="
                mt-5 max-w-2xl
                text-[15px] leading-8
                text-slate-600
                sm:text-[16px]
              "
            >
              Join workshops, training sessions and diplomatic events designed
              to prepare the next generation of thoughtful, confident and
              globally aware leaders.
            </p>
          </div>

          <Link
            href="#all-events"
            className="
              group inline-flex w-fit
              items-center gap-2.5
              border-b-2 border-[#1d4ed8]
              pb-2 text-[11px] font-bold
              uppercase tracking-[0.14em]
              text-[#060e1a]
              transition-colors duration-300
              hover:text-[#1d4ed8]
              sm:text-xs
            "
          >
            <span>View All Events</span>

            <FiArrowRight
              aria-hidden="true"
              className="
                text-[#1d4ed8]
                transition-transform duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </motion.div>

        {/* Event cards grid */}
        {visibleEvents.length > 0 ? (
          <div
            id="all-events"
            className="
              mt-12 grid scroll-mt-28
              items-stretch gap-7
              md:grid-cols-2
              lg:mt-16 lg:grid-cols-3
              lg:gap-8
            "
          >
            {visibleEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        ) : (
          <div
            id="all-events"
            className="
              mt-12 rounded-3xl border border-slate-200
              bg-white px-6 py-14
              text-center shadow-sm
            "
          >
            <p className="font-serif text-2xl font-bold text-[#060e1a]">
              No Upcoming Events
            </p>

            <p className="mt-3 text-sm text-slate-600">
              New events will be announced soon.
            </p>
          </div>
        )}

        {/* Bottom Callout banner */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative mt-12 overflow-hidden rounded-3xl
            bg-[#060e1a] px-6 py-9
            shadow-[0_30px_70px_rgba(6,14,26,0.4),inset_0_1px_0_rgba(255,255,255,0.12)]
            border border-white/10
            sm:px-10 sm:py-12
            md:flex md:items-center
            md:justify-between md:gap-8
            lg:mt-16 lg:px-14
          "
        >
          {/* Ambient background rings */}
          <div
            aria-hidden="true"
            className="
              absolute -right-20 -top-24
              h-64 w-64 rounded-full
              border border-white/10
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute -right-8 -top-12
              h-44 w-44 rounded-full
              border border-[#3b82f6]/20
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.22),transparent_50%)]
            "
          />

          <div className="relative max-w-2xl">
            <p
              className="
                text-[10px] font-bold uppercase
                tracking-[0.22em] text-[#f3e5ab]
                sm:text-[11px]
              "
            >
              Become Part of RUMUNA
            </p>

            <h3
              className="
                mt-3 font-serif text-[26px]
                font-bold leading-tight text-white
                sm:text-[32px] lg:text-[36px]
              "
            >
              Ready to Begin Your Diplomatic Journey?
            </h3>

            <p
              className="
                mt-3 max-w-xl
                text-[14px] leading-7
                text-slate-300
              "
            >
              Connect with an ambitious community of students and develop the
              skills needed to create meaningful impact.
            </p>
          </div>

          <Link
            href="#register"
            className="
              formal-button group relative
              mt-7 inline-flex min-h-12
              shrink-0 items-center
              justify-center gap-3 rounded-xl
              px-8 py-3.5
              text-[11px] font-bold
              uppercase tracking-[0.12em]
              sm:text-xs md:mt-0
            "
          >
            <span>Join RUMUNA</span>

            <FiArrowRight
              aria-hidden="true"
              className="
                text-base
                transition-transform duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
