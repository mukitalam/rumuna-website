"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { executiveMembers } from "@/data/executive";

export default function Executive() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#081C3A]">
            Executive <span className="text-[#D4AF37]">Committee</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Meet the passionate leaders behind RUMUNA who work tirelessly to
            promote diplomacy, leadership, academic excellence and international
            cooperation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">

          {executiveMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >

              {/* Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold text-[#081C3A]">
                  {member.name}
                </h3>

                <p className="mt-2 font-semibold text-[#D4AF37]">
                  {member.position}
                </p>

                <div className="flex justify-center gap-4 mt-6">

                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#081C3A] text-white flex items-center justify-center transition hover:bg-[#D4AF37] hover:text-black"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#081C3A] text-white flex items-center justify-center transition hover:bg-[#D4AF37] hover:text-black"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="w-11 h-11 rounded-full bg-[#081C3A] text-white flex items-center justify-center transition hover:bg-[#D4AF37] hover:text-black"
                  >
                    <FaEnvelope />
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}