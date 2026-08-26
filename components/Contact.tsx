"use client";

import { useState } from "react";
import {
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const contactDetails = [
  {
    label: "Address",
    value: "University of Rajshahi, Rajshahi, Bangladesh",
    href: "https://maps.google.com/?q=University+of+Rajshahi+Bangladesh",
    icon: FiMapPin,
  },
  {
    label: "Email",
    value: "rumuna.org@gmail.com",
    href: "mailto:rumuna.official@gmail.com",
    icon: FiMail,
  },
  {
    label: "Phone",
    value: "+880 1576929301",
    href: "tel:+8801XXXXXXXXX",
    icon: FiPhone,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        section-padding relative overflow-hidden
        bg-[#f8fafc]
      "
    >
      {/* Decorative background ambient glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-40 top-10
          h-[400px] w-[400px] rounded-full
          bg-[#3b82f6]/[0.05] blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-44 bottom-0
          h-[450px] w-[450px] rounded-full
          bg-[#1d4ed8]/[0.04] blur-3xl
        "
      />

      <div
        className="
          section-container relative z-10
          grid items-start gap-12
          lg:grid-cols-[0.88fr_1.12fr]
          lg:gap-16 xl:gap-20
        "
      >
        {/* Contact information */}
        <div className="lg:sticky lg:top-32">
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
              Contact RUMUNA
            </p>
          </div>

          <h2
            id="contact-heading"
            className="
              mt-5 max-w-xl font-serif
              text-4xl font-bold leading-[1.08]
              text-[#071426]
              sm:text-5xl lg:text-[56px]
            "
          >
            Let&apos;s Start a{" "}
            <span className="bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#d4af37] bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>

          <p
            className="
              mt-6 max-w-xl text-[15px]
              leading-8 text-slate-600
              sm:text-base
            "
          >
            Contact Rajshahi University Model United Nations
            Association for conference information, registration
            support, institutional collaboration or general queries.
          </p>

          <div
            aria-hidden="true"
            className="
              mt-7 h-px w-full
              bg-gradient-to-r
              from-[#3b82f6]/40
              via-[#3b82f6]/10
              to-transparent
            "
          />

          <address className="mt-8 space-y-4 not-italic">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.label === "Address"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.label === "Address"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    formal-card group flex items-start gap-4
                    rounded-2xl border border-slate-200/90
                    bg-[#f8fafc] p-4.5
                    shadow-[0_8px_25px_rgba(7,20,38,0.04)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#3b82f6]/50
                    hover:bg-white
                    hover:shadow-[0_16px_35px_rgba(29,78,216,0.1)]
                    sm:p-5
                  "
                >
                  <span
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl bg-[#071426] text-xl
                      text-[#93c5fd]
                      transition-colors duration-300
                      group-hover:bg-[#1d4ed8]
                      group-hover:text-white
                    "
                  >
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="min-w-0 pt-0.5">
                    <span
                      className="
                        block text-xs font-bold
                        uppercase tracking-[0.13em]
                        text-[#071426]
                      "
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        mt-1.5 block break-words
                        text-sm leading-6 text-slate-600
                        transition-colors duration-300
                        group-hover:text-[#1d4ed8]
                      "
                    >
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </address>

          <div
            className="
              group relative mt-7 overflow-hidden rounded-2xl border-l-4
              border-[#3b82f6] bg-[#071426]
              px-6 py-6 text-white
              shadow-[0_20px_45px_rgba(0,0,0,0.4),0_0_25px_rgba(59,130,246,0.1),inset_0_1px_0_rgba(255,255,255,0.08)]
            "
          >
            {/* Shimmer sweep on hover */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                -translate-x-full skew-x-[-20deg]
                bg-gradient-to-r from-transparent via-white/[0.04] to-transparent
                transition-transform duration-700
                group-hover:translate-x-[200%]
              "
            />
            <p
              className="
                font-serif text-lg font-bold
                text-[#93c5fd]
              "
            >
              We welcome collaboration
            </p>

            <p
              className="
                mt-2 text-sm leading-6
                text-slate-300
              "
            >
              Institutions, student organizations and potential
              partners are welcome to contact us regarding future
              initiatives and conferences.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div
          className="
            relative rounded-2xl border border-slate-200/90
            bg-[#f8fafc]
            p-6 shadow-[0_25px_70px_rgba(7,20,38,0.08)]
            sm:p-9 lg:p-10
          "
        >
          <div className="relative">
            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.2em] text-[#1d4ed8]
              "
            >
              Send a Message
            </p>

            <h3
              className="
                mt-3 font-serif text-3xl
                font-bold leading-tight text-[#071426]
                sm:text-4xl
              "
            >
              How Can We Help You?
            </h3>

            <p
              className="
                mt-4 max-w-xl text-sm
                leading-7 text-slate-600
              "
            >
              Complete the form below and our team will get back to
              you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              onChange={() => {
                if (submitted) {
                  setSubmitted(false);
                }
              }}
              className="mt-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="
                      mb-2 block text-xs font-bold
                      uppercase tracking-[0.09em]
                      text-[#071426]
                    "
                  >
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your full name"
                    className="
                      min-h-12 w-full rounded-xl
                      border border-slate-200
                      bg-white px-4 py-3
                      text-sm text-[#071426]
                      outline-none transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-[#3b82f6]
                      focus:ring-2
                      focus:ring-[#3b82f6]/20
                      focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="
                      mb-2 block text-xs font-bold
                      uppercase tracking-[0.09em]
                      text-[#071426]
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email address"
                    className="
                      min-h-12 w-full rounded-xl
                      border border-slate-200
                      bg-white px-4 py-3
                      text-sm text-[#071426]
                      outline-none transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-[#3b82f6]
                      focus:ring-2
                      focus:ring-[#3b82f6]/20
                      focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]
                    "
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="
                    mb-2 block text-xs font-bold
                    uppercase tracking-[0.09em]
                    text-[#071426]
                  "
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What would you like to discuss?"
                   className="
                    min-h-12 w-full rounded-xl
                    border border-slate-200
                    bg-white px-4 py-3
                    text-sm text-[#071426]
                    outline-none transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-[#3b82f6]
                    focus:ring-2
                    focus:ring-[#3b82f6]/20
                    focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]
                  "
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="
                    mb-2 block text-xs font-bold
                    uppercase tracking-[0.09em]
                    text-[#071426]
                  "
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message here"
                  className="
                    w-full resize-y rounded-xl
                    border border-slate-200
                    bg-white px-4 py-3
                    text-sm leading-6 text-[#071426]
                    outline-none transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-[#3b82f6]
                    focus:ring-2
                    focus:ring-[#3b82f6]/20
                    focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  formal-button group mt-6
                  inline-flex min-h-12 w-full
                  items-center justify-center gap-3 rounded-lg
                  px-8 py-3.5 text-[12px]
                  font-bold uppercase
                  tracking-[0.11em]
                  sm:w-auto sm:text-[13px]
                "
              >
                <span>Send Message</span>

                <FiSend
                  aria-hidden="true"
                  className="
                    text-base transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>

              <div
                aria-live="polite"
                aria-atomic="true"
              >
                {submitted && (
                  <div
                    role="status"
                    className="
                      mt-6 flex items-start gap-3 rounded-xl
                      border border-[#3b82f6]/40
                      bg-white px-5 py-4
                      text-sm font-semibold
                      leading-6 text-[#071426]
                      shadow-md
                    "
                  >
                    <FiCheckCircle
                      aria-hidden="true"
                      className="
                        mt-0.5 shrink-0 text-xl
                        text-[#1d4ed8]
                      "
                    />

                    <p>
                      Thank you. Your message has been received.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
