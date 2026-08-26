"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiBriefcase, FiClock } from "react-icons/fi";
import { alumniMembers, type AlumniMember } from "@/data";

function AlumniCard({
  member,
  index,
  shouldReduceMotion,
}: {
  member: AlumniMember;
  index: number;
  shouldReduceMotion: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(member.image);
  const fallbackImage = `/executive-${(index % 4) + 1}.jpg`;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="formal-card group overflow-hidden rounded-2xl border border-white/10 bg-[#0b192e] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#3b82f6]/50 hover:shadow-[0_25px_60px_rgba(29,78,216,0.2)]"
    >
      <div className="relative aspect-[4/4.5] overflow-hidden bg-[#071426]">
        <Image
          src={imgSrc}
          alt={member.name}
          fill
          onError={() => setImgSrc(fallbackImage)}
          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, 33vw"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b192e] to-transparent"
        />
      </div>

      <div className="border-b-4 border-[#1d4ed8] p-6 text-white">
        <h3 className="font-serif text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#93c5fd]">
          {member.name}
        </h3>

        <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#93c5fd]">
          {member.formerPosition}
        </p>

        <p className="mt-4 flex items-center gap-2 text-xs text-slate-300">
          <FiClock aria-hidden="true" className="text-[#3b82f6]" />
          <span>Session: {member.session}</span>
        </p>

        {member.currentRole && (
          <div className="mt-3 flex items-start gap-2.5 text-xs leading-5 text-slate-300">
            <FiBriefcase
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[#3b82f6]"
            />

            <p>
              {member.currentRole}
              {member.organization ? ` at ${member.organization}` : ""}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Alumni() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="alumni"
      aria-labelledby="alumni-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#071426] py-20 sm:py-24 lg:py-28 text-white"
    >
      {/* Ambient background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_40%)]"
      />

      {/* Gold aurora orb for warm-cool contrast */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-[10%] bottom-[15%]
          h-[300px] w-[300px] rounded-full
          bg-[radial-gradient(circle,rgba(212,175,55,0.13)_0%,rgba(212,175,55,0.04)_50%,transparent_70%)]
          blur-3xl animate-aurora-float
        "
      />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#3b82f6]"
            />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd] sm:text-sm">
              RUMUNA Alumni
            </p>
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-[#3b82f6] to-transparent"
            />
          </div>

          <h2
            id="alumni-heading"
            className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-[56px]"
          >
            Our Continuing{" "}
            <span className="bg-gradient-to-r from-[#93c5fd] via-[#3b82f6] to-[#e2c66e] bg-clip-text text-transparent">
              Legacy
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-slate-300 sm:text-base">
            Celebrating former leaders and members who continue to represent the
            values of RUMUNA.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {alumniMembers.map((member, index) => (
            <AlumniCard
              key={member.id}
              member={member}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
