"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
};

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Conferences",
    href: "#conference",
    dropdown: [
      {
        name: "NBMUN",
        href: "#conference",
      },
      {
        name: "RUMUN",
        href: "#conference",
      },
      {
        name: "Previous Conferences",
        href: "#events",
      },
    ],
  },
  {
    name: "Events",
    href: "#events",
  },
  {
    name: "Organization",
    href: "#governing-body",
    dropdown: [
      {
        name: "Governing Body",
        href: "#governing-body",
      },
      {
        name: "Executive Committee",
        href: "#executive",
      },
      {
        name: "Faculty Advisors",
        href: "#faculty-advisors",
      },
      {
        name: "Former Leaders",
        href: "#former-leaders",
      },
    ],
  },
  {
    name: "Resources",
    href: "#resources",
    dropdown: [
      {
        name: "Study Guides",
        href: "#resources",
      },
      {
        name: "Rules of Procedure",
        href: "#resources",
      },
      {
        name: "Delegate Resources",
        href: "#resources",
      },
    ],
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  function closeMenu() {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen((current) => !current);
    setActiveDropdown(null);
  }

  function toggleDropdown(name: string) {
    setActiveDropdown((current) =>
      current === name ? null : name,
    );
  }

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        h-[76px] border-b text-white
        transition-all duration-500 md:h-[88px]
        ${
          isScrolled
            ? "border-white/10 bg-[#071A33]/95 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            : "border-white/10 bg-[#071A33]"
        }
      `}
    >
      <nav
        aria-label="Main navigation"
        className="
          mx-auto flex h-full w-full max-w-[1500px]
          items-center justify-between gap-5
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* Brand and logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          aria-label="RUMUNA home"
          className="
            group flex min-w-0 shrink-0
            items-center rounded-sm
          "
        >
          <div
            className="
              relative h-[58px] w-[58px] shrink-0
              overflow-hidden rounded-full
              border border-[#C8A443]/40
              bg-white/5 shadow-[0_0_25px_rgba(200,164,67,0.08)]
              transition duration-500
              group-hover:border-[#C8A443]
              group-hover:shadow-[0_0_30px_rgba(200,164,67,0.22)]
              sm:h-[64px] sm:w-[64px]
              md:h-[70px] md:w-[70px]
            "
          >
            <Image
              src="/rumuna-logo.png"
              alt="RUMUNA logo"
              fill
              priority
              sizes="(max-width: 640px) 58px, (max-width: 768px) 64px, 70px"
              className="
                object-contain
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          </div>

          <span
            aria-hidden="true"
            className="
              mx-4 hidden h-12 w-px shrink-0
              bg-gradient-to-b from-transparent
              via-[#C8A443]/80 to-transparent
              sm:block md:h-14
            "
          />

          <div className="hidden max-w-[315px] sm:block">
            <p
              className="
                font-serif text-[17px] font-semibold
                uppercase leading-[1.2]
                tracking-[0.075em] text-white
                md:text-[19px]
              "
            >
              Rajshahi University
            </p>

            <p
              className="
                mt-1 font-serif text-[13px] font-medium
                uppercase leading-[1.25]
                tracking-[0.065em] text-white/80
                md:text-[15px]
              "
            >
              Model United Nations Association
            </p>
          </div>

          <div className="ml-3 sm:hidden">
            <p
              className="
                font-serif text-[20px] font-bold
                tracking-[0.15em] text-[#E2C66E]
              "
            >
              RUMUNA
            </p>

            <p
              className="
                mt-0.5 text-[8px] font-semibold
                uppercase tracking-[0.15em] text-white/55
              "
            >
              Diplomacy • Leadership
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden h-full items-center xl:flex">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="group relative flex h-full items-center"
            >
              <Link
                href={item.href}
                className="
                  relative flex h-full items-center gap-1.5
                  px-2.5 text-[12px] font-semibold
                  uppercase tracking-[0.055em] text-white/80
                  transition-colors duration-300
                  hover:text-[#E2C66E]
                  focus-visible:text-[#E2C66E]
                "
              >
                <span>{item.name}</span>

                {item.dropdown && (
                  <FiChevronDown
                    aria-hidden="true"
                    className="
                      text-[14px] transition-transform
                      duration-300
                      group-hover:rotate-180
                      group-focus-within:rotate-180
                    "
                  />
                )}

                <span
                  aria-hidden="true"
                  className="
                    absolute inset-x-2.5 bottom-0
                    h-[2px] origin-center scale-x-0
                    bg-gradient-to-r from-transparent
                    via-[#C8A443] to-transparent
                    transition-transform duration-300
                    group-hover:scale-x-100
                    group-focus-within:scale-x-100
                  "
                />
              </Link>

              {item.dropdown && (
                <div
                  className="
                    invisible absolute left-1/2 top-[calc(100%-1px)]
                    w-[250px] -translate-x-1/2
                    translate-y-3 border border-slate-200/80
                    border-t-2 border-t-[#C8A443]
                    bg-white p-2 opacity-0
                    shadow-[0_22px_60px_rgba(7,26,51,0.22)]
                    transition-all duration-300
                    group-hover:visible group-hover:translate-y-0
                    group-hover:opacity-100
                    group-focus-within:visible
                    group-focus-within:translate-y-0
                    group-focus-within:opacity-100
                  "
                >
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="
                        group/dropdown relative block overflow-hidden
                        border-b border-slate-100
                        px-4 py-3.5 text-[13px] font-semibold
                        tracking-[0.02em] text-[#102B4E]
                        transition-colors duration-300
                        last:border-b-0
                        hover:bg-[#FBF8EF]
                        hover:text-[#9F7B20]
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          absolute bottom-2 left-0 top-2
                          w-[2px] scale-y-0 bg-[#C8A443]
                          transition-transform duration-300
                          group-hover/dropdown:scale-y-100
                        "
                      />

                      <span className="transition-transform duration-300 group-hover/dropdown:translate-x-1">
                        {dropdownItem.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="#register"
            className="
              formal-button ml-4 inline-flex
              min-h-11 items-center justify-center
              px-5 py-3 text-[12px] font-bold
              uppercase tracking-[0.09em]
            "
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
          aria-controls="mobile-navigation"
          onClick={toggleMobileMenu}
          className="
            relative flex h-11 w-11 shrink-0
            items-center justify-center
            overflow-hidden border border-white/20
            bg-white/5 text-[23px] text-white
            transition-all duration-300
            hover:border-[#C8A443]
            hover:bg-[#C8A443]/10
            hover:text-[#E2C66E]
            xl:hidden
          "
        >
          <span
            className={`
              absolute transition-all duration-300
              ${
                mobileMenuOpen
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }
            `}
          >
            <FiMenu aria-hidden="true" />
          </span>

          <span
            className={`
              absolute transition-all duration-300
              ${
                mobileMenuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }
            `}
          >
            <FiX aria-hidden="true" />
          </span>
        </button>
      </nav>

      {/* Mobile background overlay */}
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className="
            fixed inset-0 top-[76px] z-[-1]
            cursor-default bg-[#020817]/60
            backdrop-blur-sm md:top-[88px]
            xl:hidden
          "
        />
      )}

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`
          absolute inset-x-0 top-full
          max-h-[calc(100dvh-76px)]
          overflow-y-auto border-t border-white/10
          bg-[#071A33]/98 shadow-2xl
          backdrop-blur-xl transition-all
          duration-300 md:max-h-[calc(100dvh-88px)]
          xl:hidden
          ${
            mobileMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-3xl px-4 pb-7 pt-3 sm:px-6">
          {navigation.map((item, index) => (
            <div
              key={item.name}
              className="
                border-b border-white/10
                last:border-b-0
              "
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${index * 35}ms`
                  : "0ms",
              }}
            >
              <div className="flex items-center">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    flex-1 py-4 text-[13px]
                    font-semibold uppercase
                    tracking-[0.08em] text-white/85
                    transition-colors duration-300
                    hover:text-[#E2C66E]
                  "
                >
                  {item.name}
                </Link>

                {item.dropdown && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.name} submenu`}
                    aria-expanded={activeDropdown === item.name}
                    onClick={() => toggleDropdown(item.name)}
                    className="
                      flex h-12 w-12 items-center
                      justify-center text-[19px]
                      text-[#E2C66E]
                      transition-colors duration-300
                      hover:bg-white/5
                    "
                  >
                    <FiChevronDown
                      aria-hidden="true"
                      className={`
                        transition-transform duration-300
                        ${
                          activeDropdown === item.name
                            ? "rotate-180"
                            : "rotate-0"
                        }
                      `}
                    />
                  </button>
                )}
              </div>

              {item.dropdown && (
                <div
                  className={`
                    grid transition-all duration-300
                    ${
                      activeDropdown === item.name
                        ? "grid-rows-[1fr] pb-3 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        border-l-2 border-[#C8A443]/60
                        bg-white/[0.035] py-1 pl-4
                      "
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={closeMenu}
                          className="
                            block py-3 text-[13px]
                            font-medium text-white/60
                            transition-all duration-300
                            hover:translate-x-1
                            hover:text-[#E2C66E]
                          "
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="#register"
            onClick={closeMenu}
            className="
              formal-button mt-6 flex min-h-12
              w-full items-center justify-center
              px-6 py-3.5 text-center text-[13px]
              font-bold uppercase tracking-[0.1em]
            "
          >
            Register Now
          </Link>

          <p
            className="
              mt-5 text-center text-[10px]
              uppercase tracking-[0.14em] text-white/35
            "
          >
            Leadership • Diplomacy • Global Dialogue
          </p>
        </div>
      </div>
    </header>
  );
}