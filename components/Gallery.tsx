"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiMaximize2 } from "react-icons/fi";

const galleryImages = [
  {
    src: "/gallery-1.jpg",
    fallback: "/session.jpg",
    title: "Diplomatic Conference",
    category: "Conference",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/gallery-2.jpg",
    fallback: "/hero.jpg",
    title: "Committee Session",
    category: "Session",
    className: "",
  },
  {
    src: "/gallery-3.jpg",
    fallback: "/nbmun.jpg",
    title: "Delegate Training",
    category: "Workshop",
    className: "",
  },
  {
    src: "/gallery-4.jpg",
    fallback: "/event-1.jpg",
    title: "Award Ceremony",
    category: "Achievement",
    className: "",
  },
  {
    src: "/gallery-5.jpg",
    fallback: "/executive-1.jpg",
    title: "Leadership Dialogue",
    category: "Dialogue",
    className: "",
  },
];

function GalleryCard({
  image,
  index,
  shouldReduceMotion,
}: {
  image: (typeof galleryImages)[number];
  index: number;
  shouldReduceMotion: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(image.src);
  const isFeatured = index === 0;

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.96,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              scale: 1,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-[#071426]
        shadow-[0_16px_40px_rgba(7,20,38,0.12)]
        ${image.className}
      `}
    >
      <Image
        src={imgSrc}
        alt={`${image.title} – RUMUNA ${image.category}`}
        fill
        onError={() => setImgSrc(image.fallback)}
        sizes={
          isFeatured
            ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        }
        className="
          object-cover
          transition-transform duration-1000
          ease-out
          group-hover:scale-[1.07]
        "
      />

      {/* Dark image overlay */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#071426]/95
          via-[#071426]/20
          to-transparent
          transition-colors duration-500
          group-hover:via-[#071426]/40
        "
      />

      {/* Gallery index watermark */}
      <span
        aria-hidden="true"
        className="
          absolute left-5 top-5
          font-serif text-3xl font-bold
          text-white/25
          sm:text-4xl
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Open image button */}
      <a
        href={imgSrc}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${image.title} image`}
        className="
          absolute right-5 top-5
          flex h-11 w-11
          items-center justify-center
          rounded-xl
          border border-[#3b82f6]/40
          bg-[#1d4ed8]
          text-white
          opacity-100 shadow-lg
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-[#3b82f6]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#3b82f6]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#071426]
          sm:translate-y-3
          sm:opacity-0
          sm:group-hover:translate-y-0
          sm:group-hover:opacity-100
          sm:group-focus-within:translate-y-0
          sm:group-focus-within:opacity-100
        "
      >
        <FiMaximize2 aria-hidden="true" />
      </a>

      {/* Image information */}
      <div
        className="
          absolute bottom-0 left-0
          w-full p-6
          transition-transform duration-500
          sm:translate-y-2
          sm:group-hover:translate-y-0
          lg:p-7
        "
      >
        <p
          className="
            text-[10px] font-extrabold
            uppercase tracking-[0.2em]
            text-[#e2c66e]
            sm:text-[11px]
          "
        >
          {image.category}
        </p>

        <h3
          className={`
            mt-2 font-serif font-bold
            leading-tight text-white
            ${
              isFeatured
                ? "text-2xl sm:text-3xl lg:text-4xl"
                : "text-xl sm:text-2xl"
            }
          `}
        >
          {image.title}
        </h3>

        <div
          aria-hidden="true"
          className="
            mt-4 h-[2px] w-10
            bg-[#3b82f6]
            transition-all duration-500
            group-hover:w-16
            group-hover:bg-[#60a5fa]
          "
        />
      </div>
    </motion.article>
  );
}

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="
        section-padding relative scroll-mt-24
        overflow-hidden bg-[#f8fafc]
      "
    >
      {/* Decorative ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-44 top-1/4
          h-[420px] w-[420px]
          rounded-full bg-[#3b82f6]/[0.05]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-52 bottom-10
          h-[480px] w-[480px]
          rounded-full bg-[#1d4ed8]/[0.04]
          blur-3xl
        "
      />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div
          className="
            flex flex-col justify-between gap-7
            md:flex-row md:items-end
          "
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
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
                Our Gallery
              </p>
            </div>

            <h2
              id="gallery-heading"
              className="
                mt-5 max-w-2xl font-serif
                text-4xl font-bold leading-[1.08]
                text-[#071426]
                sm:text-5xl lg:text-[56px]
              "
            >
              Moments That Define{" "}
              <span className="bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#d4af37] bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>

            <p
              className="
                mt-6 max-w-2xl
                text-[15px] leading-8
                text-slate-600
                sm:text-base
              "
            >
              Explore memorable moments from RUMUNA conferences, diplomatic
              sessions, workshops and leadership activities that inspire
              collaboration and meaningful global engagement.
            </p>
          </div>

          <Link
            href="#gallery-grid"
            className="
              group inline-flex w-fit
              items-center gap-2.5
              border-b-2 border-[#1d4ed8]
              pb-2 text-xs font-bold uppercase
              tracking-[0.12em] text-[#071426]
              transition-colors duration-300
              hover:text-[#1d4ed8]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#3b82f6]
              focus-visible:ring-offset-4
              sm:text-sm
            "
          >
            <span>Explore Gallery</span>

            <FiArrowRight
              aria-hidden="true"
              className="
                text-[#1d4ed8]
                transition-transform duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </div>

        {/* Gallery grid */}
        <div
          id="gallery-grid"
          className="
            mt-12 grid scroll-mt-28
            auto-rows-[270px] gap-5
            md:grid-cols-2 md:auto-rows-[260px]
            lg:mt-16 lg:grid-cols-4
          "
        >
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={image.src}
              image={image}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* Bottom callout banner */}
        <div
          className="
            relative mt-12 overflow-hidden rounded-2xl
            bg-[#071426] px-6 py-9
            shadow-[0_30px_70px_rgba(7,20,38,0.3)]
            sm:px-10 sm:py-12
            md:flex md:items-center
            md:justify-between md:gap-8
            lg:mt-16 lg:px-14
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
            aria-hidden="true"
            className="
              absolute -right-8 -top-12
              h-44 w-44 rounded-full
              border border-[#3b82f6]/20
            "
          />

          <div className="relative max-w-2xl">
            <p
              className="
                text-[11px] font-bold uppercase
                tracking-[0.22em]
                text-[#e2c66e]
                sm:text-xs
              "
            >
              Share the Experience
            </p>

            <h3
              className="
                mt-3 font-serif text-2xl
                font-bold leading-tight text-white
                sm:text-3xl lg:text-4xl
              "
            >
              Be Part of Our Next Memorable Chapter
            </h3>

            <p
              className="
                mt-3 max-w-xl
                text-sm leading-7
                text-slate-300
              "
            >
              Join a community where diplomacy, leadership and meaningful
              connections create experiences worth remembering.
            </p>
          </div>

          <Link
            href="#register"
            className="
              formal-button group relative mt-7
              inline-flex min-h-12 shrink-0
              items-center justify-center gap-3 rounded-lg
              px-8 py-3.5
              text-xs font-bold uppercase
              tracking-[0.11em]
              sm:text-[13px]
              md:mt-0
            "
          >
            <span>Join RUMUNA</span>

            <FiArrowRight
              aria-hidden="true"
              className="
                text-base
                transition-transform duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
