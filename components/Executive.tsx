"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";

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
  return (
    <section
      id="governing-body"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-40 w-40 border-b border-r border-[#D4AF37]/15" />

      <div className="absolute bottom-0 right-0 h-56 w-56 border-l border-t border-[#D4AF37]/15" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#D4AF37]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A77D00]">
              Governing Body
            </p>

            <span className="h-[2px] w-10 bg-[#D4AF37]" />
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#081C3A] sm:text-4xl lg:text-5xl">
            Meet the Leaders Behind
            <span className="block text-[#B38B16]">Our Vision</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Our executive committee works with dedication to promote
            leadership, diplomacy and meaningful global engagement among
            students.
          </p>
        </div>

        {/* Executive cards */}
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {executives.map((member, index) => (
            <motion.article
              key={`${member.name}-${member.position}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group relative overflow-hidden bg-[#F8FAFC] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Member image */}
              <div className="relative h-[340px] overflow-hidden bg-slate-200">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 via-[#081C3A]/5 to-transparent" />

                {/* Social links */}
                <div className="absolute bottom-5 left-0 flex w-full translate-y-5 justify-center gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    href={member.email}
                    aria-label={`Email ${member.name}`}
                    className="flex h-10 w-10 items-center justify-center bg-white text-[#081C3A] transition hover:bg-[#D4AF37]"
                  >
                    <FiMail />
                  </Link>

                  <Link
                    href={member.facebook}
                    aria-label={`${member.name} Facebook profile`}
                    className="flex h-10 w-10 items-center justify-center bg-white text-[#081C3A] transition hover:bg-[#D4AF37]"
                  >
                    <FiFacebook />
                  </Link>

                  <Link
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn profile`}
                    className="flex h-10 w-10 items-center justify-center bg-white text-[#081C3A] transition hover:bg-[#D4AF37]"
                  >
                    <FiLinkedin />
                  </Link>
                </div>
              </div>

              {/* Member information */}
              <div className="relative border-b-4 border-[#D4AF37] px-5 py-6 text-center">
                <div className="absolute right-0 top-0 h-10 w-10 border-b border-l border-[#D4AF37]/30" />

                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#A77D00]">
                  {member.position}
                </p>

                <h3 className="mt-2 font-serif text-xl font-bold text-[#081C3A]">
                  {member.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Committee button */}
        <div className="mt-12 text-center">
          <Link
            href="#full-committee"
            className="group inline-flex items-center justify-center gap-3 bg-[#081C3A] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#D4AF37] hover:text-[#081C3A]"
          >
            View Full Committee

            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Leadership statement */}
        <div
          id="full-committee"
          className="mt-16 grid overflow-hidden bg-[#081C3A] lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div className="flex items-center justify-center bg-[#D4AF37] p-8 text-center lg:p-10">
            <div>
              <p className="font-serif text-5xl font-bold text-[#081C3A]">
                Lead
              </p>

              <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-[#081C3A]/70">
                With Purpose
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Leadership at RUMUNA
            </p>

            <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
              Building a responsible generation of global citizens
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">
              Our governing body creates opportunities for members to learn,
              collaborate and contribute through conferences, workshops and
              diplomatic initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}