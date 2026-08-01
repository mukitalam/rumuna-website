import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Conferences", href: "#conference" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Resources", href: "#resources" },
  { name: "Governing Body", href: "#governing-body" },
  { name: "Contact", href: "#contact" },
  { name: "Register", href: "#register" },
];

export default function Footer() {
  return (
    <footer className="bg-[#081C3A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#D4AF37]">
            RUMUNA
          </h2>

          <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
            Rajshahi University Model United Nations Association (RUMUNA)
          </p>

          <div className="mt-6 space-y-4 text-sm text-white/75">
            <p className="flex gap-3">
              <FiMapPin className="mt-1 shrink-0 text-[#D4AF37]" />
              <span>
                University of Rajshahi<br />
                Rajshahi-6205, Bangladesh
              </span>
            </p>

            <p className="flex items-center gap-3">
              <FiMail className="shrink-0 text-[#D4AF37]" />
              <a href="mailto:rumuna.org@gmail.com" className="hover:text-[#D4AF37]">
                rumuna.org@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FiPhone className="shrink-0 text-[#D4AF37]" />
              <a href="tel:+8801576929301" className="hover:text-[#D4AF37]">
                +880 1576929301
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-xl font-bold text-[#D4AF37]">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-3 text-sm text-white/75">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#D4AF37]">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-xl font-bold text-[#D4AF37]">
            Follow Us
          </h3>

          <div className="flex gap-3">
            <a
              href="https://facebook.com/RUMUNA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081C3A]"
            >
              <FiFacebook />
            </a>

            <a
              href="https://instagram.com/rumuna_official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081C3A]"
            >
              <FiInstagram />
            </a>

            <a
              href="https://linkedin.com/company/rumuna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081C3A]"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/60">
        © 2026 RUMUNA – Rajshahi University Model United Nations Association. All Rights Reserved.
      </div>
    </footer>
  );
}