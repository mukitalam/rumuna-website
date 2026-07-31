import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const highlights = [
  "Leadership and diplomatic skills",
  "Critical thinking and negotiation",
  "Public speaking and teamwork",
  "International affairs and global awareness",
];

export default function About() {
  return (
    <section id="about" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <div className="relative">
          <div className="relative h-[420px] overflow-hidden rounded-sm shadow-2xl sm:h-[520px]">
            <Image
              src="/session.jpg"
              alt="RUMUNA diplomatic session"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/60 to-transparent" />
          </div>

          <div className="absolute -bottom-7 -right-3 w-[220px] border-l-4 border-[#D4AF37] bg-[#081C3A] p-6 text-white shadow-xl sm:-right-7 sm:w-[260px]">
            <p className="font-serif text-4xl font-bold text-[#D4AF37]">
              RUMUNA
            </p>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Inspiring young leaders through diplomacy, dialogue and global
              cooperation.
            </p>
          </div>

          <div className="absolute -left-4 -top-4 -z-10 h-full w-full border border-[#D4AF37]/40" />
        </div>

        {/* Content */}
        <div className="pt-8 lg:pl-8 lg:pt-0">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D4AF37]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A77D00]">
              About RUMUNA
            </p>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#081C3A] sm:text-4xl lg:text-5xl">
            Shaping Future Leaders Through
            <span className="block text-[#B38B16]">
              Diplomacy and Dialogue
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Rajshahi University Model United Nations Association is a
            student-led organization dedicated to developing diplomacy,
            leadership, negotiation and public-speaking skills among young
            people.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Through conferences, workshops and interactive sessions, RUMUNA
            creates opportunities for students to understand international
            affairs and participate in meaningful global dialogue.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-xl text-[#B38B16]" />

                <p className="text-sm font-medium leading-6 text-[#24364D]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="#conference"
            className="group mt-9 inline-flex items-center gap-3 bg-[#081C3A] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#D4AF37] hover:text-[#081C3A]"
          >
            Learn More About Us

            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}