import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Conferences", href: "#conference" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Resources", href: "#resources" },
  { name: "Governing Body", href: "#governing-body" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/RUMUNA",
    icon: FiFacebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rumuna_official",
    icon: FiInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/rumuna",
    icon: FiLinkedin,
  },
];

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative overflow-hidden bg-[#071A33] text-white"
    >
      <h2 id="footer-heading" className="sr-only">
        RUMUNA website footer
      </h2>

      {/* Royal top border */}
      <div
        aria-hidden="true"
        className="
          h-1 w-full bg-gradient-to-r
          from-[#172554] via-[#3b82f6] to-[#172554]
        "
      />

      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="
          absolute -left-36 top-20
          h-80 w-80 rounded-full
          border border-[#C8A443]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -right-40 bottom-0
          h-96 w-96 rounded-full
          border border-[#C8A443]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute right-[12%] top-10
          h-44 w-44 rounded-full
          bg-[#C8A443]/[0.04] blur-3xl
        "
      />

      {/* Main footer */}
      <div
        className="
          section-container relative z-10
          grid gap-12 py-14
          md:grid-cols-2 md:py-16
          lg:grid-cols-[1.3fr_0.9fr_0.8fr]
          lg:gap-14 lg:py-20
        "
      >
        {/* Organization details */}
        <div>
          <Link
            href="#home"
            aria-label="Return to RUMUNA homepage"
            className="inline-block"
          >
            <p
              className="
                font-serif text-4xl font-bold
                tracking-[0.04em] text-[#93c5fd]
                transition-colors duration-300
                hover:text-white
              "
            >
              RUMUNA
            </p>
          </Link>

          <p
            className="
              mt-4 max-w-md text-sm
              font-semibold leading-6 text-white/85
            "
          >
            Rajshahi University Model United Nations Association
          </p>

          <p
            className="
              mt-3 max-w-md text-sm
              leading-7 text-white/55
            "
          >
            Developing diplomacy, leadership and global awareness among
            students through conferences, training and meaningful engagement.
          </p>

          <address className="mt-7 space-y-4 not-italic">
            <div className="flex items-start gap-3">
              <span
                className="
                  mt-0.5 flex h-9 w-9 shrink-0
                  items-center justify-center
                  border border-[#C8A443]/25
                  bg-[#C8A443]/10 text-[#E2C66E]
                "
              >
                <FiMapPin aria-hidden="true" />
              </span>

              <p className="text-sm leading-6 text-white/65">
                University of Rajshahi
                <br />
                Rajshahi-6205, Bangladesh
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  border border-[#C8A443]/25
                  bg-[#C8A443]/10 text-[#E2C66E]
                "
              >
                <FiMail aria-hidden="true" />
              </span>

              <a
                href="mailto:rumuna.org@gmail.com"
                className="
                  text-sm text-white/65
                  transition-colors duration-300
                  hover:text-[#E2C66E]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#E2C66E]
                "
              >
                rumuna.org@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  border border-[#C8A443]/25
                  bg-[#C8A443]/10 text-[#E2C66E]
                "
              >
                <FiPhone aria-hidden="true" />
              </span>

              <a
                href="tel:+8801576929301"
                className="
                  text-sm text-white/65
                  transition-colors duration-300
                  hover:text-[#E2C66E]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#E2C66E]
                "
              >
                +880 1576-929301
              </a>
            </div>
          </address>
        </div>

        {/* Quick links */}
        <nav aria-labelledby="quick-links-heading">
          <h3
            id="quick-links-heading"
            className="
              font-serif text-xl font-bold
              text-[#93c5fd]
            "
          >
            Quick Links
          </h3>

          <div
            aria-hidden="true"
            className="
              mt-3 h-[2px] w-12
              bg-gradient-to-r
              from-[#3b82f6] to-transparent
            "
          />

          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="
                    group inline-flex items-center
                    gap-2 text-sm text-white/65
                    transition-colors duration-300
                    hover:text-[#E2C66E]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#E2C66E]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5 w-1.5 rotate-45
                      bg-[#C8A443]/60
                      transition-transform duration-300
                      group-hover:rotate-[135deg]
                    "
                  />

                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links and CTA */}
        <div>
          <h3 className="font-serif text-xl font-bold text-[#93c5fd]">
            Follow Us
          </h3>

          <div
            aria-hidden="true"
            className="
              mt-3 h-[2px] w-12
              bg-gradient-to-r
              from-[#3b82f6] to-transparent
            "
          />

          <p className="mt-7 max-w-xs text-sm leading-7 text-white/55">
            Stay connected for updates about conferences, workshops and
            upcoming opportunities.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow RUMUNA on ${social.name}`}
                  className="
                    flex h-11 w-11 items-center
                    justify-center border
                    border-white/15 bg-white/[0.04]
                    text-lg text-white/75
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#1d4ed8]
                    hover:bg-[#1d4ed8]
                    hover:text-white
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#93c5fd]
                  "
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <Link
            href="#register"
            className="
              mt-7 inline-flex min-h-11
              items-center justify-center
              border border-[#C8A443]
              bg-[#C8A443] px-6 py-3
              text-xs font-bold uppercase
              tracking-[0.12em] text-[#071A33]
              transition-all duration-300
              hover:bg-[#E2C66E]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#E2C66E]
            "
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="
          relative z-10 border-t
          border-white/10 bg-[#041126]/50
        "
      >
        <div
          className="
            section-container flex flex-col
            items-center justify-between
            gap-3 py-5 text-center
            text-xs leading-5 text-white/45
            sm:flex-row sm:text-left
          "
        >
          <p>
            © 2026 RUMUNA. All Rights Reserved.
          </p>

          <p>
            Rajshahi University Model United Nations Association
          </p>
        </div>
      </div>
    </footer>
  );
}