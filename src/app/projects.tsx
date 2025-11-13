"use client";

import ProjectCard from "../components/project-card";
import ProjectPreview from "@/components/project-preview";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { useState } from "react";
import { PROJECTS, Project } from "../data/projectsData";

interface ProjectsProps {
  hoveredSkill: string | null;
  setHoveredProjectId: (id: string | null) => void;
}

export function Projects({ hoveredSkill, setHoveredProjectId }: ProjectsProps) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return (
    <section id="projects" className="py-28 px-8">
      <div className="container mx-auto mb-[4.25rem] text-center">
        {/* Section Title */}
        <Typography variant="h2" color="blue-gray" className="mb-10">
          My Projects
        </Typography>

        {/* Section Description */}
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          From concept to deployment, I design and develop full-stack web and
          mobile applications that deliver real-world impact. Whether it&apos;s
          building modern, responsive interfaces or engineering robust backend
          systems, I create end-to-end solutions that bring ideas to life
          through clean design, performance, and scalability.
        </Typography>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((project, idx) => {
          const isHighlighted = hoveredSkill
            ? project.skills.includes(hoveredSkill)
            : false;

          // skill highlight handlers (whole card)
          const handleCardEnter = () => setHoveredProjectId(project.id);
          const handleCardLeave = () => setHoveredProjectId(null);

          const handleImageEnter = () => {
            setPreviewImages(project.images);
            setPreviewVisible(true);
          };

          const handleImageLeave = () => {
            setPreviewVisible(false);
          };

          const handleImageMove = (e: React.MouseEvent<HTMLDivElement>) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
          };

          return (
            <div
              key={idx}
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
              className={`rounded-2xl overflow-hidden group relative hover:-translate-y-1 hover:rotate-[0.5deg] transition-all duration-300 ${
                isHighlighted
                  ? "scale-[1.03] opacity-100 shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-transform duration-300 ease-out"
                  : hoveredSkill
                  ? "opacity-50 blur-[0.5px] transition-opacity duration-300 ease-out"
                  : "opacity-100 transition-all duration-300 ease-in-out"
              }`}
            >
              <div className="rounded-2xl overflow-hidden">
                <ProjectCard
                  {...project}
                  onImageEnter={handleImageEnter}
                  onImageLeave={handleImageLeave}
                  onImageMove={handleImageMove}
                />
              </div>
            </div>
          );
        })}
      </div>
      <ProjectPreview
        images={previewImages}
        position={cursorPos}
        visible={previewVisible}
      />
    </section>
  );
}

export default Projects;
