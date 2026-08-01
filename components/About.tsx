import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

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
        section-padding relative
        overflow-hidden bg-[#F8FAFC]
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-20
          h-[420px] w-[420px]
          rounded-full
          bg-[#C8A443]/[0.07]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 bottom-0
          h-[350px] w-[350px]
          rounded-full
          bg-[#173B68]/[0.05]
          blur-3xl
        "
      />

      <div
        className="
          section-container relative z-10
          grid items-center gap-12
          lg:grid-cols-[1.12fr_0.88fr]
          lg:gap-16 xl:gap-20
        "
      >
        {/* Image area */}
        <div
          className="
            animate-fade-up relative
            mx-auto w-full max-w-[680px]
            lg:mx-0
          "
        >
          {/* Gold border—kept behind the image */}
          <div
            aria-hidden="true"
            className="
              absolute -left-3 -top-3
              h-full w-full
              border border-[#C8A443]/45
              sm:-left-4 sm:-top-4
            "
          />

          {/* Main image */}
          <div
            className="
              group relative
              h-[430px] w-full
              overflow-hidden
              bg-[#DDE4EC]
              shadow-[0_30px_70px_rgba(7,26,51,0.18)]
              sm:h-[540px]
              lg:h-[650px]
            "
          >
            <Image
              src="/session.jpg"
              alt="RUMUNA delegates participating in a diplomatic session"
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 680px,
                56vw
              "
              className="
                object-cover object-center
                transition-transform duration-700
                ease-out group-hover:scale-[1.03]
              "
            />

            {/* Light bottom overlay */}
            <div
              aria-hidden="true"
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#071A33]/65
                via-transparent
                to-transparent
              "
            />

            {/* Image label */}
            <div
              className="
                absolute bottom-5 left-5
                max-w-[52%]
                sm:bottom-7 sm:left-7
                sm:max-w-[340px]
              "
            >
              <p
                className="
                  text-[9px] font-bold
                  uppercase tracking-[0.18em]
                  text-[#E2C66E]
                  sm:text-[10px]
                  sm:tracking-[0.22em]
                "
              >
                Leadership through dialogue
              </p>

              <p
                className="
                  mt-2 hidden font-serif
                  text-xl font-semibold
                  leading-snug text-white
                  sm:block sm:text-2xl
                "
              >
                Preparing young leaders for a globally connected future
              </p>
            </div>

            {/* Small floating card inside the image */}
            <div
              className="
                animate-scale-in
                animation-delay-300
                absolute bottom-5 right-4
                w-[150px]
                border-l-[3px]
                border-[#C8A443]
                bg-[#071A33]/90
                px-4 py-4 text-white
                shadow-[0_16px_35px_rgba(7,26,51,0.28)]
                backdrop-blur-md
                sm:bottom-2 sm:right-3
                sm:w-[250px]
                sm:px-6 sm:py-2
              "
            >
              <p
                className="
                  font-serif text-xl
                  font-bold tracking-[0.04em]
                  text-[#E2C66E]
                  sm:text-3xl
                "
              >
                RUMUNA
              </p>

              <p
                className="
                  mt-2 hidden text-xs
                  leading-5 text-white/70
                  sm:block
                "
              >
                Inspiring young leaders through diplomacy, cooperation and
                meaningful global dialogue.
              </p>
            </div>
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
                text-xs font-bold
                uppercase tracking-[0.22em]
                text-[#9F7B20]
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
              mt-5 max-w-2xl
              font-serif text-[34px]
              font-bold leading-[1.1]
              text-[#071A33]
              sm:text-[42px]
              lg:text-[46px]
              xl:text-[50px]
            "
          >
            Learn Diplamacy,{" "}
            <span className="gold-gradient-text">
              Change for a Better World
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
              mt-7 text-[14px]
              leading-7 text-slate-600
              sm:text-[15px] sm:leading-8
            "
          >
            Rajshahi University Model United Nations Association is a
            student-led organization dedicated to developing diplomacy,
            leadership, negotiation and public-speaking skills among young
            people.
          </p>

          <p
            className="
              mt-4 text-[14px]
              leading-7 text-slate-600
              sm:text-[15px] sm:leading-8
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
                    mt-0.5 flex h-6 w-6
                    shrink-0 items-center
                    justify-center rounded-full
                    bg-[#C8A443]/15
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
                    text-[12px] font-semibold
                    leading-6 text-[#24364D]
                    sm:text-[13px]
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
              items-center justify-center
              gap-3 px-7 py-3.5
              text-[12px] font-bold
              uppercase tracking-[0.1em]
              sm:text-[13px]
            "
          >
            <span>Explore Our Conferences</span>

            <FiArrowRight
              aria-hidden="true"
              className="
                text-base
                transition-transform duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}