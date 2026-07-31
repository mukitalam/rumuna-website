"use client";

import { motion } from "framer-motion";

export default function Conference() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#081C3A]">
            Upcoming <span className="text-[#D4AF37]">Conference</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Join North Bengal Model United Nations Season V and experience
            diplomacy, negotiation and leadership at the highest level.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >

          {/* Image */}

          <img
            src="/images/nbmun.jpg"
            alt="NBMUN"
            className="rounded-3xl shadow-2xl"
          />

          {/* Details */}

          <div>

            <span className="bg-[#D4AF37] text-black px-4 py-2 rounded-full font-semibold">
              Featured Event
            </span>

            <h3 className="text-5xl font-bold text-[#081C3A] mt-6">
              North Bengal Model United Nations
            </h3>

            <p className="text-xl text-[#D4AF37] mt-3 font-semibold">
              Season V
            </p>

            <p className="text-gray-600 mt-8 leading-8">
              NBMUN is RUMUNA's flagship conference that brings together
              delegates from across Bangladesh to discuss global issues,
              improve diplomacy skills and build future leaders.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-gray-100 p-5 rounded-2xl">
                <p className="text-gray-500">Date</p>
                <h4 className="font-bold text-[#081C3A]">
                  7–8 November 2026
                </h4>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <p className="text-gray-500">Venue</p>
                <h4 className="font-bold text-[#081C3A]">
                  University of Rajshahi
                </h4>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <p className="text-gray-500">Expected Delegates</p>
                <h4 className="font-bold text-[#081C3A]">
                  350+
                </h4>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <p className="text-gray-500">Committees</p>
                <h4 className="font-bold text-[#081C3A]">
                  8+
                </h4>
              </div>

            </div>

            <button className="mt-10 bg-[#D4AF37] px-8 py-4 rounded-xl text-black font-semibold hover:scale-105 duration-300">
              View Conference
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}