import Link from "next/link";

const newsItems = [
  {
    date: "August 2026",
    title: "NBMUN Season V Registration Opening Soon",
    description:
      "Prepare for an exciting diplomatic experience with committees, debate, negotiation, and global dialogue.",
  },
  {
    date: "July 2026",
    title: "RUMUNA Announces Upcoming Events",
    description:
      "Rajshahi University Model United Nations Association is preparing new academic and diplomatic programs.",
  },
  {
    date: "June 2026",
    title: "Delegate Resources Updated",
    description:
      "Study guides, rules of procedure, and delegate preparation materials will be available for participants.",
  },
];

export default function LatestNews() {
  return (
    <section id="latest-news" className="bg-[#F7F1DE] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#B28A18]">
            Updates
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#081C3A] md:text-5xl">
            Latest News
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Stay updated with the latest announcements, events, and resources
            from RUMUNA.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="border border-[#D4AF37]/30 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="mb-4 inline-block bg-[#081C3A] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                {item.date}
              </p>

              <h3 className="mb-4 font-serif text-2xl font-bold leading-snug text-[#081C3A]">
                {item.title}
              </h3>

              <p className="mb-6 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              <Link
                href="#contact"
                className="text-sm font-bold uppercase tracking-[0.15em] text-[#A77D00] transition hover:text-[#081C3A]"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}