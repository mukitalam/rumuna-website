export interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  dateTime: string;
  time: string;
  startDateTime: string;
  location: string;
  image: string;
  category: string;
  detailsLink: string;
  isPublished: boolean;
  displayOrder: number;
}

export const events: EventItem[] = [
  {
    id: 1,
    title: "Diplomatic Leadership Workshop",
    description:
      "Develop negotiation, public-speaking and diplomatic communication skills through interactive sessions.",
    date: "15 August 2026",
    dateTime: "2026-08-15",
    time: "10:00 AM",
    startDateTime: "2026-08-15T10:00:00+06:00",
    location: "University of Rajshahi",
    image: "/event-1.jpg",
    category: "Workshop",
    detailsLink: "#contact",
    isPublished: true,
    displayOrder: 1,
  },
  {
    id: 2,
    title: "Model UN Training Session",
    description:
      "A practical training session covering committee procedures, position papers and resolution writing.",
    date: "12 September 2026",
    dateTime: "2026-09-12",
    time: "2:30 PM",
    startDateTime: "2026-09-12T14:30:00+06:00",
    location: "RUMUNA Secretariat",
    image: "/event-2.jpg",
    category: "Training",
    detailsLink: "#contact",
    isPublished: true,
    displayOrder: 2,
  },
  {
    id: 3,
    title: "International Affairs Dialogue",
    description:
      "Students and emerging leaders discuss contemporary international issues and explore possible solutions.",
    date: "10 October 2026",
    dateTime: "2026-10-10",
    time: "3:00 PM",
    startDateTime: "2026-10-10T15:00:00+06:00",
    location: "Senate Building, RU",
    image: "/event-3.jpg",
    category: "Dialogue",
    detailsLink: "#contact",
    isPublished: true,
    displayOrder: 3,
  },
];