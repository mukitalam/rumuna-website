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
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        ease: "easeOut" as const,
      }}
      className="
        group flex h-full flex-col
        overflow-hidden
        border border-slate-200/90
        bg-white
        shadow-[0_18px_50px_rgba(7,26,51,0.08)]
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-[#C8A443]/55
        hover:shadow-[0_26px_65px_rgba(7,26,51,0.14)]
      "
    >
      {/* Conference image */}
      <div
        className="
          relative aspect-[16/10]
          overflow-hidden bg-slate-200
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
            duration-700 ease-out
            group-hover:scale-[1.045]
          "
        />

        {/* Image overlay */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#071A33]/75
            via-[#071A33]/10
            to-transparent
          "
        />

        {/* Edition badge */}
        <span
          className="
            absolute left-5 top-5
            border-l-[3px]
            border-[#071A33]
            bg-[#D9B94E]
            px-4 py-2
            text-[10px] font-bold
            uppercase tracking-[0.16em]
            text-[#071A33]
            shadow-[0_10px_25px_rgba(0,0,0,0.16)]
            sm:left-6 sm:top-6
            sm:text-[11px]
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
          <p
            className="
              text-[9px] font-bold
              uppercase tracking-[0.2em]
              text-[#E2C66E]
              sm:text-[10px]
            "
          >
            Conference Theme
          </p>

          <p
            className="
              mt-1.5 max-w-lg
              text-[13px] font-semibold
              leading-5 text-white/90
              sm:text-sm
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
          p-5 sm:p-7
        "
      >
        <h3
          className="
            font-serif text-[24px]
            font-bold leading-[1.2]
            text-[#071A33]
            sm:text-[28px]
          "
        >
          {conference.title}
        </h3>

        {/* Date and venue */}
        <div
          className="
            mt-5 grid gap-3
            border-y border-slate-200
            py-4 text-[12px]
            text-slate-600
            sm:grid-cols-2 sm:text-[13px]
          "
        >
          <div className="flex items-start gap-2.5">
            <span
              className="
                mt-0.5 flex h-7 w-7
                shrink-0 items-center
                justify-center
                bg-[#C8A443]/15
                text-[#9F7B20]
              "
            >
              <FiCalendar aria-hidden="true" />
            </span>

            <span className="leading-6">
              {conference.date}
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <span
              className="
                mt-0.5 flex h-7 w-7
                shrink-0 items-center
                justify-center
                bg-[#C8A443]/15
                text-[#9F7B20]
              "
            >
              <FiMapPin aria-hidden="true" />
            </span>

            <span className="leading-6">
              {conference.venue}
            </span>
          </div>
        </div>

        <p
          className="
            mt-5 flex-1
            text-[13px] leading-7
            text-slate-600
            sm:text-[14px]
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
              group/button mt-7
              inline-flex min-h-[50px]
              w-fit items-center
              justify-center gap-3
              bg-[#071A33]
              px-6 py-3
              text-[11px] font-bold
              uppercase tracking-[0.13em]
              text-white
              shadow-[0_12px_28px_rgba(7,26,51,0.18)]
              transition-all duration-300
              hover:bg-[#C8A443]
              hover:text-[#071A33]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C8A443]
              focus-visible:ring-offset-4
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
              group/button mt-7
              inline-flex min-h-[50px]
              w-fit items-center
              justify-center gap-3
              bg-[#071A33]
              px-6 py-3
              text-[11px] font-bold
              uppercase tracking-[0.13em]
              text-white
              shadow-[0_12px_28px_rgba(7,26,51,0.18)]
              transition-all duration-300
              hover:bg-[#C8A443]
              hover:text-[#071A33]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C8A443]
              focus-visible:ring-offset-4
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

      {/* Bottom gold line */}
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

export default function Conference() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="conference"
      aria-labelledby="conference-heading"
      className="
        section-padding relative
        scroll-mt-24 overflow-hidden
        bg-[#F8FAFC]
      "
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 top-16
          h-[420px] w-[420px]
          rounded-full bg-[#C8A443]/[0.07]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 bottom-10
          h-[380px] w-[380px]
          rounded-full bg-[#173B68]/[0.05]
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-[2px] w-9
                bg-gradient-to-r
                from-transparent to-[#C8A443]
              "
            />

            <p
              className="
                text-[10px] font-bold uppercase
                tracking-[0.24em] text-[#9F7B20]
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
                from-transparent to-[#C8A443]
              "
            />
          </div>

          <h2
            id="conference-heading"
            className="
              mt-5 font-serif text-[34px]
              font-bold leading-[1.1]
              text-[#071A33]
              sm:text-[44px]
              lg:text-[52px]
            "
          >
            Diplomatic{" "}
            <span className="gold-gradient-text">
              Experiences
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-[14px] leading-7
              text-slate-600
              sm:text-[15px] sm:leading-8
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
              via-[#C8A443]
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