"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiMaximize2 } from "react-icons/fi";

const galleryImages = [
  {
    src: "/gallery-1.jpg",
    title: "Diplomatic Conference",
    category: "Conference",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/gallery-2.jpg",
    title: "Committee Session",
    category: "Session",
    className: "",
  },
  {
    src: "/gallery-3.jpg",
    title: "Delegate Training",
    category: "Workshop",
    className: "",
  },
  {
    src: "/gallery-4.jpg",
    title: "Award Ceremony",
    category: "Achievement",
    className: "",
  },
  {
    src: "/gallery-5.jpg",
    title: "Leadership Dialogue",
    category: "Dialogue",
    className: "",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-28"
    >
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full border border-[#D4AF37]/10" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4AF37]" />

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A77D00]">
                Our Gallery
              </p>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#081C3A] sm:text-4xl lg:text-5xl">
              Moments That Define
              <span className="text-[#B38B16]"> Our Journey</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Explore memorable moments from RUMUNA conferences, diplomatic
              sessions, workshops and leadership activities.
            </p>
          </div>

          <Link
            href="#gallery-grid"
            className="group inline-flex w-fit items-center gap-2 border-b-2 border-[#D4AF37] pb-2 text-sm font-bold uppercase tracking-[0.1em] text-[#081C3A]"
          >
            Explore Gallery

            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Gallery grid */}
        <div
          id="gallery-grid"
          className="mt-14 grid auto-rows-[250px] gap-4 md:grid-cols-4"
        >
          {galleryImages.map((image, index) => (
            <motion.article
              key={image.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-[#081C3A] ${
                image.className
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#041126]/95 via-[#081C3A]/15 to-transparent transition duration-300 group-hover:bg-[#081C3A]/55" />

              <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-3 items-center justify-center bg-[#D4AF37] text-[#081C3A] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <FiMaximize2 />
              </div>

              <div className="absolute bottom-0 left-0 w-full translate-y-3 p-6 transition duration-300 group-hover:translate-y-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  {image.category}
                </p>

                <h3 className="mt-2 font-serif text-xl font-bold text-white">
                  {image.title}
                </h3>

                <div className="mt-3 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-14" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 border-l-4 border-[#D4AF37] bg-white px-7 py-7 shadow-lg sm:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A77D00]">
                Share the Experience
              </p>

              <h3 className="mt-2 font-serif text-2xl font-bold text-[#081C3A]">
                Be part of our next memorable chapter
              </h3>
            </div>

            <Link
              href="#register"
              className="inline-flex w-fit shrink-0 items-center gap-2 bg-[#081C3A] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#D4AF37] hover:text-[#081C3A]"
            >
              Join RUMUNA
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}