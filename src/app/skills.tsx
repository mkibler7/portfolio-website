"use client";

import { Typography } from "@material-tailwind/react";
import CodingIcon from "../components/icons/coding-icon";
import ToolIcon from "../components/icons/tool-icon";
import BooksIcon from "../components/icons/books-icon";
import { ServerStackIcon as ServerIcon } from "@heroicons/react/24/outline";
import { PROJECTS, Project } from "../data/projectsData";

import SkillCard from "../components/skill-card";

interface SkillsProps {
  hoveredProjectId: string | null;
  setHoveredSkill: (skill: string | null) => void;
}

const SKILLS = [
  {
    icon: CodingIcon,
    title: "Languages",
    children: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Java",
      "C++",
      "Python",
      "SQL",
      "HTML5",
      "CSS3",
      "XML",
    ],
  },
  {
    icon: BooksIcon,
    title: "Frontend & Mobile",
    children: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Material Tailwind",
      "Bootstrap",
      "Heroicons",
      "Android Studio",
    ],
  },
  {
    icon: ServerIcon,
    title: "Backend & Auth",
    children: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MVC Architecture",
      "Separation of Concerns",
      "JWT Authentication",
      "Access/Refresh Tokens",
      "HttpOnly Cookies",
      "bcrypt",
      "Rate Limiting",
      "Email Verification",
      "Resend",
    ],
  },
  {
    icon: ToolIcon,
    title: "Data & Tools",
    children: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "MySQL",
      "SQLite",
      "Schema Design",
      "Data Seeding",
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "NPM",
      "Postman",
      "Vercel",
      "Render",
      "Agile / Scrum",
    ],
  },
];

export function Skills({ hoveredProjectId, setHoveredSkill }: SkillsProps) {
  return (
    <section id="skills" className="pt-8 px-6 scroll-mt-24">
      <div>
        <div className="container mx-auto mb-5 text-center">
          <Typography
            color="blue-gray"
            className="mb-2 font-bold uppercase text-violet-900 tracking-wide"
          >
            my skills
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-4">
            What I bring to the table
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:w-10/12"
          >
            I&apos;m a developer that loves to learn. I&apos;m extremely
            adaptable and excel at quickly learning different tools and
            strategies for solving problems.
          </Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {SKILLS.map((props, idx) => (
            <SkillCard
              key={idx}
              {...props}
              hoveredProjectId={hoveredProjectId}
              setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
