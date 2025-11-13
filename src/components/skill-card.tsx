import { Card, CardBody, Typography } from "@material-tailwind/react";
import { PROJECTS, Project } from "../data/projectsData";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: string[];
  hoveredProjectId?: string | null;
  setHoveredSkill?: (skill: string | null) => void;
}

export function SkillCard({
  icon: Icon,
  title,
  children,
  hoveredProjectId,
  setHoveredSkill,
}: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-violet-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6 shadow-sm" strokeWidth={2} />
        </div>
        <Typography variant="h5" className="text-blue-gray-900">
          {title}
        </Typography>

        <div className="mx-auto my-3 h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500/20 to-transparent rounded-full"></div>

        {/* Map through array of skills */}
        <ul className="flex flex-wrap justify-center gap-x-3 gap-y-4 px-4">
          {children.map((skill, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredSkill?.(skill)}
              onMouseLeave={() => setHoveredSkill?.(null)}
              className={`rounded-full border text-sm font-medium py-2 px-4 shadow-sm select-none
    transition-all duration-300 ease-in-out
    ${
      hoveredProjectId &&
      PROJECTS.some(
        (p) => p.id === hoveredProjectId && p.skills.includes(skill)
      )
        ? "bg-violet-700 text-white border-violet-700 scale-105 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
        : "bg-violet-100 border-violet-300 text-violet-800 hover:bg-violet-800 hover:text-violet-100"
    }`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
