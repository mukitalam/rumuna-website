const executiveMembers = [
  {
    name: "Arafat Rahman",
    position: "Director of Programs",
    image: "/members/executive-1.jpg",
  },
  {
    name: "Maliha Tasnim",
    position: "Director of Communications",
    image: "/members/executive-2.jpg",
  },
  {
    name: "Tanvir Ahmed",
    position: "Director of Finance",
    image: "/members/executive-3.jpg",
  },
];

const advisors = [
  {
    name: "Dr. Md. Hasan Ali",
    position: "Faculty Advisor",
    image: "/members/advisor-1.jpg",
  },
  {
    name: "Dr. Nusrat Jahan",
    position: "Faculty Moderator",
    image: "/members/advisor-2.jpg",
  },
];

const formerLeaders = [
  {
    name: "Sakib Mahmud",
    position: "Former President",
    tenure: "2023-2024",
    image: "/members/former-1.jpg",
  },
  {
    name: "Raisa Tabassum",
    position: "Former Secretary General",
    tenure: "2023-2024",
    image: "/members/former-2.jpg",
  },
  {
    name: "Fahim Hossain",
    position: "Former President",
    tenure: "2022-2023",
    image: "/members/former-3.jpg",
  },
];

function MemberCard({
  name,
  position,
  image,
  tenure,
}: {
  name: string;
  position: string;
  image: string;
  tenure?: string;
}) {
  return (
    <article className="bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mx-auto mb-5 h-36 w-36 overflow-hidden rounded-full border-4 border-[#D4AF37] bg-slate-100">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <h3 className="font-serif text-2xl font-bold text-[#081C3A]">
        {name}
      </h3>

      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#B28A18]">
        {position}
      </p>

      {tenure && <p className="mt-3 text-sm text-slate-600">Tenure: {tenure}</p>}
    </article>
  );
}

export default function OrganizationSections() {
  return (
    <>
      <section id="executive" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#B28A18]">
              Executive Committee
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#081C3A] md:text-5xl">
              Working Team of RUMUNA
            </h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {executiveMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section id="faculty-advisors" className="bg-[#F7F1DE] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#B28A18]">
              Faculty Advisors
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#081C3A] md:text-5xl">
              Guidance Behind Our Journey
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-7 sm:grid-cols-2">
            {advisors.map((advisor) => (
              <MemberCard key={advisor.name} {...advisor} />
            ))}
          </div>
        </div>
      </section>

      <section id="former-leaders" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#B28A18]">
              Former Leaders
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#081C3A] md:text-5xl">
              Legacy of Leadership
            </h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {formerLeaders.map((leader) => (
              <MemberCard key={leader.name} {...leader} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}