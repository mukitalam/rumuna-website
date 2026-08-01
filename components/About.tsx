import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const highlights = [
  "Leadership and diplomatic skills",
  "Critical thinking and negotiation",
  "Public speaking and teamwork",
  "International affairs and global awareness",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        section-padding relative overflow-hidden
        bg-[#F8FAFC]
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          absolute -right-32 top-20
          h-[420px] w-[420px] rounded-full
          bg-[#C8A443]/[0.07] blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -left-40 bottom-0
          h-[350px] w-[350px] rounded-full
          bg-[#173B68]/[0.05] blur-3xl
        "
      />

      <div
        className="
          section-container relative z-10
          grid items-center gap-16
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-20
        "
      >
        {/* Image area */}
        <div
          className="
            animate-fade-up relative
            mx-auto w-full max-w-[580px]
            pb-16 sm:pb-12 lg:mx-0
          "
        >
          {/* Gold offset border */}
          <div
            aria-hidden="true"
            className="
              absolute -left-3 -top-3
              h-[calc(100%-3.25rem)]
              w-[calc(100%-0.75rem)]
              border border-[#C8A443]/45
              sm:-left-5 sm:-top-5
            "
          />

          {/* Main image */}
          <div
            className="
              group relative h-[390px]
              overflow-hidden bg-[#DDE4EC]
              shadow-[0_30px_70px_rgba(7,26,51,0.18)]
              sm:h-[500px]
              lg:h-[570px]
            "
          >
            <Image
              src="/session.jpg"
              alt="RUMUNA delegates participating in a diplomatic session"
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 580px,
                46vw
              "
              className="
                object-cover
                transition-transform duration-700
                ease-out group-hover:scale-[1.04]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#071A33]/75
                via-[#071A33]/10
                to-transparent
              "
            />

            {/* Image label */}
            <div className="absolute bottom-6 left-6 right-6">
              <p
                className="
                  text-[10px] font-bold uppercase
                  tracking-[0.22em] text-[#E2C66E]
                "
              >
                Leadership through dialogue
              </p>

              <p
                className="
                  mt-2 max-w-sm font-serif
                  text-xl font-semibold leading-snug
                  text-white sm:text-2xl
                "
              >
                Preparing young leaders for a globally connected future
              </p>
            </div>
          </div>

          {/* Floating information card */}
          <div
            className="
              animate-scale-in animation-delay-300
              absolute bottom-0 right-0
              w-[88%] border-l-[3px]
              border-[#C8A443] bg-[#071A33]
              px-5 py-5 text-white
              shadow-[0_20px_50px_rgba(7,26,51,0.28)]
              sm:-right-5 sm:w-[290px]
              sm:px-7 sm:py-6
            "
          >
            <p
              className="
                font-serif text-3xl font-bold
                tracking-[0.05em] text-[#E2C66E]
                sm:text-4xl
              "
            >
              RUMUNA
            </p>

            <p
              className="
                mt-2 text-xs leading-5
                text-white/65 sm:text-[13px]
                sm:leading-6
              "
            >
              Inspiring young leaders through diplomacy, cooperation and
              meaningful global dialogue.
            </p>
          </div>
        </div>

        {/* Content area */}
        <div className="animate-fade-up animation-delay-200">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-[2px] w-10
                bg-gradient-to-r
                from-[#9F7B20] to-[#E2C66E]
              "
            />

            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.22em] text-[#9F7B20]
                sm:text-sm
              "
            >
              About RUMUNA
            </p>
          </div>

          {/* Heading */}
          <h2
            id="about-heading"
            className="
              mt-5 max-w-2xl font-serif
              text-4xl font-bold leading-[1.08]
              text-[#071A33]
              sm:text-5xl lg:text-[56px]
            "
          >
            Shaping Future Leaders Through{" "}
            <span className="gold-gradient-text">
              Diplomacy and Dialogue
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="
              mt-6 h-px w-full
              bg-gradient-to-r
              from-[#C8A443]/65
              via-[#C8A443]/15
              to-transparent
            "
          />

          {/* Description */}
          <p
            className="
              mt-7 text-[15px] leading-7
              text-slate-600 sm:text-base
              sm:leading-8
            "
          >
            Rajshahi University Model United Nations Association is a
            student-led organization dedicated to developing diplomacy,
            leadership, negotiation and public-speaking skills among young
            people.
          </p>

          <p
            className="
              mt-4 text-[15px] leading-7
              text-slate-600 sm:text-base
              sm:leading-8
            "
          >
            Through conferences, workshops and interactive sessions, RUMUNA
            creates opportunities for students to understand international
            affairs and participate in meaningful global dialogue.
          </p>

          {/* Highlights */}
          <ul
            aria-label="RUMUNA development areas"
            className="
              mt-8 grid gap-3
              sm:grid-cols-2 sm:gap-4
            "
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="
                  group flex items-start gap-3
                  border border-slate-200/80
                  bg-white px-4 py-4
                  shadow-[0_8px_25px_rgba(7,26,51,0.04)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#C8A443]/50
                  hover:shadow-[0_14px_35px_rgba(7,26,51,0.09)]
                "
              >
                <span
                  className="
                    mt-0.5 flex h-6 w-6 shrink-0
                    items-center justify-center
                    rounded-full bg-[#C8A443]/15
                    text-[#9F7B20]
                    transition-colors duration-300
                    group-hover:bg-[#C8A443]
                    group-hover:text-[#071A33]
                  "
                >
                  <FiCheck
                    aria-hidden="true"
                    className="text-sm"
                  />
                </span>

                <span
                  className="
                    text-[13px] font-semibold
                    leading-6 text-[#24364D]
                    sm:text-sm
                  "
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <Link
            href="#conference"
            className="
              formal-button group mt-9
              inline-flex min-h-12
              items-center justify-center gap-3
              px-7 py-3.5 text-[12px]
              font-bold uppercase
              tracking-[0.1em]
              sm:text-[13px]
            "
          >
            Explore Our Conferences

            <FiArrowRight
              aria-hidden="true"
              className="
                text-base transition-transform
                duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}