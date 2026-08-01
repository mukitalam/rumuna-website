"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const members = [
  {
    name: "Md. Abdullah Al Noman",
    position: "President",
    image: "/members/president.jpg",
  },
  {
    name: "Nusrat Jahan",
    position: "Vice President",
    image: "/members/vice-president.jpg",
  },
  {
    name: "Samiul Islam",
    position: "Secretary General",
    image: "/members/secretary-general.jpg",
  },
  {
    name: "Farhana Rahman",
    position: "Deputy Secretary General",
    image: "/members/deputy-secretary.jpg",
  },
  {
    name: "Tanvir Ahmed",
    position: "Director of Finance",
    image: "/members/finance.jpg",
  },
  {
    name: "Maliha Tasnim",
    position: "Director of Communications",
    image: "/members/communications.jpg",
  },
];

export default function GoverningBody() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="governing-body"
      aria-labelledby="governing-body-heading"
      className="relative overflow-hidden bg-[#F8FAFC] px-5 py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute -left-44 top-24 h-[420px] w-[420px] rounded-full bg-[#C8A443]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-16 h-[460px] w-[460px] rounded-full bg-[#173B68]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-40 w-40 border-b border-r border-[#C8A443]/20 sm:h-56 sm:w-56"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-48 w-48 border-l border-t border-[#C8A443]/20 sm:h-64 sm:w-64"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#C8A443]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9F7B20] sm:text-sm">
              Governing Body
            </p>

            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-gradient-to-r from-[#C8A443] to-transparent"
            />
          </div>

          <h2
            id="governing-body-heading"
            className="mt-5 font-serif text-4xl font-bold leading-tight text-[#071A33] sm:text-5xl lg:text-[56px]"
          >
            Leadership for{" "}
            <span className="bg-gradient-to-r from-[#9F7B20] via-[#C8A443] to-[#E2C66E] bg-clip-text text-transparent">
              Tenure 2025–2026
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
            Meet the dedicated leaders guiding RUMUNA through diplomacy,
            collaboration and a shared commitment to developing responsible
            global citizens.
          </p>
        </div>

        {/* Member cards */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {members.map((member, index) => (
            <motion.article
              key={`${member.name}-${member.position}`}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 30 }
              }
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(7,26,51,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A443]/50 hover:shadow-[0_25px_60px_rgba(7,26,51,0.15)]"
            >
              {/* Member image */}
              <div className="relative h-[340px] overflow-hidden bg-slate-200 sm:h-[380px]">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.position} of RUMUNA`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#041126]/95 via-[#071A33]/10 to-transparent"
                />

                {/* Member number */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 font-serif text-4xl font-bold text-white/30"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Image information */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#E2C66E]">
                    {member.position}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-white sm:text-[27px]">
                    {member.name}
                  </h3>

                  <div
                    aria-hidden="true"
                    className="mt-4 h-[2px] w-10 bg-[#C8A443] transition-all duration-500 group-hover:w-20"
                  />
                </div>
              </div>

              {/* Tenure information */}
              <div className="relative flex items-center justify-between border-b-4 border-[#C8A443] px-6 py-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Serving Tenure
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#071A33]">
                    2025–2026
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center border border-[#C8A443]/30 bg-[#C8A443]/10">
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 rotate-45 bg-[#C8A443]"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Leadership statement */}
        <div className="relative mt-14 overflow-hidden bg-[#071A33] shadow-[0_25px_65px_rgba(7,26,51,0.2)] lg:mt-16 lg:grid lg:grid-cols-[0.7fr_1.3fr]">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#C8A443]/15"
          />

          <div className="relative flex items-center justify-center bg-[#C8A443] p-8 text-center sm:p-10 lg:p-12">
            <div>
              <p className="font-serif text-5xl font-bold text-[#071A33] sm:text-6xl">
                Lead
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-[#071A33]/70 sm:text-sm">
                With Purpose
              </p>
            </div>
          </div>

          <div className="relative p-7 sm:p-10 lg:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E2C66E] sm:text-xs">
              Leadership at RUMUNA
            </p>

            <h3 className="mt-3 max-w-3xl font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Guiding Today’s Delegates into Tomorrow’s Global Leaders
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 sm:text-[15px]">
              The governing body creates opportunities for members to learn,
              collaborate and contribute through conferences, workshops,
              diplomatic initiatives and meaningful community engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}