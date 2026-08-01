export interface GoverningBodyMember {
  id: number;
  name: string;
  position: string;
  tenure: string;
  image: string;
  department?: string;
  facebook?: string;
  linkedin?: string;
}

export const governingBodyMembers: GoverningBodyMember[] = [
  {
    id: 1,
    name: "Member Name",
    position: "President",
    tenure: "2025–2026",
    image: "/members/governing-president.jpg",
    department: "Department Name",
    facebook: "",
    linkedin: "",
  },
  {
    id: 2,
    name: "Member Name",
    position: "General Secretary",
    tenure: "2025–2026",
    image: "/members/governing-secretary.jpg",
    department: "Department Name",
    facebook: "",
    linkedin: "",
  },
  {
    id: 3,
    name: "Member Name",
    position: "Vice President",
    tenure: "2025–2026",
    image: "/members/governing-vice-president.jpg",
    department: "Department Name",
    facebook: "",
    linkedin: "",
  },
];