const members = [
  {
    name: "Md. Abdullah Al Noman",
    position: "President",
    image: "/members/president.jpg",
  },
  {
    name: "Nusrat Jahan",
    position: "Vice President",
    image: "/members/vice-president.jpg",
  },
  {
    name: "Samiul Islam",
    position: "Secretary General",
    image: "/members/secretary-general.jpg",
  },
  {
    name: "Farhana Rahman",
    position: "Deputy Secretary General",
    image: "/members/deputy-secretary.jpg",
  },
  {
    name: "Tanvir Ahmed",
    position: "Director of Finance",
    image: "/members/finance.jpg",
  },
  {
    name: "Maliha Tasnim",
    position: "Director of Communications",
    image: "/members/communications.jpg",
  },
];

export default function GoverningBody() {
  return (
    <section id="governing-body" className="bg-[#F7F1DE] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#B28A18]">
            Governing Body
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#081C3A] md:text-5xl">
            Tenure 2025-2026
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Meet the leaders serving RUMUNA with dedication, diplomacy, and
            commitment to student leadership.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.name}
              className="bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-[#D4AF37] bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#081C3A]">
                {member.name}
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#B28A18]">
                {member.position}
              </p>

              <p className="mt-3 text-sm text-slate-600">
                Tenure: 2025-2026
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}