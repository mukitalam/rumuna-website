"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import { conferences, type Conference as ConferenceType } from "@/data";

function ConferenceCard({
  conference,
  index,
  shouldReduceMotion,
}: {
  conference: ConferenceType;
  index: number;
  shouldReduceMotion: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(conference.image);
  const fallbackImage = index % 2 === 0 ? "/nbmun.jpg" : "/session.jpg";

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 35 }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: shouldReduceMotion ? 0 : index * 0.14,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        formal-card group flex h-full flex-col
        overflow-hidden rounded-3xl
        border border-slate-200/90
        bg-white
        shadow-[0_18px_50px_rgba(6,14,26,0.06)]
        transition-all duration-500
        hover:-translate-y-2.5
        hover:border-[#3b82f6]/50
        hover:shadow-[0_30px_70px_rgba(29,78,216,0.16)]
      "
    >
      {/* Conference image container */}
      <div
        className="
          relative aspect-[16/10]
          overflow-hidden bg-[#060e1a]
        "
      >
        <Image
          src={imgSrc}
          alt={conference.title}
          fill
          onError={() => setImgSrc(fallbackImage)}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1280px) 50vw,
            620px
          "
          className="
            object-cover object-center
            transition-transform
            duration-1000 ease-out
            group-hover:scale-[1.05]
          "
        />

        {/* Dark image overlay */}
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

        {/* Edition badge chip with refined gold accent */}
        <span
          className="
            absolute left-5 top-5
            rounded-full
            border border-[#d4af37]/45
            ring-1 ring-[#d4af37]/20
            bg-[#060e1a]/92
            px-4 py-1.5
            text-[11px] font-bold
            uppercase tracking-[0.16em]
            text-[#f3e5ab]
            backdrop-blur-xl
            shadow-[0_8px_28px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.15),inset_0_1px_0_rgba(255,255,255,0.18)]
            sm:left-6 sm:top-6
          "
        >
          {conference.edition}
        </span>

        {/* Theme on image */}
        <div
          className="
            absolute bottom-5
            left-5 right-5
            sm:bottom-6 sm:left-6 sm:right-6
          "
        >
          {/* Cinematic side vignette */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              inset-x-0 bottom-0 h-[180px]
              bg-gradient-to-t from-[#060e1a] to-transparent
            "
          />
          <p
            className="
              text-[10px] font-bold
              uppercase tracking-[0.22em]
              text-[#93c5fd]
            "
          >
            Conference Theme
          </p>

          <p
            className="
              mt-1.5 max-w-lg
              font-serif text-[15px] sm:text-base font-semibold
              leading-snug text-white
            "
          >
            {conference.theme}
          </p>
        </div>
      </div>

      {/* Conference information */}
      <div
        className="
          flex flex-1 flex-col
          p-6 sm:p-8
        "
      >
        <h3
          className="
            font-serif text-[24px]
            font-bold leading-[1.2]
            text-[#060e1a]
            transition-colors duration-300
            group-hover:text-[#1d4ed8]
            sm:text-[28px]
          "
        >
          {conference.title}
        </h3>

        {/* Date and venue micro-widgets */}
        <div
          className="
            mt-5 grid gap-3
            border-y border-slate-100
            py-4 text-[12px]
            text-slate-600
            sm:grid-cols-2 sm:text-[13px]
          "
        >
          <div className="flex items-center gap-2.5">
            <span
              className="
                flex h-8 w-8
                shrink-0 items-center
                justify-center rounded-xl
                bg-[#1d4ed8]/10
                text-[#1d4ed8]
                transition-all duration-300
                group-hover:bg-[#1d4ed8]
                group-hover:text-white
                group-hover:shadow-[0_0_20px_rgba(29,78,216,0.5)]
              "
            >
              <FiCalendar aria-hidden="true" />
            </span>

            <span className="leading-6 font-semibold text-slate-800">
              {conference.date}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span
              className="
                flex h-8 w-8
                shrink-0 items-center
                justify-center rounded-xl
                bg-[#1d4ed8]/10
                text-[#1d4ed8]
                transition-all duration-300
                group-hover:bg-[#1d4ed8]
                group-hover:text-white
                group-hover:shadow-[0_0_20px_rgba(29,78,216,0.5)]
              "
            >
              <FiMapPin aria-hidden="true" />
            </span>

            <span className="leading-6 font-semibold text-slate-800">
              {conference.venue}
            </span>
          </div>
        </div>

        <p
          className="
            mt-5 flex-1
            text-[14px] leading-7
            text-slate-600
            sm:text-[15px]
          "
        >
          {conference.description}
        </p>

        {/* Registration button */}
        {conference.registrationLink ? (
          <Link
            href={conference.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              formal-button group/button mt-7
              inline-flex min-h-[48px]
              w-fit items-center
              justify-center gap-3
              rounded-xl px-7 py-3
              text-[11px] font-bold
              uppercase tracking-[0.12em]
              sm:text-[12px]
            "
          >
            <span>Register Now</span>

            <FiArrowRight
              aria-hidden="true"
              className="
                text-base
                transition-transform
                duration-300
                group-hover/button:translate-x-1.5
              "
            />
          </Link>
        ) : (
          <Link
            href="#register"
            className="
              formal-button group/button mt-7
              inline-flex min-h-[48px]
              w-fit items-center
              justify-center gap-3
              rounded-xl px-7 py-3
              text-[11px] font-bold
              uppercase tracking-[0.12em]
              sm:text-[12px]
            "
          >
            <span>Register Interest</span>

            <FiArrowRight
              aria-hidden="true"
              className="
                text-base
                transition-transform
                duration-300
                group-hover/button:translate-x-1.5
              "
            />
          </Link>
        )}
      </div>
    </motion.article>
  );
}

export default function Conference() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="conference"
      aria-labelledby="conference-heading"
      className="
        section-padding relative
        scroll-mt-24 overflow-hidden
        bg-[#f8fafc]
      "
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 top-16
          h-[480px] w-[480px]
          rounded-full bg-[#3b82f6]/[0.06]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 bottom-10
          h-[420px] w-[420px]
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-[2px] w-9
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
              Our Conferences
            </p>

            <span
              aria-hidden="true"
              className="
                h-[2px] w-9
                bg-gradient-to-l
                from-transparent to-[#1d4ed8]
              "
            />
          </div>

          <h2
            id="conference-heading"
            className="
              mt-5 font-serif text-[34px]
              font-bold leading-[1.1]
              text-[#060e1a]
              sm:text-[44px]
              lg:text-[52px]
            "
          >
            Diplomatic{" "}
            <span className="diplomatic-title-gradient">
              Experiences
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-[15px] leading-8
              text-slate-600
              sm:text-[16px]
            "
          >
            Explore conferences organized by Rajshahi University Model
            United Nations Association.
          </p>

          <div
            aria-hidden="true"
            className="
              mx-auto mt-7 h-px w-28
              bg-gradient-to-r
              from-transparent
              via-[#3b82f6]
              to-transparent
            "
          />
        </motion.div>

        {/* Conference cards */}
        <div
          className="
            mt-12 grid items-stretch
            gap-7 md:grid-cols-2
            lg:mt-16 lg:gap-8
          "
        >
          {conferences.map((conference, index) => (
            <ConferenceCard
              key={conference.id}
              conference={conference}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
