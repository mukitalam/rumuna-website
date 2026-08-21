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
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: "easeOut" as const,
      }}
      className="
        group flex h-full flex-col
        overflow-hidden
        border border-slate-200/90
        bg-white
        shadow-[0_15px_45px_rgba(7,26,51,0.08)]
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-[#C8A443]/55
        hover:shadow-[0_25px_65px_rgba(7,26,51,0.14)]
      "
    >
      {/* Event image */}
      <div
        className="
          relative aspect-[16/11]
          overflow-hidden bg-slate-200
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
            duration-700 ease-out
            group-hover:scale-[1.05]
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

        {/* Category badge */}
        <span
          className="
            absolute left-5 top-5
            border-l-[3px]
            border-[#071A33]
            bg-[#D9B94E]
            px-4 py-2
            text-[9px] font-extrabold
            uppercase tracking-[0.16em]
            text-[#071A33]
            shadow-[0_8px_22px_rgba(0,0,0,0.16)]
            sm:text-[10px]
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
            uppercase tracking-[0.13em]
            text-white sm:text-[11px]
          "
        >
          <FiCalendar
            aria-hidden="true"
            className="shrink-0 text-[#E2C66E]"
          />

          <time dateTime={event.dateTime}>
            {event.date}
          </time>
        </div>

        {/* Event number */}
        <span
          aria-hidden="true"
          className="
            absolute bottom-4 right-5
            font-serif text-4xl
            font-bold text-white/25
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Event information */}
      <div
        className="
          relative flex flex-1
          flex-col p-5
          sm:p-7
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute right-0 top-0
            h-14 w-14
            border-b border-l
            border-[#C8A443]/25
          "
        />

        <h3
          className="
            relative pr-5
            font-serif text-[23px]
            font-bold leading-[1.25]
            text-[#071A33]
            transition-colors duration-300
            group-hover:text-[#9F7B20]
            sm:text-[26px]
          "
        >
          {event.title}
        </h3>

        <p
          className="
            mt-4 flex-1
            text-[13px] leading-7
            text-slate-600
            sm:text-[14px]
          "
        >
          {event.description}
        </p>

        {/* Time and location */}
        <div
          className="
            mt-6 space-y-3
            border-y border-slate-200
            py-5
          "
        >
          <div
            className="
              flex items-start gap-3
              text-[12px] text-slate-600
              sm:text-[13px]
            "
          >
            <span
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                bg-[#C8A443]/12
                text-[#9F7B20]
              "
            >
              <FiClock aria-hidden="true" />
            </span>

            <time
              dateTime={event.startDateTime}
              className="pt-1 leading-6"
            >
              {event.time}
            </time>
          </div>

          <div
            className="
              flex items-start gap-3
              text-[12px] text-slate-600
              sm:text-[13px]
            "
          >
            <span
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                bg-[#C8A443]/12
                text-[#9F7B20]
              "
            >
              <FiMapPin aria-hidden="true" />
            </span>

            <span className="pt-1 leading-6">
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
            uppercase tracking-[0.12em]
            text-[#071A33]
            transition-colors duration-300
            hover:text-[#9F7B20]
          "
        >
          <span>Event Details</span>

          <FiArrowRight
            aria-hidden="true"
            className="
              text-base text-[#9F7B20]
              transition-transform duration-300
              group-hover/link:translate-x-1.5
            "
          />
        </Link>
      </div>

      {/* Hover line */}
      <div
        aria-hidden="true"
        className="
          h-[3px] w-0
          bg-gradient-to-r
          from-[#9F7B20]
          via-[#E2C66E]
          to-[#9F7B20]
          transition-all duration-500
          group-hover:w-full
        "
      />
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
        overflow-hidden bg-[#F8FAFC]
      "
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 top-20
          h-[380px] w-[380px]
          rounded-full bg-[#C8A443]/[0.07]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-44 bottom-10
          h-[440px] w-[440px]
          rounded-full bg-[#173B68]/[0.06]
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
            duration: 0.65,
            ease: "easeOut" as const,
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
                  from-[#9F7B20] to-[#E2C66E]
                "
              />

              <p
                className="
                  text-[10px] font-bold uppercase
                  tracking-[0.24em] text-[#9F7B20]
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
                text-[#071A33]
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Learn, Lead and{" "}

              <span className="gold-gradient-text">
                Make an Impact
              </span>
            </h2>

            <p
              className="
                mt-5 max-w-2xl
                text-[14px] leading-7
                text-slate-600
                sm:text-[15px] sm:leading-8
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
              border-b-2 border-[#C8A443]
              pb-2 text-[11px] font-bold
              uppercase tracking-[0.13em]
              text-[#071A33]
              transition-colors duration-300
              hover:text-[#9F7B20]
              sm:text-xs
            "
          >
            <span>View All Events</span>

            <FiArrowRight
              aria-hidden="true"
              className="
                text-[#9F7B20]
                transition-transform duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </motion.div>

        {/* Event cards */}
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
              mt-12 border border-slate-200
              bg-white px-6 py-14
              text-center shadow-sm
            "
          >
            <p className="font-serif text-2xl font-bold text-[#071A33]">
              No Upcoming Events
            </p>

            <p className="mt-3 text-sm text-slate-600">
              New events will be announced soon.
            </p>
          </div>
        )}

        {/* Bottom callout */}
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
            duration: 0.65,
            ease: "easeOut" as const,
          }}
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
                text-[10px] font-bold uppercase
                tracking-[0.22em] text-[#E2C66E]
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
                text-[13px] leading-6
                text-white/65
                sm:text-[14px]
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
              justify-center gap-3
              px-7 py-3.5
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