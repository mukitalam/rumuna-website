"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiMapPin } from "react-icons/fi";
import { conferences } from "@/data";

export default function Conference() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="conference"
      aria-labelledby="conference-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9F7B20]">
            Our Conferences
          </p>

          <h2
            id="conference-heading"
            className="mt-4 font-serif text-4xl font-bold text-[#071A33] sm:text-5xl"
          >
            Diplomatic Experiences
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Explore conferences organized by Rajshahi University Model United
            Nations Association.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16">
          {conferences.map((conference, index) => (
            <motion.article
              key={conference.id}
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
              }}
              className="group overflow-hidden border border-slate-200 bg-white shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={conference.image}
                  alt={conference.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <span className="absolute left-5 top-5 bg-[#C8A443] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#071A33]">
                  {conference.edition}
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9F7B20]">
                  {conference.theme}
                </p>

                <h3 className="mt-3 font-serif text-2xl font-bold text-[#071A33]">
                  {conference.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <FiCalendar aria-hidden="true" />
                    {conference.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiMapPin aria-hidden="true" />
                    {conference.venue}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {conference.description}
                </p>

                {conference.registrationLink && (
                  <Link
                    href={conference.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-[#9F7B20]"
                  >
                    Register Now
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}