import { FiBookOpen, FiDownload, FiFileText } from "react-icons/fi";

const resources = [
  {
    title: "Study Guides",
    description:
      "Committee-wise study guides and background materials for delegates.",
    icon: FiBookOpen,
  },
  {
    title: "Rules of Procedure",
    description:
      "Official MUN rules, debate procedures, motions, and voting guidelines.",
    icon: FiFileText,
  },
  {
    title: "Delegate Resources",
    description:
      "Position paper format, research tips, country policy guide, and preparation materials.",
    icon: FiDownload,
  },
];

export default function Resources() {
  return (
    <section id="resources" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#B28A18]">
            Resources
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#081C3A] md:text-5xl">
            Delegate Resources
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Access important materials to prepare for RUMUNA conferences,
            committees, and diplomatic simulations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="border border-[#D4AF37]/30 bg-[#F7F1DE] p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#081C3A] text-2xl text-[#D4AF37]">
                  <Icon />
                </div>

                <h3 className="mb-4 font-serif text-2xl font-bold text-[#081C3A]">
                  {item.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <button
                  type="button"
                  className="text-sm font-bold uppercase tracking-[0.14em] text-[#A77D00] transition hover:text-[#081C3A]"
                >
                  Coming Soon
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}