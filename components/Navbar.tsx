"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  {
    name: "Conferences",
    href: "#conference",
    dropdown: [
      { name: "NBMUN", href: "#conference" },
      { name: "RUMUN", href: "#conference" },
      { name: "Previous Conferences", href: "#events" },
    ],
  },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  {
    name: "Resources",
    href: "#resources",
    dropdown: [
      { name: "Study Guides", href: "#resources" },
      { name: "Rules of Procedure", href: "#resources" },
      { name: "Delegate Resources", href: "#resources" },
    ],
  },
  {
    name: "Governing Body",
    href: "#governing-body",
    dropdown: [
      {
        name: "Current Governing Body",
        href: "#governing-body",
      },
      {
        name: "Former Presidents",
        href: "#governing-body",
      },
      {
        name: "Faculty Advisors",
        href: "#governing-body",
      },
    ],
  },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  function closeMenu() {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen((current) => !current);
    setActiveDropdown(null);
  }

  function toggleDropdown(name: string) {
    setActiveDropdown((current) => (current === name ? null : name));
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[92px] border-b border-white/10 bg-[#11223c] text-white shadow-lg">
      <nav className="mx-auto flex h-full max-w-[1500px] items-center justify-between gap-5 px-5 lg:px-8">
        {/* Logo area */}
        <Link
          href="#home"
          onClick={closeMenu}
          aria-label="RUMUNA Home"
          className="flex min-w-0 shrink-0 items-center"
        >
          {/* Fixed-size logo container */}
          <div className="relative h-[75px] w-[75px] shrink-0 overflow-hidden rounded-full">
            <Image
              src="/rumuna-logo.png"
              alt="RUMUNA logo"
              fill
              priority
              sizes="75px"
              className="object-contain p-0.0"
            />
          </div>

          {/* Vertical divider */}
          <span className="mx-4 hidden h-14 w-1 shrink-0 bg-white sm:block" />

          {/* Organization name */}
          <div className="hidden max-w-[2700px] sm:block">
            <p className="font-serif text-[20px] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-white">
              Rajshahi University
            </p>

            <p className="font-serif text-[18px] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-white">
              Model United Nations Association
            </p>
          </div>

          {/* Mobile name */}
          <p className="ml-3 text-lg font-bold tracking-[0.15em] text-[#E1BD4F] sm:hidden">
            RUMUNA
          </p>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-0.5 xl:flex">
          {navigation.map((item) => (
            <div key={item.name} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 px-2.5 py-3 text-[13px] font-medium text-white/85 transition hover:text-[#E1BD4F]"
              >
                {item.name}

                {item.dropdown && (
                  <FiChevronDown className="text-sm transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {item.dropdown && (
                <div className="invisible absolute left-0 top-full min-w-[230px] translate-y-3 border-t-2 border-[#D4AF37] bg-white py-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block border-b border-slate-100 px-5 py-3 text-sm font-medium text-[#081C3A] transition last:border-0 hover:bg-[#F7F1DE] hover:text-[#A77D00]"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="#register"
            className="ml-3 bg-[#D4AF37] px-6 py-4 text-sm font-bold text-[#081C3A] transition hover:bg-[#E4C65D]"
          >
            Register
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
          className="shrink-0 border border-white/20 p-2 text-2xl transition hover:border-[#D4AF37] hover:text-[#D4AF37] xl:hidden"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-92px)] overflow-y-auto border-t border-white/10 bg-[#11223c] px-5 pb-6 pt-3 xl:hidden">
          {navigation.map((item) => (
            <div key={item.name} className="border-b border-white/10">
              <div className="flex items-center">
                <Link
                  href={item.href}
                  onClick={item.dropdown ? undefined : closeMenu}
                  className="flex-1 py-4 text-sm font-medium text-white/90 transition hover:text-[#D4AF37]"
                >
                  {item.name}
                </Link>

                {item.dropdown && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.name} menu`}
                    aria-expanded={activeDropdown === item.name}
                    onClick={() => toggleDropdown(item.name)}
                    className="p-4 text-[#D4AF37]"
                  >
                    <FiChevronDown
                      className={`transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.dropdown && activeDropdown === item.name && (
                <div className="mb-3 border-l border-[#D4AF37]/50 pl-4">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      onClick={closeMenu}
                      className="block py-2.5 text-sm text-white/65 transition hover:text-[#D4AF37]"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="#register"
            onClick={closeMenu}
            className="mt-5 block bg-[#D4AF37] px-5 py-3.5 text-center text-sm font-bold text-[#081C3A]"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}