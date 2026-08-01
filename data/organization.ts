export interface OrganizationMember {
  id: number;
  name: string;
  position: string;
  image: string;
  department?: string;
  tenure?: string;
  facebook?: string;
  linkedin?: string;
}

export const executiveMembers: OrganizationMember[] = [
  {
    id: 1,
    name: "Executive Member Name",
    position: "Executive Member",
    image: "/members/executive-1.jpg",
    department: "Department Name",
  },
  {
    id: 2,
    name: "Executive Member Name",
    position: "Executive Member",
    image: "/members/executive-2.jpg",
    department: "Department Name",
  },
];

export const facultyAdvisors: OrganizationMember[] = [
  {
    id: 1,
    name: "Faculty Advisor Name",
    position: "Chief Advisor",
    image: "/members/advisor-1.jpg",
    department: "Department Name",
  },
  {
    id: 2,
    name: "Faculty Advisor Name",
    position: "Faculty Advisor",
    image: "/members/advisor-2.jpg",
    department: "Department Name",
  },
];

export const formerLeaders: OrganizationMember[] = [
  {
    id: 1,
    name: "Former Leader Name",
    position: "Former President",
    tenure: "2023–2024",
    image: "/members/former-1.jpg",
  },
  {
    id: 2,
    name: "Former Leader Name",
    position: "Former General Secretary",
    tenure: "2023–2024",
    image: "/members/former-2.jpg",
  },
];