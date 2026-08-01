import Link from "next/link";

export default function Register() {
  return (
    <section id="register" className="bg-[#081C3A] px-5 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
          Join RUMUNA
        </p>

        <h2 className="font-serif text-4xl font-bold md:text-5xl">
          Be Part of the Diplomatic Journey
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75">
          Register for upcoming conferences, events, workshops, and delegate
          opportunities organized by Rajshahi University Model United Nations
          Association.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#081C3A] transition hover:bg-white"
          >
            Register Now
          </Link>

          <Link
            href="#conference"
            className="border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            View Conferences
          </Link>
        </div>
      </div>
    </section>
  );
}