"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  "/images/nbmun.jpg",
  "/images/rumun.jpg",
  "/images/session.jpg",
  "/images/hero.jpg",
  "/images/nbmun.jpg",
  "/images/rumun.jpg",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[#081C3A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Our <span className="text-[#D4AF37]">Gallery</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
            Explore unforgettable moments from our conferences, training
            sessions and international collaborations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {gallery.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl h-72"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition duration-300" />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}