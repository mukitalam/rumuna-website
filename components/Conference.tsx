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
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24,
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60,
    ),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Conference() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    null,
  );
  const [conferenceStarted, setConferenceStarted] =
    useState(false);

  useEffect(() => {
    function updateCountdown() {
      const hasStarted =
        conferenceDate.getTime() <= Date.now();

      setConferenceStarted(hasStarted);
      setTimeLeft(calculateTimeLeft());
    }

    updateCountdown();

    const timer = window.setInterval(
      updateCountdown,
      1000,
    );

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const countdown = [
    {
      label: "Days",
      value: timeLeft?.days,
    },
    {
      label: "Hours",
      value: timeLeft?.hours,
    },
    {
      label: "Minutes",
      value: timeLeft?.minutes,
    },
    {
      label: "Seconds",
      value: timeLeft?.seconds,
    },
  ];

  return (
    <section
      id="conference"
      aria-labelledby="conference-heading"
      className="
        section-padding relative overflow-hidden
        bg-white
      "
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="
          absolute -left-36 top-16
          h-[360px] w-[360px] rounded-full
          bg-[#C8A443]/[0.07] blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -right-40 bottom-0
          h-[430px] w-[430px] rounded-full
          bg-[#173B68]/[0.06] blur-3xl
        "
      />

      <div className="section-container relative z-10">
        {/* Section introduction */}
        <div
          className="
            animate-fade-up mx-auto mb-12
            max-w-3xl text-center lg:mb-16
          "
        >
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-[2px] w-9
                bg-gradient-to-r
                from-transparent to-[#C8A443]
              "
            />

            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.22em] text-[#9F7B20]
                sm:text-sm
              "
            >
              Featured Conference
            </p>

            <span
              aria-hidden="true"
              className="
                h-[2px] w-9
                bg-gradient-to-l
                from-transparent to-[#C8A443]
              "
            />
          </div>

          <h2
            id="conference-heading"
            className="
              mt-5 font-serif text-4xl
              font-bold leading-[1.08]
              text-[#071A33]
              sm:text-5xl lg:text-[56px]
            "
          >
            Where Local Heritage Inspires{" "}
            <span className="gold-gradient-text">
              Global Dialogue
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-[15px] leading-7
              text-slate-600 sm:text-base
              sm:leading-8
            "
          >
            Join emerging leaders for three days of diplomacy,
            negotiation, cultural exchange and meaningful
            international dialogue.
          </p>
        </div>

        {/* Main conference card */}
        <div
          className="
            animate-fade-up animation-delay-200
            grid overflow-hidden border
            border-slate-200/80
            bg-[#F8FAFC]
            shadow-[0_30px_80px_rgba(7,26,51,0.16)]
            lg:grid-cols-[1.06fr_0.94fr]
          "
        >
          {/* Conference image */}
          <div
            className="
              group relative min-h-[440px]
              overflow-hidden
              sm:min-h-[540px]
              lg:min-h-[700px]
            "
          >
            <Image
              src="/nbmun.jpg"
              alt="Delegates attending the NBMUN Season V conference"
              fill
              sizes="
                (max-width: 1024px) 100vw,
                54vw
              "
              className="
                object-cover
                transition-transform duration-1000
                ease-out group-hover:scale-[1.04]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#041126]/95
                via-[#071A33]/35
                to-[#071A33]/5
              "
            />

            {/* Featured label */}
            <div
              className="
                absolute left-0 top-0
                border-b border-r
                border-[#E2C66E]/60
                bg-[#C8A443]
                px-5 py-3 sm:px-7
              "
            >
              <p
                className="
                  text-[10px] font-extrabold
                  uppercase tracking-[0.19em]
                  text-[#071A33] sm:text-xs
                "
              >
                NBMUN Season V
              </p>
            </div>

            {/* Image content */}
            <div
              className="
                absolute inset-x-0 bottom-0
                p-6 sm:p-9 lg:p-11
              "
            >
              <p
                className="
                  text-[11px] font-bold uppercase
                  tracking-[0.22em] text-[#E2C66E]
                  sm:text-sm
                "
              >
                Rajshahi University
              </p>

              <h3
                className="
                  mt-3 font-serif text-4xl
                  font-bold leading-none text-white
                  sm:text-5xl lg:text-[58px]
                "
              >
                NBMUN
                <span className="ml-3 text-[#E2C66E]">
                  V
                </span>
              </h3>

              <div
                aria-hidden="true"
                className="
                  mt-5 h-px w-24
                  bg-gradient-to-r
                  from-[#C8A443] to-transparent
                "
              />

              <p
                className="
                  mt-5 max-w-lg text-sm
                  leading-7 text-white/70
                  sm:text-base sm:leading-8
                "
              >
                A distinguished platform where young diplomats
                engage in debate, negotiation and international
                cooperation while celebrating local heritage.
              </p>
            </div>
          </div>

          {/* Conference information */}
          <div
            className="
              relative flex flex-col
              justify-center p-6
              sm:p-10 lg:p-12 xl:p-14
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

            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.21em] text-[#9F7B20]
                sm:text-sm
              "
            >
              Registration is Open
            </p>

            <h3
              className="
                mt-4 max-w-lg font-serif
                text-3xl font-bold leading-[1.1]
                text-[#071A33]
                sm:text-4xl lg:text-[44px]
              "
            >
              Local Heritage Inspiring{" "}
              <span className="gold-gradient-text block">
                Global Dialogue
              </span>
            </h3>

            {/* Event information */}
            <dl
              className="
                mt-8 space-y-5
                border-y border-slate-200
                py-7
              "
            >
              <div className="group flex items-start gap-4">
                <span
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    border border-[#C8A443]/30
                    bg-white text-lg text-[#9F7B20]
                    shadow-sm transition-colors
                    duration-300
                    group-hover:bg-[#C8A443]
                    group-hover:text-[#071A33]
                  "
                >
                  <FiCalendar aria-hidden="true" />
                </span>

                <div>
                  <dt
                    className="
                      text-xs font-bold uppercase
                      tracking-[0.12em] text-[#071A33]
                    "
                  >
                    Date
                  </dt>

                  <dd
                    className="
                      mt-1.5 text-sm leading-6
                      text-slate-600
                    "
                  >
                    20–22 December 2026
                  </dd>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <span
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    border border-[#C8A443]/30
                    bg-white text-lg text-[#9F7B20]
                    shadow-sm transition-colors
                    duration-300
                    group-hover:bg-[#C8A443]
                    group-hover:text-[#071A33]
                  "
                >
                  <FiMapPin aria-hidden="true" />
                </span>

                <div>
                  <dt
                    className="
                      text-xs font-bold uppercase
                      tracking-[0.12em] text-[#071A33]
                    "
                  >
                    Venue
                  </dt>

                  <dd
                    className="
                      mt-1.5 text-sm leading-6
                      text-slate-600
                    "
                  >
                    University of Rajshahi, Bangladesh
                  </dd>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <span
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    border border-[#C8A443]/30
                    bg-white text-lg text-[#9F7B20]
                    shadow-sm transition-colors
                    duration-300
                    group-hover:bg-[#C8A443]
                    group-hover:text-[#071A33]
                  "
                >
                  <FiUsers aria-hidden="true" />
                </span>

                <div>
                  <dt
                    className="
                      text-xs font-bold uppercase
                      tracking-[0.12em] text-[#071A33]
                    "
                  >
                    Participants
                  </dt>

                  <dd
                    className="
                      mt-1.5 text-sm leading-6
                      text-slate-600
                    "
                  >
                    Students and emerging leaders from across
                    Bangladesh
                  </dd>
                </div>
              </div>
            </dl>

            {/* Countdown */}
            <div className="mt-8">
              <div className="flex items-center gap-2.5">
                <FiClock
                  aria-hidden="true"
                  className="text-lg text-[#9F7B20]"
                />

                <p
                  className="
                    text-[11px] font-bold uppercase
                    tracking-[0.18em] text-[#071A33]
                    sm:text-xs
                  "
                >
                  {conferenceStarted
                    ? "The Conference Has Begun"
                    : "Conference Begins In"}
                </p>
              </div>

              <div
                role="timer"
                aria-label="Time remaining until NBMUN Season V"
                className="
                  mt-4 grid grid-cols-4
                  gap-2 sm:gap-3
                "
              >
                {countdown.map((item) => (
                  <div
                    key={item.label}
                    className="
                      group border
                      border-[#C8A443]/30
                      bg-white px-1 py-4
                      text-center shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-[#C8A443]
                      hover:shadow-[0_12px_30px_rgba(7,26,51,0.09)]
                      sm:py-5
                    "
                  >
                    <p
                      className="
                        font-serif text-2xl
                        font-bold tabular-nums
                        text-[#071A33]
                        sm:text-3xl
                      "
                    >
                      {item.value === undefined
                        ? "--"
                        : String(item.value).padStart(2, "0")}
                    </p>

                    <p
                      className="
                        mt-1 text-[8px] font-bold
                        uppercase tracking-[0.08em]
                        text-slate-500
                        sm:text-[10px]
                        sm:tracking-[0.12em]
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div
              className="
                mt-8 flex flex-col gap-3
                sm:flex-row
              "
            >
              <Link
                href="#register"
                className="
                  formal-button group inline-flex
                  min-h-12 items-center justify-center
                  gap-3 px-6 py-3.5
                  text-[12px] font-bold uppercase
                  tracking-[0.1em]
                  sm:text-[13px]
                "
              >
                Register Now

                <FiArrowRight
                  aria-hidden="true"
                  className="
                    text-base transition-transform
                    duration-300
                    group-hover:translate-x-1.5
                  "
                />
              </Link>

              <Link
                href="#events"
                className="
                  inline-flex min-h-12
                  items-center justify-center
                  border border-[#071A33]
                  px-6 py-3.5
                  text-[12px] font-bold uppercase
                  tracking-[0.1em] text-[#071A33]
                  transition-all duration-300
                  hover:bg-[#071A33]
                  hover:text-white
                  sm:text-[13px]
                "
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