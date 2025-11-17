export interface Project {
  id: string;
  title: string;
  desc: string;
  images: string[];
  href: string;
  skills: string[];
}

export const PROJECTS = [
  {
    id: "travlr",
    images: [
      "/image/travlr1.jpg",
      "/image/travlr2.jpg",
      "/image/travlr3.jpg",
      "/image/travlr4.jpg",
      "/image/travlr5.jpg",
      "/image/travlr6.jpg",
      "/image/travlr7.jpg",
    ],
    title: "Travlr",
    desc: "A full-stack application built on the MEAN stack to recommend personalized travel packages.",
    href: "https://github.com/mkibler7/Travlr-Getaways?tab=readme-ov-file",
    skills: [
      "Angular",
      "MongoDB",
      "Node.js",
      "MVC Architecture",
      "REST APIs",
      "Express.js",
      "Bootstrap",
      "NPM",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "GitHub",
      "VS Code",
    ],
  },
  {
    id: "weight-wise",
    images: [
      "/image/weight-wise1.jpg",
      "/image/weight-wise2.jpg",
      "/image/weight-wise3.jpg",
      "/image/weight-wise4.jpg",
    ],
    title: "Weight-Wise",
    desc: "An Android application that allows users to record and track data related to their weight-loss goals.",
    href: "https://github.com/mkibler7/Weight-Wise",
    skills: [
      "SQLite",
      "Android Studio",
      "Java",
      "XML",
      "MVC Architecture",
      "GitHub",
    ],
  },
  {
    id: "course-planner",
    images: [
      "/image/course-planner1.jpg",
      "/image/course-planner2.jpg",
      "/image/course-planner3.jpg",
    ],
    title: "Course Planner",
    desc: "A CLI application that displays required prerequisite courses before enrolling.",
    href: "https://github.com/mkibler7/Course-Prerequisite-Manager",
    skills: ["C++", "Visual Studio", "SQLite", "MVC Architecture", "GitHub"],
  },
  {
    id: "portfolio",
    images: [
      "/image/portfolio1.jpg",
      "/image/portfolio2.jpg",
      "/image/portfolio3.jpg",
      "/image/portfolio4.jpg",
      "/image/portfolio5.jpg",
    ],
    title: "Portfolio Website",
    desc: "A personal portfolio website designed to highlight my projects, skills, and experience.",
    href: "https://github.com/mkibler7/portfolio-website",
    skills: [
      "React",
      "Node.js",
      "REST APIs",
      "Express.js",
      "Tailwind CSS",
      "NPM",
      "TypeScript",
      "HTML5",
      "CSS3",
      "GitHub",
      "Heroicons",
      "Material Tailwind",
      "Vercel",
      "Resend",
      "VS Code",
      "Next.js",
    ],
  },
];
