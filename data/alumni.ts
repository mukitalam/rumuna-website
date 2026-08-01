export interface AlumniMember {
  id: number;
  name: string;
  formerPosition: string;
  session: string;
  image: string;
  currentRole?: string;
  organization?: string;
  linkedin?: string;
}

export const alumniMembers: AlumniMember[] = [
  {
    id: 1,
    name: "Alumni Name",
    formerPosition: "Former President",
    session: "2022–2023",
    image: "/members/alumni-1.jpg",
    currentRole: "Current Designation",
    organization: "Organization Name",
    linkedin: "",
  },
  {
    id: 2,
    name: "Alumni Name",
    formerPosition: "Former General Secretary",
    session: "2021–2022",
    image: "/members/alumni-2.jpg",
    currentRole: "Current Designation",
    organization: "Organization Name",
    linkedin: "",
  },
];