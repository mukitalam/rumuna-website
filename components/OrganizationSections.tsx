"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiAward, FiBookOpen, FiClock, FiUsers } from "react-icons/fi";

type Member = {
  name: string;
  position: string;
  image: string;
  tenure?: string;
};

const executiveMembers: Member[] = [
  {
    name: "Arafat Rahman",
    position: "Director of Programs",
    tenure: "2025–2026",
    image: "/members/executive-1.jpg",
  },
  {
    name: "Maliha Tasnim",
    position: "Director of Communications",
    tenure: "2025–2026",
    image: "/members/executive-2.jpg",
  },
  {
    name: "Tanvir Ahmed",
    position: "Director of Finance",
    tenure: "2025–2026",
    image: "/members/executive-3.jpg",
  },
];

const advisors: Member[] = [
  {
    name: "Dr. Md. Hasan Ali",
    position: "Faculty Advisor",
    image: "/members/advisor-1.jpg",
  },
  {
    name: "Dr. Nusrat Jahan",
    position: "Faculty Moderator",
    image: "/members/advisor-2.jpg",
  },
];

const formerLeaders: Member[] = [
  {
    name: "Sakib Mahmud",
    position: "Former President",
    tenure: "2023–2024",
    image: "/members/former-1.jpg",
  },
  {
    name: "Raisa Tabassum",
    position: "Former Secretary General",
    tenure: "2023–2024",
    image: "/members/former-2.jpg",
  },
  {
    name: "Fahim Hossain",
    position: "Former President",
    tenure: "2022–2023",
    image: "/members/former-3.jpg",
  },
];

type SectionHeadingProps = {
  label: string;
  title: string;
  highlightedTitle: string;
  description: string;
  headingId: string;
  light?: boolean;
};

