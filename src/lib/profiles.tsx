import type { ReactNode } from "react";

export type Profile = {
  name: string;
  role: string;
  description: string;
  side: "left" | "right";
  bio: ReactNode;
  technologies: string[];
  cv: string;
  github: string;
  linkedin: string;
  email: string;
};

export const profiles: Record<string, Profile> = {
  Parham: {
    name: "Parham Saeednia",
    role: "Backend Engineer",
    description: "Backend Engineer specialized in scalable architectures, Nest.js, Docker, and Microservices.",
    side: "left",
    bio: (
      <>
        Seasoned Backend Engineer adept at designing and implementing <b>scalable</b> server <b>architectures</b>.
        Skilled in <b>Node JS</b>, database management, and <b>API development</b> to ensure optimal{" "}
        <b>performance</b> and reliability. A results-oriented professional committed to delivering efficient
        backend solutions for complex applications.
      </>
    ),
    technologies: ["Nest.js", "Docker", "Git", "Microservices"],
    cv: "Parham-Saeednia.pdf",
    github: "https://github.com/parhamsaeednia",
    linkedin: "https://www.linkedin.com/in/parham-saeednia-a88a30196/",
    email: "saeedniaparham@gmail.com",
  },
  Parsa: {
    name: "Parsa Saeednia",
    role: "Frontend Engineer",
    description: "Frontend Engineer skilled in Vue.js, Next.js, TypeScript, and TailwindCSS.",
    side: "right",
    bio: (
      <>
        Results-driven Frontend Engineer with a passion for crafting seamless user interfaces for <b>+4 years</b>.
        Proficient in modern web technologies Such as <b>Vue.JS</b> & <b>ReactJS</b> to obtain the best looking
        platforms while maintaining the fastest performance
      </>
    ),
    technologies: ["Vue.js", "Next.js", "Typescript", "TailwindCSS", "Git"],
    cv: "Parsa-Saeednia.pdf",
    github: "https://github.com/parsasaeednia",
    linkedin: "https://www.linkedin.com/in/parsa-saeednia-5a11a6174/",
    email: "p.parsa31@gmail.com",
  },
};
