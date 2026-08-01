export interface Conference {
  id: number;
  title: string;
  edition: string;
  date: string;
  venue: string;
  theme: string;
  image: string;
  description: string;
  registrationLink?: string;
}

export const conferences: Conference[] = [
  {
    id: 1,
    title: "Rajshahi University Model United Nations",
    edition: "Season V",
    date: "2026",
    venue: "University of Rajshahi",
    theme: "Local Heritage Inspiring Global Dialogue",
    image: "/conferences/rumuna-season-v.jpg",
    description:
      "A distinguished platform where young delegates engage in diplomacy, negotiation and meaningful global dialogue.",
    registrationLink: "",
  },
  {
    id: 2,
    title: "Rajshahi University Model United Nations",
    edition: "Season IV",
    date: "2025",
    venue: "University of Rajshahi",
    theme: "Diplomacy for a Sustainable Future",
    image: "/conferences/rumuna-season-iv.jpg",
    description:
      "A national Model United Nations conference focused on leadership, international relations and sustainable development.",
    registrationLink: "",
  },
];