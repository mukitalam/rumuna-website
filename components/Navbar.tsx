"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiArrowRight,
  FiGlobe,
  FiAward,
  FiUsers,
  FiBookOpen,
  FiCalendar,
  FiImage,
  FiMail,
} from "react-icons/fi";

type DropdownItem = {
  name: string;
  href: string;
  description?: string;
};

type NavigationItem = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdown?: DropdownItem[];
};

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "#home",
    icon: FiGlobe,
  },
  {
    name: "About",
    href: "#about",
    icon: FiGlobe,
  },
  {
    name: "Conferences",
    href: "#conference",
    icon: FiAward,
    dropdown: [
      {
        name: "NBMUN",
        href: "#conference",
        description: "National Bangladesh Model UN Conference",
      },
      {
        name: "RUMUN",
        href: "#conference",
        description: "Flagship University MUN Conference",
      },
      {
        name: "Previous Conferences",
        href: "#events",
        description: "Explore our archive of past sessions",
      },
    ],
  },
  {
    name: "Events",
    href: "#events",
    icon: FiCalendar,
  },
  {
    name: "Organization",
    href: "#governing-body",
    icon: FiUsers,
    dropdown: [
      {
        name: "Governing Body",
        href: "#governing-body",
        description: "Board of Trustees & Advisory Council",
      },
      {
        name: "Executive Committee",
        href: "#executive-members",
        description: "Current Secretariat & Team Leaders",
      },
      {
        name: "Faculty Advisors",
        href: "#faculty-advisors",
        description: "Distinguished mentors & patrons",
      },
      {
        name: "Former Leaders",
        href: "#former-leaders",
        description: "Honoring our alumni presidents & executives",
      },
    ],
  },
  {
    name: "Resources",
    href: "#resources",
    icon: FiBookOpen,
    dropdown: [
      {
        name: "Study Guides",
        href: "#resources",
        description: "Comprehensive committee background guides",
      },
      {
        name: "Rules of Procedure",
        href: "#resources",
        description: "Standard UN diplomatic RoP handbook",
      },
      {
        name: "Delegate Resources",
        href: "#resources",
        description: "Position papers & resolution templates",
      },
    ],
  },
  {
    name: "Gallery",
    href: "#gallery",
    icon: FiImage,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: FiMail,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

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

  // Scroll detection for navbar elevation
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section highlight observer
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "conference",
      "events",
      "governing-body",
      "resources",
      "gallery",
      "contact",
    ];

    function observeSections() {
      const scrollPos = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", observeSections, { passive: true });
    observeSections();
    return () => window.removeEventListener("scroll", observeSections);
  }, []);

  // Close on Escape or resize
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    function handleResize() {
      if (window.innerWidth >= 1280) {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none transition-all duration-300">
      {/* Full-width Rectangular Container */}
      <div
        className={`
          pointer-events-auto w-full
          transition-all duration-400
          ${
            isScrolled
              ? "bg-[#060e1a]/95 backdrop-blur-2xl border-b border-white/[0.10] shadow-[0_8px_32px_rgba(0,0,0,0.55),0_0_20px_rgba(59,130,246,0.06)]"
              : "bg-[#0b192e]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          }
        `}
      >
        {/* Top ambient highlight shimmer ray */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#60a5fa]/50 to-transparent"
        />

        <nav
          aria-label="Main navigation"
          className="relative flex h-[68px] md:h-[74px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 xl:px-16 section-container"
        >
          {/* Brand Identity — Two-line layout */}
          <Link
            href="#home"
            onClick={closeMenu}
            aria-label="Go to RUMUNA homepage"
            className="group flex min-w-0 shrink-0 items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060e1a]"
          >
            {/* Logo Ring with Refined Royal-to-Gold Gradient */}
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-[#1d4ed8] via-[#60a5fa] to-[#d4af37] shadow-lg shadow-blue-950/60 transition-transform duration-300 group-hover:scale-105">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[#040914]">
                <Image
                  src="/rumuna-logo.png"
                  alt="RUMUNA Logo"
                  fill
                  priority
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
            </div>

            {/* Brand Typography — Two-line */}
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.12em] text-[#93c5fd] group-hover:text-white transition-colors duration-200">
                Rajshahi University
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.03em] text-blue-200/65 group-hover:text-blue-200/90 transition-colors duration-200 leading-snug max-w-[200px] sm:max-w-none">
                Model United Nations Association
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden h-full items-center xl:flex xl:gap-1 2xl:gap-1.5">
            {navigation.map((item) => {
              const itemSection = item.href.replace("#", "");
              const isActive = activeSection === itemSection;

              return (
                <div
                  key={item.name}
                  className="group relative flex h-full items-center"
                >
                  <Link
                    href={item.href}
                    aria-haspopup={item.dropdown ? "true" : undefined}
                    className={`
                      relative flex items-center gap-1.5 px-3.5 py-1.5
                      rounded-lg text-[13px] font-semibold tracking-[0.02em]
                      outline-none transition-all duration-200
                      ${
                        isActive
                          ? "bg-[#3b82f6]/20 text-[#60a5fa] font-bold border border-[#3b82f6]/40 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                          : "text-[#60a5fa]/80 hover:text-[#93c5fd] hover:bg-[#3b82f6]/10"
                      }
                      focus-visible:ring-2 focus-visible:ring-[#3b82f6]
                    `}
                  >
                    <span>{item.name}</span>

                    {item.dropdown && (
                      <FiChevronDown
                        aria-hidden="true"
                        className="text-[12px] text-blue-300 transition-transform duration-250 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {/* Modern Luxury Desktop Dropdown Card */}
                  {item.dropdown && (
                    <div className="invisible pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2.5 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                      <div className="w-[310px] overflow-hidden rounded-2xl border border-white/10 bg-[#060e1a]/95 p-2.5 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.75),0_0_30px_rgba(59,130,246,0.18)] ring-1 ring-white/5">
                        {/* Dropdown top diplomatic accent bar */}
                        <div className="mb-2 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-amber-400/80" />

                        <div className="space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600/25 hover:to-indigo-600/15 focus-visible:bg-blue-600/25"
                            >
                              <div className="pr-2">
                                <p className="text-[13px] font-semibold text-slate-100 group-hover/item:text-white transition-colors">
                                  {dropdownItem.name}
                                </p>
                                {dropdownItem.description && (
                                  <p className="mt-0.5 text-[11px] leading-tight text-blue-200/60 group-hover/item:text-blue-200/85 transition-colors">
                                    {dropdownItem.description}
                                  </p>
                                )}
                              </div>

                              <FiArrowRight
                                aria-hidden="true"
                                className="shrink-0 text-[13px] text-blue-400 opacity-0 -translate-x-1.5 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Right CTA Button */}
          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="#register"
              className="
                group relative inline-flex items-center justify-center gap-1.5
                overflow-hidden rounded-full
                bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6]
                px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-white
                shadow-[0_0_24px_rgba(37,99,235,0.45),inset_0_1px_0_rgba(255,255,255,0.25)]
                border border-blue-400/35
                transition-all duration-300
                hover:shadow-[0_0_35px_rgba(59,130,246,0.65)]
                hover:scale-[1.03]
                active:scale-[0.98]
                outline-none
                focus-visible:ring-2
                focus-visible:ring-[#3b82f6]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#060e1a]
              "
            >
              {/* Glossy sweep effect */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span>Register</span>
              <FiArrowUpRight
                aria-hidden="true"
                className="text-[14px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
            className="
              relative flex h-10 w-10 shrink-0 items-center justify-center
              rounded-full border border-white/15 bg-white/5 text-[20px] text-white
              outline-none transition-all duration-200
              hover:border-blue-400 hover:bg-blue-600/20 hover:text-blue-200
              focus-visible:ring-2 focus-visible:ring-[#3b82f6]
              xl:hidden
            "
          >
            <span
              className={`absolute transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            >
              <FiMenu aria-hidden="true" />
            </span>

            <span
              className={`absolute transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }`}
            >
              <FiX aria-hidden="true" />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Sheet */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        className={`
          pointer-events-auto mx-auto mt-2 max-w-[1440px]
          overflow-hidden rounded-3xl
          border border-white/10 bg-[#060e1a]/98
          backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.7)]
          transition-all duration-300 ease-out
          xl:hidden
          ${
            mobileMenuOpen
              ? "max-h-[calc(100dvh-90px)] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-3 pointer-events-none border-transparent"
          }
        `}
      >
        <div className="max-h-[calc(100dvh-110px)] overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-1.5">
          {navigation.map((item) => {
            const itemSection = item.href.replace("#", "");
            const isActive = activeSection === itemSection;
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="rounded-2xl overflow-hidden border border-white/[0.05] bg-white/[0.02]"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    className={`
                      flex flex-1 items-center gap-3 px-4 py-3.5 text-[14px] font-semibold
                      transition-colors
                      ${
                        isActive
                          ? "text-blue-300 font-bold bg-blue-600/15"
                          : "text-slate-200 hover:text-white"
                      }
                    `}
                  >
                    {Icon && (
                      <Icon
                        aria-hidden="true"
                        className="text-base text-blue-400"
                      />
                    )}
                    <span>{item.name}</span>
                  </Link>

                  {item.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.name} submenu`}
                      aria-expanded={activeDropdown === item.name}
                      tabIndex={mobileMenuOpen ? 0 : -1}
                      onClick={() => toggleDropdown(item.name)}
                      className="flex h-12 w-12 items-center justify-center text-blue-400 hover:bg-white/5 transition-colors"
                    >
                      <FiChevronDown
                        aria-hidden="true"
                        className={`text-lg transition-transform duration-250 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu Accordion */}
                {item.dropdown && (
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      activeDropdown === item.name
                        ? "grid-rows-[1fr] opacity-100 pb-2.5"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mx-3 mt-1 space-y-1 rounded-xl border-l-2 border-blue-500 bg-white/[0.03] p-2 pl-3">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={closeMenu}
                            tabIndex={
                              mobileMenuOpen && activeDropdown === item.name
                                ? 0
                                : -1
                            }
                            className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-600/20"
                          >
                            <p className="text-[13px] font-semibold text-slate-100">
                              {dropdownItem.name}
                            </p>
                            {dropdownItem.description && (
                              <p className="text-[11px] text-blue-200/60 leading-tight mt-0.5">
                                {dropdownItem.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile Action Buttons */}
          <div className="pt-4 space-y-3">
            <Link
              href="#register"
              onClick={closeMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="
                flex w-full items-center justify-center gap-2
                rounded-2xl bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6]
                py-3.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white
                shadow-[0_0_25px_rgba(37,99,235,0.45)]
              "
            >
              <span>Register Now</span>
              <FiArrowUpRight aria-hidden="true" className="text-base" />
            </Link>

            <p className="text-center text-[10px] uppercase tracking-[0.22em] text-blue-300/50 pt-2">
              Diplomacy • Leadership • Global Dialogue
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={closeMenu}
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-sm xl:hidden"
        />
      )}
    </header>
  );
}
