"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiFacebook,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const executives = [
  {
    name: "Member Name",
    position: "President",
    image: "/executive-1.jpg",
    email: "mailto:president@rumuna.org",
    facebook: "#",
    linkedin: "#",
  },
  {
    name: "Member Name",
    position: "General Secretary",
    image: "/executive-2.jpg",
    email: "mailto:secretary@rumuna.org",
    facebook: "#",
    linkedin: "#",
  },
  {
    name: "Member Name",
    position: "Vice President",
    image: "/executive-3.jpg",
    email: "mailto:vicepresident@rumuna.org",
    facebook: "#",
    linkedin: "#",
  },
  {
    name: "Member Name",
    position: "Treasurer",
    image: "/executive-4.jpg",
    email: "mailto:treasurer@rumuna.org",
    facebook: "#",
    linkedin: "#",
  },
];

export default function Executive() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="governing-body"
      aria-labelledby="governing-body-heading"
      className="
        section-padding relative overflow-hidden
        bg-white
      "
    >
      {/* Decorative background ambient glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-44 top-16
          h-[400px] w-[400px] rounded-full
          bg-[#3b82f6]/[0.05] blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-48 bottom-10
          h-[450px] w-[450px] rounded-full
          bg-[#1d4ed8]/[0.04] blur-3xl
        "
      />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
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
              Governing Body
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
            id="governing-body-heading"
            className="
              mt-5 font-serif text-4xl
              font-bold leading-[1.08]
              text-[#071426]
              sm:text-5xl lg:text-[56px]
            "
          >
            Meet the Leaders Behind{" "}
            <span className="bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#d4af37] bg-clip-text text-transparent block sm:inline">
              Our Vision
            </span>
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-[15px] leading-8
              text-slate-600
              sm:text-base
            "
          >
            Our executive committee promotes leadership, diplomacy and
            meaningful global engagement while guiding the association
            with responsibility and purpose.
          </p>
        </div>

        {/* Executive cards Grid */}
        <div
          className="
            mt-12 grid gap-7
            sm:grid-cols-2
            lg:mt-16 lg:grid-cols-4
          "
        >
          {executives.map((member, index) => {
            const socialLinks = [
              {
                label: `Email ${member.name}`,
                href: member.email,
                icon: FiMail,
                external: false,
              },
              {
                label: `${member.name} on Facebook`,
                href: member.facebook,
                icon: FiFacebook,
                external: true,
              },
              {
                label: `${member.name} on LinkedIn`,
                href: member.linkedin,
                icon: FiLinkedin,
                external: true,
              },
            ];

            return (
              <motion.article
                key={`${member.name}-${member.position}`}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 30 }
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
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  formal-card group relative overflow-hidden rounded-2xl
                  border border-slate-200/80
                  bg-[#f8fafc]
                  shadow-[0_12px_35px_rgba(7,20,38,0.06)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#3b82f6]/50
                  hover:shadow-[0_25px_60px_rgba(29,78,216,0.15)]
                "
              >
                {/* Member image */}
                <div
                  className="
                    relative h-[330px]
                    overflow-hidden bg-[#071426]
                    sm:h-[350px]
                  "
                >
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.position} of RUMUNA`}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                    className="
                      object-cover object-top
                      transition-transform duration-1000
                      ease-out group-hover:scale-[1.06]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#071426]/90
                      via-[#071426]/15
                      to-transparent
                    "
                  />

                  {/* Member index watermark */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute right-5 top-5
                      font-serif text-4xl
                      font-bold text-white/20
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Social links */}
                  <div
                    className="
                      absolute bottom-5 left-0
                      flex w-full justify-center gap-2
                      opacity-100
                      transition-all duration-300
                      sm:translate-y-4 sm:opacity-0
                      sm:group-hover:translate-y-0
                      sm:group-hover:opacity-100
                      sm:group-focus-within:translate-y-0
                      sm:group-focus-within:opacity-100
                    "
                  >
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      if (social.href === "#") {
                        return (
                          <span
                            key={social.label}
                            aria-label={`${social.label} link unavailable`}
                            className="
                              flex h-11 w-11
                              cursor-not-allowed rounded-xl
                              items-center justify-center
                              border border-white/15
                              bg-white/80 text-[#071426]/40
                            "
                          >
                            <Icon aria-hidden="true" />
                          </span>
                        );
                      }

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          target={
                            social.external ? "_blank" : undefined
                          }
                          rel={
                            social.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="
                            flex h-11 w-11
                            items-center justify-center rounded-xl
                            border border-white/30
                            bg-white text-lg text-[#071426]
                            shadow-md
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-[#3b82f6]
                            hover:bg-[#1d4ed8]
                            hover:text-white
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-[#3b82f6]
                          "
                        >
                          <Icon aria-hidden="true" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Member information */}
                <div
                  className="
                    relative border-b-4
                    border-[#1d4ed8]
                    px-5 py-6 text-center
                  "
                >
                  <p
                    className="
                      relative text-[10px]
                      font-extrabold uppercase
                      tracking-[0.17em]
                      text-[#1d4ed8]
                      sm:text-xs
                    "
                  >
                    {member.position}
                  </p>

                  <h3
                    className="
                      relative mt-2 font-serif
                      text-xl font-bold
                      text-[#071426]
                      transition-colors duration-300
                      group-hover:text-[#1d4ed8]
                    "
                  >
                    {member.name}
                  </h3>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Committee button */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="#leadership-statement"
            className="
              formal-button group
              inline-flex min-h-12
              items-center justify-center gap-3 rounded-lg
              px-8 py-3.5 text-xs
              font-bold uppercase
              tracking-[0.11em]
              sm:text-[13px]
            "
          >
            <span>Explore Our Leadership</span>

            <FiArrowRight
              aria-hidden="true"
              className="
                text-base transition-transform
                duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </div>

        {/* Leadership statement */}
        <div
          id="leadership-statement"
          className="
            relative mt-14 scroll-mt-28
            overflow-hidden rounded-2xl bg-[#071426]
            shadow-[0_30px_70px_rgba(7,20,38,0.3)]
            lg:mt-16
            lg:grid lg:grid-cols-[0.75fr_1.25fr]
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute -right-20 -top-24
              h-64 w-64 rounded-full
              border border-white/10
            "
          />

          <div
            className="
              relative flex items-center
              justify-center bg-gradient-to-br from-[#1d4ed8] to-[#1e3a8a]
              p-8 text-center
              sm:p-10 lg:p-12
            "
          >
            <div>
              <p
                className="
                  font-serif text-5xl
                  font-bold text-white
                  sm:text-6xl
                "
              >
                Lead
              </p>

              <p
                className="
                  mt-2 text-xs font-bold
                  uppercase tracking-[0.22em]
                  text-[#e2c66e]
                  sm:text-sm
                "
              >
                With Purpose
              </p>
            </div>
          </div>

          <div className="relative p-7 sm:p-10 lg:p-12">
            <p
              className="
                text-[11px] font-bold uppercase
                tracking-[0.22em] text-[#e2c66e]
                sm:text-xs
              "
            >
              Leadership at RUMUNA
            </p>

            <h3
              className="
                mt-3 max-w-3xl font-serif
                text-2xl font-bold leading-tight
                text-white
                sm:text-3xl lg:text-4xl
              "
            >
              Building a Responsible Generation of Global Citizens
            </h3>

            <p
              className="
                mt-4 max-w-3xl text-sm
                leading-7 text-slate-300
                sm:text-[15px]
              "
            >
              Our governing body creates opportunities for members to
              learn, collaborate and contribute through conferences,
              workshops, diplomatic initiatives and meaningful
              community engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
