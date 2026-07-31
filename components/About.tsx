"use client";

import { motion } from "framer-motion";
import { FaGlobeAsia, FaUsers, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-[#0A2342]">
            About <span className="text-[#D4AF37]">RUMUNA</span>
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>

          <p className="mt-8 text-gray-600 text-lg max-w-4xl mx-auto leading-9">
            Rajshahi University Model United Nations Association (RUMUNA)
            is dedicated to nurturing future diplomats, policymakers and
            responsible global citizens through debate, diplomacy,
            negotiation and leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-gray-50 rounded-3xl shadow-lg p-8 text-center"
          >
            <FaGlobeAsia className="text-5xl mx-auto text-[#D4AF37]" />

            <h3 className="text-2xl font-bold mt-6 text-[#0A2342]">
              Global Perspective
            </h3>

            <p className="text-gray-600 mt-4">
              Understanding international affairs through Model United Nations.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-gray-50 rounded-3xl shadow-lg p-8 text-center"
          >
            <FaUsers className="text-5xl mx-auto text-[#D4AF37]" />

            <h3 className="text-2xl font-bold mt-6 text-[#0A2342]">
              Leadership
            </h3>

            <p className="text-gray-600 mt-4">
              Developing confident leaders through teamwork and collaboration.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-gray-50 rounded-3xl shadow-lg p-8 text-center"
          >
            <FaHandshake className="text-5xl mx-auto text-[#D4AF37]" />

            <h3 className="text-2xl font-bold mt-6 text-[#0A2342]">
              Diplomacy
            </h3>

            <p className="text-gray-600 mt-4">
              Building negotiation skills for solving global challenges.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}