function SectionHeading({
  label,
  title,
  highlightedTitle,
  description,
  headingId,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="flex items-center justify-center gap-3">
        <span
          aria-hidden="true"
          className="h-[2px] w-9 bg-gradient-to-r from-transparent to-[#C8A443]"
        />

        <p
          className={`text-xs font-bold uppercase tracking-[0.22em] sm:text-sm ${
            light ? "text-[#E2C66E]" : "text-[#9F7B20]"
          }`}
        >
          {label}
        </p>

        <span
          aria-hidden="true"
          className="h-[2px] w-9 bg-gradient-to-r from-[#C8A443] to-transparent"
        />
      </div>

      <h2
        id={headingId}
        className={`mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-[56px] ${
          light ? "text-white" : "text-[#071A33]"
        }`}
      >
        {title}{" "}
        <span className="bg-gradient-to-r from-[#9F7B20] via-[#C8A443] to-[#E2C66E] bg-clip-text text-transparent">
          {highlightedTitle}
        </span>
      </h2>

      <p
        className={`mx-auto mt-6 max-w-2xl text-[15px] leading-7 sm:text-base sm:leading-8 ${
          light ? "text-white/65" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

type MemberCardProps = Member & {
  index: number;
  dark?: boolean;
  reduceMotion: boolean | null;
};

function MemberCard({
  name,
  position,
  image,
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
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.1,
        ease: "easeOut",
      }}
      className={`group relative overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
        dark
          ? "border-white/10 bg-white/[0.06] shadow-[0_18px_55px_rgba(0,0,0,0.22)] hover:border-[#C8A443]/50"
          : "border-slate-200 bg-white shadow-[0_16px_45px_rgba(7,26,51,0.09)] hover:border-[#C8A443]/50 hover:shadow-[0_24px_60px_rgba(7,26,51,0.16)]"
      }`}
    >
      {/* Member image */}
      <div className="relative aspect-[4/4.3] overflow-hidden bg-slate-200">
        <Image
          src={image}
          alt={`${name}, ${position}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/10 to-transparent" />

        <div
          aria-hidden="true"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-[#E2C66E]/30 bg-[#071A33]/70 text-xs font-bold text-[#E2C66E] backdrop-blur-md"
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2C66E]">
            {position}
          </p>

          <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-white sm:text-[27px]">
            {name}
          </h3>

          <div
            aria-hidden="true"
            className="mt-4 h-[2px] w-10 bg-[#C8A443] transition-all duration-500 group-hover:w-20"
          />
        </div>
      </div>

      {/* Member information */}
      <div
        className={`flex min-h-[92px] items-center justify-between border-b-4 border-[#C8A443] px-6 py-5 ${
          dark ? "bg-[#0B2342]" : "bg-white"
        }`}
      >
        <div>
          <p
            className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
              dark ? "text-white/40" : "text-slate-400"
            }`}
          >
            {tenure ? "Serving Tenure" : "Leadership Role"}
          </p>

          <p
            className={`mt-1 text-sm font-bold ${
              dark ? "text-white" : "text-[#071A33]"
            }`}
          >
            {tenure ?? position}
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C8A443]/30 bg-[#C8A443]/10 text-[#C8A443]">
          {tenure ? (
            <FiClock aria-hidden="true" />
          ) : (
            <FiAward aria-hidden="true" />
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function OrganizationSections() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Executive Committee */}
      <section
        id="executive"
        aria-labelledby="executive-heading"
        className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C8A443]/[0.07] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-48 bottom-10 h-[460px] w-[460px] rounded-full bg-[#173B68]/[0.06] blur-3xl"
        />

        <div className="section-container relative z-10">
          <SectionHeading
            label="Executive Committee"
            title="Working Team of"
            highlightedTitle="RUMUNA"
            description="Meet the dedicated executive members working together to advance diplomacy, leadership and meaningful youth engagement."
            headingId="executive-heading"
          />

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {executiveMembers.map((member, index) => (
              <MemberCard
                key={member.name}
                {...member}
                index={index}
                reduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          <div className="relative mt-14 overflow-hidden bg-[#071A33] shadow-[0_25px_65px_rgba(7,26,51,0.2)] lg:mt-16 lg:grid lg:grid-cols-[0.7fr_1.3fr]">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#C8A443]/15"
            />

            <div className="relative flex items-center justify-center bg-[#C8A443] p-8 text-center sm:p-10 lg:p-12">
              <div>
                <FiUsers
                  aria-hidden="true"
                  className="mx-auto mb-4 text-4xl text-[#071A33]"
                />

                <p className="font-serif text-5xl font-bold text-[#071A33] sm:text-6xl">
                  Lead
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-[#071A33]/70">
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
                The executive committee creates opportunities for members to
                learn, collaborate and contribute through conferences,
                workshops, diplomatic initiatives and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section
        id="faculty-advisors"
        aria-labelledby="advisors-heading"
        className="relative scroll-mt-24 overflow-hidden bg-[#071A33] py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,164,67,0.12),transparent_32%)]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-[#C8A443]/10"
        />

        <div
          aria-hidden="true"
          className="absolute -right-10 top-36 h-44 w-44 rounded-full border border-[#C8A443]/20"
        />

        <div className="section-container relative z-10">
          <SectionHeading
            label="Faculty Advisors"
            title="Guidance Behind Our"
            highlightedTitle="Journey"
            description="Our respected faculty advisors provide academic direction, institutional guidance and valuable mentorship to the association."
            headingId="advisors-heading"
            light
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-7 sm:grid-cols-2 lg:mt-16">
            {advisors.map((advisor, index) => (
              <MemberCard
                key={advisor.name}
                {...advisor}
                index={index}
                dark
                reduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl items-start gap-4 border-l-4 border-[#C8A443] bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
            <FiBookOpen
              aria-hidden="true"
              className="mt-1 shrink-0 text-2xl text-[#E2C66E]"
            />

            <p className="text-sm leading-7 text-white/65 sm:text-[15px]">
              Through their knowledge and experience, our advisors help ensure
              that every RUMUNA initiative maintains academic integrity,
              professional excellence and lasting institutional value.
            </p>
          </div>
        </div>
      </section>

      {/* Former Leaders */}
      <section
        id="former-leaders"
        aria-labelledby="former-leaders-heading"
        className="relative scroll-mt-24 overflow-hidden bg-[#FBF8EF] py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-44 w-44 border-b border-r border-[#C8A443]/20 sm:h-60 sm:w-60"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-44 w-44 border-l border-t border-[#C8A443]/20 sm:h-60 sm:w-60"
        />

        <div className="section-container relative z-10">
          <SectionHeading
            label="Former Leaders"
            title="Legacy of"
            highlightedTitle="Leadership"
            description="Honouring the former leaders whose vision, dedication and service helped shape the continuing journey of RUMUNA."
            headingId="former-leaders-heading"
          />

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {formerLeaders.map((leader, index) => (
              <MemberCard
                key={`${leader.name}-${leader.tenure}`}
                {...leader}
                index={index}
                reduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}