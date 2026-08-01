"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiBriefcase, FiClock } from "react-icons/fi";
import { alumniMembers } from "@/data";

export default function Alumni() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="alumni"
      aria-labelledby="alumni-heading"
      className="relative scroll-mt-24 bg-[#071A33] py-20 sm:py-24 lg:py-28"
    >
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E2C66E]">
            RUMUNA Alumni
          </p>

          <h2
            id="alumni-heading"
            className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl"
          >
            Our Continuing Legacy
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
            Celebrating former leaders and members who continue to represent the
            values of RUMUNA.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {alumniMembers.map((member, index) => (
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
              className="group overflow-hidden border border-white/10 bg-[#0B2342]"
            >
              <div className="relative aspect-[4/4.5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              <div className="border-b-4 border-[#C8A443] p-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E2C66E]">
                  {member.formerPosition}
                </p>

                <p className="mt-4 flex items-center gap-2 text-sm text-white/55">
                  <FiClock aria-hidden="true" />
                  Session: {member.session}
                </p>

                {member.currentRole && (
                  <div className="mt-4 flex items-start gap-2 text-sm leading-6 text-white/60">
                    <FiBriefcase
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[#E2C66E]"
                    />

                    <p>
                      {member.currentRole}
                      {member.organization
                        ? ` at ${member.organization}`
                        : ""}
                    </p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}