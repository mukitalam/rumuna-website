"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [imgSrc, setImgSrc] = useState(image);
  const fallbackImage = `/executive-${(index % 4) + 1}.jpg`;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={
        reduceMotion ? undefined : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`formal-card group overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 hover:-translate-y-2 ${
        dark
          ? "border-white/10 bg-[#0b192e] shadow-black/30"
          : "border-slate-200/90 bg-white shadow-[0_12px_35px_rgba(7,20,38,0.06)]"
      }`}
    >
      {/* Member image */}
      <div
        className={`relative aspect-[4/4.7] overflow-hidden ${
          dark ? "bg-[#071426]" : "bg-slate-100"
        }`}
      >
        <Image
          src={imgSrc}
          alt={`${name} — ${position}`}
          fill
          onError={() => setImgSrc(fallbackImage)}
          className="
            object-cover object-top
            transition-transform duration-700
            ease-out group-hover:scale-[1.05]
          "
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute inset-x-0 bottom-0
            h-28 bg-gradient-to-t
            from-[#060e1a] via-[#071426]/80 to-transparent
          "
        />

        <span
          className="
            absolute bottom-4 left-4
            rounded-full
            border border-[#d4af37]/40
            ring-1 ring-[#d4af37]/15
            bg-[#060e1a]/92 px-3.5 py-1.5
            text-[10px] font-bold uppercase
            tracking-[0.14em] text-[#f3e5ab]
            backdrop-blur-md
            shadow-[0_6px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]
          "
        >
          {position}
        </span>
      </div>

      {/* Member information */}
      <div className="border-b-4 border-[#1d4ed8] p-6">
        <h3
          className={`font-serif text-2xl font-bold leading-snug ${
            dark ? "text-white" : "text-[#071426]"
          }`}
        >
          {name}
        </h3>

        <p
          className={`mt-1.5 text-xs font-bold uppercase tracking-[0.16em] ${
            dark ? "text-[#93c5fd]" : "text-[#1d4ed8]"
          }`}
        >
          {position}
        </p>

        {department && (
          <div
            className={`mt-5 flex items-start gap-3 border-t pt-4 text-sm leading-6 ${
              dark
                ? "border-white/10 text-slate-300"
                : "border-slate-100 text-slate-600"
            }`}
          >
            <FiBookOpen
              aria-hidden="true"
              className="mt-1 shrink-0 text-[#3b82f6]"
            />

            <p>{department}</p>
          </div>
        )}

        {tenure && (
          <div
            className={`mt-3 flex items-center gap-3 text-sm ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <FiClock
              aria-hidden="true"
              className="shrink-0 text-[#3b82f6]"
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
    <>
      {/* Main organization section */}
      <section
        id="organization"
        aria-labelledby="organization-heading"
        className="
          relative scroll-mt-24 overflow-hidden
          bg-[#f8fafc] py-20
          sm:py-24 lg:py-28
        "
      >
        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="
            absolute -left-48 top-20
            h-[440px] w-[440px]
            rounded-full bg-[#3b82f6]/[0.06]
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute -right-48 bottom-0
            h-[460px] w-[460px]
            rounded-full bg-[#1d4ed8]/[0.05]
            blur-3xl
          "
        />

        {/* Grid texture overlay for premium depth */}
        <div aria-hidden="true" className="grid-texture-overlay" />

        <div className="section-container relative z-10">
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3">
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
                  text-xs font-bold uppercase
                  tracking-[0.22em] text-[#1d4ed8]
                  sm:text-sm
                "
              >
                RUMUNA Leadership
              </p>

              <span
                aria-hidden="true"
                className="
                  h-[2px] w-10
                  bg-gradient-to-r
                  from-[#1d4ed8] to-transparent
                "
              />
            </div>

            <h2
              id="organization-heading"
              className="
                mt-5 font-serif text-4xl
                font-bold leading-tight text-[#071426]
                sm:text-5xl lg:text-[56px]
              "
            >
              Meet Our{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#1d4ed8]
                  via-[#3b82f6]
                  to-[#d4af37]
                  bg-clip-text text-transparent
                "
              >
                Organization
              </span>
            </h2>

            <p
              className="
                mx-auto mt-6 max-w-2xl
                text-[15px] leading-8 text-slate-600
                sm:text-base
              "
            >
              Meet the advisors, executive members and former leaders whose
              dedication continues to strengthen RUMUNA&apos;s institutional
              journey.
            </p>
          </motion.div>

          {/* Executive Members */}
          <div
            id="executive-members"
            className="scroll-mt-28 pt-16 lg:pt-20"
          >
            <div
              className="
                flex flex-col gap-4
                border-l-4 border-[#1d4ed8] pl-5
                sm:flex-row sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs font-bold uppercase
                    tracking-[0.2em] text-[#1d4ed8]
                  "
                >
                  Current Leadership
                </p>

                <h3
                  className="
                    mt-2 font-serif text-3xl
                    font-bold text-[#071426]
                    sm:text-4xl
                  "
                >
                  Executive Members
                </h3>
              </div>

              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-xl border
                  border-[#3b82f6]/30
                  bg-[#1d4ed8]/10
                  text-xl text-[#1d4ed8]
                "
              >
                <FiUsers aria-hidden="true" />
              </div>
            </div>

            {executiveMembers.length > 0 ? (
              <div
                className="
                  mt-10 grid gap-7
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
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
              <p
                className="
                  mt-10 rounded-xl border border-slate-200
                  bg-white p-6 text-center
                  text-sm text-slate-500
                "
              >
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
        className="
          relative scroll-mt-24 overflow-hidden
          bg-[#071426] py-20
          sm:py-24 lg:py-28
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.14),transparent_35%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute -right-32 -top-32
            h-96 w-96 rounded-full
            border border-white/10
          "
        />

        {/* Second ambient orb for richer depth */}
        <div
          aria-hidden="true"
          className="
            absolute left-[20%] bottom-[-80px]
            h-[320px] w-[320px] rounded-full
            bg-[radial-gradient(circle,rgba(29,78,216,0.18)_0%,transparent_65%)]
            blur-3xl animate-aurora-float
          "
        />

        <div className="section-container relative z-10">
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex flex-col gap-4
              border-l-4 border-[#3b82f6] pl-5
              sm:flex-row sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.2em] text-[#93c5fd]
                "
              >
                Guidance and Mentorship
              </p>

              <h2
                id="faculty-advisors-heading"
                className="
                  mt-2 font-serif text-3xl
                  font-bold text-white
                  sm:text-4xl
                "
              >
                Faculty Advisors
              </h2>
            </div>

            <div
              className="
                flex h-12 w-12 items-center
                justify-center rounded-xl border
                border-white/15
                bg-white/5
                text-xl text-[#93c5fd]
              "
            >
              <FiBookOpen aria-hidden="true" />
            </div>
          </motion.div>

          {facultyAdvisors.length > 0 ? (
            <div
              className="
                mt-10 grid gap-7
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
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
            <p
              className="
                mt-10 rounded-xl border border-white/10
                bg-white/[0.04] p-6
                text-center text-sm text-slate-400
              "
            >
              Faculty advisor information will be added soon.
            </p>
          )}
        </div>
      </section>

      {/* Former Leaders */}
      <section
        id="former-leaders"
        aria-labelledby="former-leaders-heading"
        className="
          relative scroll-mt-24 overflow-hidden
          bg-white py-20
          sm:py-24 lg:py-28
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute -bottom-44 -left-40
            h-[420px] w-[420px]
            rounded-full bg-[#3b82f6]/[0.05]
            blur-3xl
          "
        />

        <div className="section-container relative z-10">
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex flex-col gap-4
              border-l-4 border-[#1d4ed8] pl-5
              sm:flex-row sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.2em] text-[#1d4ed8]
                "
              >
                Our Continuing Legacy
              </p>

              <h2
                id="former-leaders-heading"
                className="
                  mt-2 font-serif text-3xl
                  font-bold text-[#071426]
                  sm:text-4xl
                "
              >
                Former Leaders
              </h2>
            </div>

            <div
              className="
                flex h-12 w-12 items-center
                justify-center rounded-xl border
                border-[#3b82f6]/30
                bg-[#1d4ed8]/10
                text-xl text-[#1d4ed8]
              "
            >
              <FiAward aria-hidden="true" />
            </div>
          </motion.div>

          {formerLeaders.length > 0 ? (
            <div
              className="
                mt-10 grid gap-7
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
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
            <p
              className="
                mt-10 rounded-xl border border-slate-200
                bg-[#f8fafc] p-6
                text-center text-sm text-slate-500
              "
            >
              Former leader information will be added soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
