export interface Project {
  id: string;
  title: string;
  desc: string;
  images: string[];
  href: string;
  skills: string[];
}

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   img: string;
//   skills: string[];
//   href: string;
// }

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
    desc: "A fullstack application built on the MEAN stack to recommend travel packages.",
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
    desc: "An Android application developed to allow user's to record data related to their weight goals.",
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
    desc: "A simple CLI application used to show which prerequisite classes are needed before enrolling in a specific class.",
    href: "https://github.com/mkibler7/Course-Prerequisite-Manager",
    skills: ["C++", "Visual Studio", "SQLite", "MVC Architecture", "GitHub"],
  },
  {
    id: "portfolio",
    images: ["/image/portfolio1.jpg"],
    title: "Porfolio Website",
    desc: "A website built to showcase my projects and highlight my skills.",
    href: "http://michaelkibler.dev/",
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
    ],
  },
];
