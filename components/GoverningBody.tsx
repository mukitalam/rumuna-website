"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiAward, FiClock } from "react-icons/fi";
import { governingBodyMembers } from "@/data";

export default function GoverningBody() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="governing-body"
      aria-labelledby="governing-heading"
      className="relative scroll-mt-24 bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9F7B20]">
            Our Leadership
          </p>

          <h2
            id="governing-heading"
            className="mt-4 font-serif text-4xl font-bold text-[#071A33] sm:text-5xl"
          >
            Governing Body
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Meet the dedicated leaders guiding RUMUNA’s activities and
            institutional journey.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {governingBodyMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 30 }
              }
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              className="group overflow-hidden border border-slate-200 bg-white shadow-lg transition hover:-translate-y-2"
            >
              <div className="relative aspect-[4/4.6] overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              <div className="border-b-4 border-[#C8A443] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#071A33]">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9F7B20]">
                      {member.position}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C8A443]/30 bg-[#C8A443]/10 text-[#C8A443]">
                    <FiAward aria-hidden="true" />
                  </div>
                </div>

                {member.department && (
                  <p className="mt-4 text-sm text-slate-500">
                    {member.department}
                  </p>
                )}

                <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <FiClock aria-hidden="true" />
                  Tenure: {member.tenure}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}