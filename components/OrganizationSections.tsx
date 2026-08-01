"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiClock,
  FiUsers,
} from "react-icons/fi";

import {
  executiveMembers,
  facultyAdvisors,
  formerLeaders,
  type OrganizationMember,
} from "@/data";

interface MemberCardProps extends OrganizationMember {
  index: number;
  dark?: boolean;
  reduceMotion: boolean;
}

function MemberCard({
  name,
  position,
  image,
  department,
  tenure,
  index,
  dark = false,
  reduceMotion,
}: MemberCardProps) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: reduceMotion ? 0 : index * 0.1,
        ease: "easeOut",
      }}
      className={`group overflow-hidden border shadow-lg transition-all duration-500 hover:-translate-y-2 ${
        dark
          ? "border-white/10 bg-[#0B2342] shadow-black/20"
          : "border-slate-200 bg-white shadow-[#071A33]/10"
      }`}
    >
      {/* Member image */}
      <div
        className={`relative aspect-[4/4.7] overflow-hidden ${
          dark ? "bg-[#102B4E]" : "bg-slate-100"
        }`}
      >
        <Image
          src={image}
          alt={`${name} — ${position}`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071A33]/70 to-transparent"
        />

        <span className="absolute bottom-4 left-4 bg-[#C8A443] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#071A33]">
          {position}
        </span>
      </div>

      {/* Member information */}
      <div className="border-b-4 border-[#C8A443] p-6">
        <h3
          className={`font-serif text-2xl font-bold leading-snug ${
            dark ? "text-white" : "text-[#071A33]"
          }`}
        >
          {name}
        </h3>

        <p
          className={`mt-2 text-xs font-bold uppercase tracking-[0.16em] ${
            dark ? "text-[#E2C66E]" : "text-[#9F7B20]"
          }`}
        >
          {position}
        </p>

        {department && (
          <div
            className={`mt-5 flex items-start gap-3 border-t pt-4 text-sm leading-6 ${
              dark
                ? "border-white/10 text-white/60"
                : "border-slate-200 text-slate-500"
            }`}
          >
            <FiBookOpen
              aria-hidden="true"
              className="mt-1 shrink-0 text-[#C8A443]"
            />

            <p>{department}</p>
          </div>
        )}

        {tenure && (
          <div
            className={`mt-3 flex items-center gap-3 text-sm ${
              dark ? "text-white/55" : "text-slate-500"
            }`}
          >
            <FiClock
              aria-hidden="true"
              className="shrink-0 text-[#C8A443]"
            />

            <p>Tenure: {tenure}</p>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function OrganizationSections() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main>
      {/* Main heading */}
      <section
        id="organization"
        aria-labelledby="organization-heading"
        className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
      >
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="absolute -left-48 top-20 h-[440px] w-[440px] rounded-full bg-[#C8A443]/[0.07] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-[#173B68]/[0.06] blur-3xl"
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#C8A443]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9F7B20] sm:text-sm">
                RUMUNA Leadership
              </p>

              <span
                aria-hidden="true"
                className="h-[2px] w-10 bg-gradient-to-r from-[#C8A443] to-transparent"
              />
            </div>

            <h1
              id="organization-heading"
              className="mt-5 font-serif text-4xl font-bold leading-tight text-[#071A33] sm:text-5xl lg:text-[56px]"
            >
              Meet Our{" "}
              <span className="bg-gradient-to-r from-[#9F7B20] via-[#C8A443] to-[#E2C66E] bg-clip-text text-transparent">
                Organization
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              Meet the advisors, executive members and former leaders whose
              dedication continues to strengthen RUMUNA’s institutional
              journey.
            </p>
          </motion.div>

          {/* Executive Members */}
          <div
            id="executive-members"
            className="scroll-mt-28 pt-16 lg:pt-20"
          >
            <div className="flex flex-col gap-4 border-l-4 border-[#C8A443] pl-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9F7B20]">
                  Current Leadership
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[#071A33] sm:text-4xl">
                  Executive Members
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center border border-[#C8A443]/30 bg-[#C8A443]/10 text-xl text-[#9F7B20]">
                <FiUsers aria-hidden="true" />
              </div>
            </div>

            {executiveMembers.length > 0 ? (
              <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {executiveMembers.map((member, index) => (
                  <MemberCard
                    key={member.id}
                    {...member}
                    index={index}
                    reduceMotion={shouldReduceMotion}
                  />
                ))}
              </div>
            ) : (
              <p className="mt-10 border border-slate-200 bg-white p-6 text-center text-sm text-slate-500">
                Executive member information will be added soon.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section
        id="faculty-advisors"
        aria-labelledby="faculty-advisors-heading"
        className="relative scroll-mt-24 overflow-hidden bg-[#071A33] py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(200,164,67,0.14),transparent_32%)]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#C8A443]/10"
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 border-l-4 border-[#C8A443] pl-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E2C66E]">
                Guidance and Mentorship
              </p>

              <h2
                id="faculty-advisors-heading"
                className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl"
              >
                Faculty Advisors
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center border border-[#C8A443]/35 bg-[#C8A443]/10 text-xl text-[#E2C66E]">
              <FiBookOpen aria-hidden="true" />
            </div>
          </motion.div>

          {facultyAdvisors.length > 0 ? (
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {facultyAdvisors.map((advisor, index) => (
                <MemberCard
                  key={advisor.id}
                  {...advisor}
                  index={index}
                  dark
                  reduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          ) : (
            <p className="mt-10 border border-white/10 bg-white/[0.05] p-6 text-center text-sm text-white/55">
              Faculty advisor information will be added soon.
            </p>
          )}
        </div>
      </section>

      {/* Former Leaders */}
      <section
        id="former-leaders"
        aria-labelledby="former-leaders-heading"
        className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute -bottom-44 -left-40 h-[420px] w-[420px] rounded-full bg-[#C8A443]/[0.07] blur-3xl"
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 border-l-4 border-[#C8A443] pl-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9F7B20]">
                Our Continuing Legacy
              </p>

              <h2
                id="former-leaders-heading"
                className="mt-2 font-serif text-3xl font-bold text-[#071A33] sm:text-4xl"
              >
                Former Leaders
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center border border-[#C8A443]/30 bg-[#C8A443]/10 text-xl text-[#9F7B20]">
              <FiAward aria-hidden="true" />
            </div>
          </motion.div>

          {formerLeaders.length > 0 ? (
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {formerLeaders.map((leader, index) => (
                <MemberCard
                  key={leader.id}
                  {...leader}
                  index={index}
                  reduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          ) : (
            <p className="mt-10 border border-slate-200 bg-[#F8FAFC] p-6 text-center text-sm text-slate-500">
              Former leader information will be added soon.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}