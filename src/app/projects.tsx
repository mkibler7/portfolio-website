"use client";

import ProjectCard from "../components/project-card";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `/image/travlr1.jpg`,
    title: "Travlr",
    desc: "A fullstack application built on the MEAN stack to recommend travel packages.",
    href: "https://github.com/mkibler7/Travlr-Getaways?tab=readme-ov-file",
  },
  {
    img: `/image/weight-wise1.jpg`,
    title: "Weight-Wise",
    desc: "An Anroid application developed to allow user's to record data related to their weight goals.",
    href: "https://github.com/mkibler7/Weight-Wise",
  },
  {
    img: `/image/course-planner1.jpg`,
    title: "Course Planner",
    desc: "A simple CLI application used to show which prerequisite classes are needed before enrolling in a specific class.",
    href: "https://github.com/mkibler7/Course-Prerequisite-Manager",
  },
  {
    img: `/image/portfolio1.jpg`,
    title: "Porfolio Website",
    desc: "A website built to showcase my projects and highlight my skills.",
    href: "http://localhost:3000/",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
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
      <div className="container mx-auto  grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
