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
        bg-white
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          absolute -left-40 top-10
          h-[380px] w-[380px] rounded-full
          bg-[#C8A443]/[0.07] blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -right-44 bottom-0
          h-[430px] w-[430px] rounded-full
          bg-[#173B68]/[0.06] blur-3xl
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
        <div className="animate-fade-up lg:sticky lg:top-32">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-[2px] w-10
                bg-gradient-to-r
                from-[#9F7B20] to-[#E2C66E]
              "
            />

            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.22em] text-[#9F7B20]
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
              text-[#071A33]
              sm:text-5xl lg:text-[56px]
            "
          >
            Let&apos;s Start a{" "}
            <span className="gold-gradient-text">
              Conversation
            </span>
          </h2>

          <p
            className="
              mt-6 max-w-xl text-[15px]
              leading-7 text-slate-600
              sm:text-base sm:leading-8
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
              from-[#C8A443]/60
              via-[#C8A443]/15
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
                    group flex items-start gap-4
                    border border-slate-200/80
                    bg-[#F8FAFC] p-4
                    shadow-[0_8px_25px_rgba(7,26,51,0.04)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#C8A443]/50
                    hover:bg-white
                    hover:shadow-[0_15px_35px_rgba(7,26,51,0.09)]
                    sm:p-5
                  "
                >
                  <span
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      bg-[#071A33] text-xl
                      text-[#E2C66E]
                      transition-colors duration-300
                      group-hover:bg-[#C8A443]
                      group-hover:text-[#071A33]
                    "
                  >
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="min-w-0 pt-0.5">
                    <span
                      className="
                        block text-xs font-bold
                        uppercase tracking-[0.13em]
                        text-[#071A33]
                      "
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        mt-1.5 block break-words
                        text-sm leading-6 text-slate-600
                        transition-colors duration-300
                        group-hover:text-[#9F7B20]
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
              mt-7 border-l-[3px]
              border-[#C8A443] bg-[#071A33]
              px-5 py-5 text-white
              sm:px-6
            "
          >
            <p
              className="
                font-serif text-lg font-semibold
                text-[#E2C66E]
              "
            >
              We welcome collaboration
            </p>

            <p
              className="
                mt-2 text-sm leading-6
                text-white/65
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
            animate-fade-up animation-delay-200
            relative border border-[#C8A443]/30
            bg-[#FBF8EF]
            p-5 shadow-[0_25px_70px_rgba(7,26,51,0.12)]
            sm:p-8 lg:p-10
          "
        >
          {/* Decorative corner */}
          <div
            aria-hidden="true"
            className="
              absolute right-0 top-0
              h-24 w-24 border-b border-l
              border-[#C8A443]/35
              sm:h-32 sm:w-32
            "
          />

          <div className="relative">
            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.2em] text-[#9F7B20]
              "
            >
              Send a Message
            </p>

            <h3
              className="
                mt-3 font-serif text-3xl
                font-bold leading-tight text-[#071A33]
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
                      text-[#071A33]
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
                      min-h-12 w-full
                      border border-slate-200
                      bg-white px-4 py-3
                      text-sm text-[#071A33]
                      outline-none transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-[#C8A443]
                      focus:ring-2
                      focus:ring-[#C8A443]/15
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="
                      mb-2 block text-xs font-bold
                      uppercase tracking-[0.09em]
                      text-[#071A33]
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
                      min-h-12 w-full
                      border border-slate-200
                      bg-white px-4 py-3
                      text-sm text-[#071A33]
                      outline-none transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-[#C8A443]
                      focus:ring-2
                      focus:ring-[#C8A443]/15
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
                    text-[#071A33]
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
                    min-h-12 w-full
                    border border-slate-200
                    bg-white px-4 py-3
                    text-sm text-[#071A33]
                    outline-none transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-[#C8A443]
                    focus:ring-2
                    focus:ring-[#C8A443]/15
                  "
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="
                    mb-2 block text-xs font-bold
                    uppercase tracking-[0.09em]
                    text-[#071A33]
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
                    w-full resize-y
                    border border-slate-200
                    bg-white px-4 py-3
                    text-sm leading-6 text-[#071A33]
                    outline-none transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-[#C8A443]
                    focus:ring-2
                    focus:ring-[#C8A443]/15
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  formal-button group mt-6
                  inline-flex min-h-12 w-full
                  items-center justify-center gap-3
                  px-7 py-3.5 text-[12px]
                  font-bold uppercase
                  tracking-[0.11em]
                  sm:w-auto sm:text-[13px]
                "
              >
                Send Message

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
                      mt-6 flex items-start gap-3
                      border border-[#C8A443]/40
                      bg-white px-4 py-4
                      text-sm font-semibold
                      leading-6 text-[#071A33]
                    "
                  >
                    <FiCheckCircle
                      aria-hidden="true"
                      className="
                        mt-0.5 shrink-0 text-xl
                        text-[#9F7B20]
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