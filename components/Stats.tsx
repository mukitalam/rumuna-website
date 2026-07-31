"use client";

import { motion } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

const statistics = [
  {
    icon: FiCalendar,
    number: "10+",
    title: "Years of Excellence",
    description: "Promoting diplomacy and leadership",
  },
  {
    icon: FiGlobe,
    number: "15+",
    title: "Conferences",
    description: "Successful national and international events",
  },
  {
    icon: FiUsers,
    number: "3,000+",
    title: "Delegates",
    description: "Young leaders connected through RUMUNA",
  },
  {
    icon: FiAward,
    number: "50+",
    title: "Awards",
    description: "Recognitions and achievements",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#081C3A] py-20">
      {/* Background decoration */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#D4AF37]/10" />
      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full border border-[#D4AF37]/10" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
            Our Journey in Numbers
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
            Creating Meaningful Impact
          </h2>

          <p className="mt-4 leading-7 text-white/60">
            Empowering students to become confident leaders and responsible
            global citizens.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group bg-[#081C3A] px-7 py-10 text-center transition duration-300 hover:bg-[#0B254B]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">
                  <Icon className="text-2xl text-[#D4AF37] transition group-hover:text-[#081C3A]" />
                </div>

                <p className="mt-6 font-serif text-4xl font-bold text-[#D4AF37]">
                  {stat.number}
                </p>

                <h3 className="mt-2 text-base font-bold uppercase tracking-wide text-white">
                  {stat.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}