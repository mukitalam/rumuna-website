"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";

const conferenceDate = new Date("2026-12-20T09:00:00+06:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
  const difference = conferenceDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Conference() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdown = [
    { label: "Days", value: timeLeft?.days ?? 0 },
    { label: "Hours", value: timeLeft?.hours ?? 0 },
    { label: "Minutes", value: timeLeft?.minutes ?? 0 },
    { label: "Seconds", value: timeLeft?.seconds ?? 0 },
  ];

  return (
    <section
      id="conference"
      className="overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid overflow-hidden shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
          {/* Conference image */}
          <div className="relative min-h-[430px] lg:min-h-[680px]">
            <Image
              src="/nbmun.jpg"
              alt="NBMUN Season V conference"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#041126]/95 via-[#081C3A]/30 to-transparent" />

            <div className="absolute left-0 top-0 bg-[#D4AF37] px-6 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#081C3A]">
                Featured Conference
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-7 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Rajshahi University
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
                NBMUN Season V
              </h2>

              <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
                A platform where young diplomats engage in meaningful debate,
                negotiation and international cooperation.
              </p>
            </div>
          </div>

          {/* Conference information */}
          <div className="relative bg-[#F8FAFC] p-7 sm:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-[#D4AF37]/30" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A77D00]">
              Registration is Open
            </p>

            <h3 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#081C3A] sm:text-4xl">
              Local Heritage Inspiring
              <span className="block text-[#B38B16]">Global Dialogue</span>
            </h3>

            <div className="mt-8 space-y-5 border-y border-slate-200 py-7">
              <div className="flex items-start gap-4">
                <FiCalendar className="mt-1 shrink-0 text-xl text-[#B38B16]" />

                <div>
                  <p className="text-sm font-bold text-[#081C3A]">Date</p>
                  <p className="mt-1 text-sm text-slate-600">
                    20–22 December 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMapPin className="mt-1 shrink-0 text-xl text-[#B38B16]" />

                <div>
                  <p className="text-sm font-bold text-[#081C3A]">Venue</p>
                  <p className="mt-1 text-sm text-slate-600">
                    University of Rajshahi, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiUsers className="mt-1 shrink-0 text-xl text-[#B38B16]" />

                <div>
                  <p className="text-sm font-bold text-[#081C3A]">
                    Participants
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Students and emerging leaders from across the country
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2">
                <FiClock className="text-[#B38B16]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#081C3A]">
                  Conference Begins In
                </p>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
                {countdown.map((item) => (
                  <div
                    key={item.label}
                    className="border border-[#D4AF37]/30 bg-white px-1 py-4 text-center shadow-sm"
                  >
                    <p className="font-serif text-2xl font-bold text-[#081C3A] sm:text-3xl">
                      {String(item.value).padStart(2, "0")}
                    </p>

                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-slate-500 sm:text-[10px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                id="register"
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#081C3A] transition hover:bg-[#E4C65D]"
              >
                Register Now
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#events"
                className="inline-flex items-center justify-center border border-[#081C3A] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#081C3A] transition hover:bg-[#081C3A] hover:text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}