"use client";

import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#B28A18]">
            Contact
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#081C3A] md:text-5xl">
            Get in Touch
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Reach out to Rajshahi University Model United Nations Association
            for conference information, registration support, collaboration,
            or general queries.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#081C3A] text-xl text-[#D4AF37]">
                <FiMapPin />
              </div>
              <div>
                <h3 className="font-bold text-[#081C3A]">Address</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Rajshahi University, Rajshahi, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#081C3A] text-xl text-[#D4AF37]">
                <FiMail />
              </div>
              <div>
                <h3 className="font-bold text-[#081C3A]">Email</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  rumuna.official@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#081C3A] text-xl text-[#D4AF37]">
                <FiPhone />
              </div>
              <div>
                <h3 className="font-bold text-[#081C3A]">Phone</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  +880 1XXXXXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-[#D4AF37]/30 bg-[#F7F1DE] p-7 shadow-sm md:p-9"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#081C3A]">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#081C3A]">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37]"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#081C3A]">
              Subject
            </label>
            <input
              type="text"
              required
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37]"
              placeholder="Message subject"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#081C3A]">
              Message
            </label>
            <textarea
              required
              rows={6}
              className="w-full resize-none border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37]"
              placeholder="Write your message"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#081C3A] transition hover:bg-[#081C3A] hover:text-white"
          >
            Send Message
            <FiSend />
          </button>

          {submitted && (
            <p className="mt-5 text-sm font-semibold text-[#081C3A]">
              Thank you. Your message has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}