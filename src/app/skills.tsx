"use client";

import { Typography } from "@material-tailwind/react";
import CodingIcon from "../components/icons/coding-icon";
import ToolIcon from "../components/icons/tool-icon";
import BooksIcon from "../components/icons/books-icon";
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
      "Java",
      "SQL",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "C++",
      "Python",
      "XML",
    ],
  },
  {
    icon: ToolIcon,
    title: "Tools & Platforms",
    children: [
      "GitHub",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Next.js",
      "NPM",
      "REST APIs",
      "Agile / Scrum",
      "MVC Architecture",
      "Vercel",
      "VS Code",
      "Resend",
      "Android Studio",
    ],
  },
  {
    icon: BooksIcon,
    title: "Libraries & Frameworks",
    children: [
      "React",
      "Angular",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "Tailwind CSS",
      "Material Tailwind",
      "Heroicons",
    ],
  },
];

export function Skills({ hoveredProjectId, setHoveredSkill }: SkillsProps) {
  return (
    <section id="skills" className="px-8 mt-20 scroll-mt-32">
      <div className="container mx-auto mb-5 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase text-violet-900 tracking-wide"
        >
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I bring to the table
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m a developer that loves to learn. I am extremely adaptive and
          excel at picking up new tools or strategies that tackle specific
          problems.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard
            key={idx}
            {...props}
            hoveredProjectId={hoveredProjectId}
            setHoveredSkill={setHoveredSkill}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
