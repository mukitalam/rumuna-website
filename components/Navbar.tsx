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
      { name: "Current Governing Body", href: "#governing-body" },
      { name: "Former Presidents", href: "#governing-body" },
      { name: "Faculty Advisors", href: "#governing-body" },
    ],
  },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#06162f]/95 text-white shadow-lg backdrop-blur-md">
      <nav className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#D4AF37]/60 bg-white p-1 shadow-md">
            <Image
              src="/logo.png"
              alt="RUMUNA logo"
              fill
              priority
              className="object-contain p-1"
            />
          </div>

          <div>
            <p className="text-xl font-bold tracking-[0.18em] text-[#E1BD4F]">
              RUMUNA
            </p>

            <p className="hidden max-w-[230px] text-[9px] uppercase leading-3 tracking-[0.12em] text-white/70 sm:block">
              Rajshahi University Model United Nations Association
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <div key={item.name} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-3 text-[13px] font-medium text-white/85 transition hover:bg-white/5 hover:text-[#E1BD4F]"
              >
                {item.name}

                {item.dropdown && (
                  <FiChevronDown className="text-sm transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {item.dropdown && (
                <div className="invisible absolute left-0 top-full min-w-[220px] translate-y-3 rounded-sm border-t-2 border-[#D4AF37] bg-white py-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block border-b border-gray-100 px-5 py-3 text-sm font-medium text-[#081C3A] transition last:border-b-0 hover:bg-[#F7F1DE] hover:text-[#A77D00]"
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
            className="ml-3 rounded-sm border border-[#D4AF37] bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#081C3A] transition hover:bg-transparent hover:text-[#E1BD4F]"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md border border-white/20 p-2 text-2xl text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37] xl:hidden"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-82px)] overflow-y-auto border-t border-white/10 bg-[#06162f] px-5 pb-6 pt-3 xl:hidden">
          {navigation.map((item) => (
            <div key={item.name} className="border-b border-white/10">
              <div className="flex items-center">
                <Link
                  href={item.href}
                  onClick={item.dropdown ? undefined : closeMenu}
                  className="flex-1 py-4 text-sm font-medium text-white/90"
                >
                  {item.name}
                </Link>

                {item.dropdown && (
                  <button
                    type="button"
                    aria-label={`Open ${item.name} menu`}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
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