"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "North Bengal Model United Nations V",
    date: "November 2026",
    image: "/images/nbmun.jpg",
    description:
      "The flagship international Model UN conference of RUMUNA bringing together delegates from across Bangladesh.",
  },
  {
    id: 2,
    title: "RUMUN 2026",
    date: "April 2026",
    image: "/images/rumun.jpg",
    description:
      "Rajshahi University Model United Nations featuring advanced committees and crisis simulations.",
  },
  {
    id: 3,
    title: "Weekly Training Session",
    date: "Every Friday",
    image: "/images/session.jpg",
    description:
      "Hands-on workshops on diplomacy, public speaking, negotiation and Rules of Procedure.",
  },
];

export default function Events() {
  return (
    <section className="py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#081C3A]">
            Upcoming <span className="text-[#D4AF37]">Events</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our conferences, workshops and flagship events that inspire
            future diplomats and global leaders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">

          {events.map((event) => (

            <motion.div
              key={event.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >

              <div className="relative h-64">

                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <p className="text-[#D4AF37] font-semibold">
                  {event.date}
                </p>

                <h3 className="text-2xl font-bold text-[#081C3A] mt-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {event.description}
                </p>

                <button className="mt-8 bg-[#081C3A] text-white px-6 py-3 rounded-xl hover:bg-[#D4AF37] hover:text-black duration-300">
                  Learn More
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}