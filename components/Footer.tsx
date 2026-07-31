"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiYoutube,
} from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About RUMUNA", href: "#about" },
  { label: "Conference", href: "#conference" },
  { label: "Upcoming Events", href: "#events" },
  { label: "Governing Body", href: "#governing-body" },
  { label: "Gallery", href: "#gallery" },
];

const usefulLinks = [
  { label: "NBMUN Season V", href: "#conference" },
  { label: "Registration", href: "#register" },
  { label: "Event Details", href: "#events" },
  { label: "Executive Committee", href: "#governing-body" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: FiFacebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: FiInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FiLinkedin,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    icon: FiYoutube,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  }

  return (
    <footer id="contact" className="bg-[#041126] text-white">
      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid items-center gap-8 bg-[#081C3A] px-7 py-9 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
                Stay Connected
              </p>

              <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
                Subscribe to our newsletter
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                Receive the latest updates about RUMUNA events, conferences,
                workshops and registration opportunities.
              </p>
            </div>

            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>

                <div className="relative flex-1">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setMessage("");
                    }}
                    placeholder="Enter your email address"
                    className="h-14 w-full border border-white/15 bg-white/5 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#D4AF37]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex h-14 items-center justify-center gap-2 bg-[#D4AF37] px-7 text-sm font-bold uppercase tracking-[0.08em] text-[#081C3A] transition hover:bg-[#E4C65D]"
                >
                  Subscribe
                  <FiSend className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {message && (
                <p
                  aria-live="polite"
                  className="mt-3 text-sm font-medium text-[#E4C65D]"
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr] lg:px-8">
        {/* Organization information */}
        <div>
          <Link href="#home" className="inline-block">
            <p className="font-serif text-3xl font-bold text-[#D4AF37]">
              RUMUNA
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
              Rajshahi University Model United Nations Association
            </p>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
            Empowering young leaders through diplomacy, negotiation, public
            speaking and meaningful global dialogue.
          </p>

          <div className="mt-7 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081C3A]"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-serif text-xl font-bold">Quick Links</h3>
          <div className="mt-3 h-[2px] w-10 bg-[#D4AF37]" />

          <ul className="mt-6 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-[#D4AF37]"
                >
                  <FiArrowRight className="text-xs text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful links */}
        <div>
          <h3 className="font-serif text-xl font-bold">Useful Links</h3>
          <div className="mt-3 h-[2px] w-10 bg-[#D4AF37]" />

          <ul className="mt-6 space-y-3">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-[#D4AF37]"
                >
                  <FiArrowRight className="text-xs text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact information */}
        <div>
          <h3 className="font-serif text-xl font-bold">Contact Us</h3>
          <div className="mt-3 h-[2px] w-10 bg-[#D4AF37]" />

          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-3">
              <FiMapPin className="mt-1 shrink-0 text-lg text-[#D4AF37]" />

              <p className="text-sm leading-6 text-white/55">
                University of Rajshahi
                <br />
                Rajshahi 6205, Bangladesh
              </p>
            </div>

            <Link
              href="tel:+8801700000000"
              className="flex items-center gap-3 text-sm text-white/55 transition hover:text-[#D4AF37]"
            >
              <FiPhone className="shrink-0 text-lg text-[#D4AF37]" />
              +880 1700-000000
            </Link>

            <Link
              href="mailto:info@rumuna.org"
              className="flex items-center gap-3 text-sm text-white/55 transition hover:text-[#D4AF37]"
            >
              <FiMail className="shrink-0 text-lg text-[#D4AF37]" />
              info@rumuna.org
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} RUMUNA. All rights reserved.
          </p>

          <div className="flex gap-5 text-xs text-white/40">
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Privacy Policy
            </Link>

            <Link href="#" className="transition hover:text-[#D4AF37]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}