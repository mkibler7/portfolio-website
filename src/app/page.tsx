"use client";
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume/resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Navbar from "../components/navbar";
import Footer from "..//components/footer";
import { useState } from "react";
import AboutMe from "@/components/about-me";

export default function Portfolio() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Clients /> */}
      <Skills
        hoveredProjectId={hoveredProjectId}
        setHoveredSkill={setHoveredSkill}
      />
      <Projects
        hoveredSkill={hoveredSkill}
        setHoveredProjectId={setHoveredProjectId}
      />
      <Resume />
      <AboutMe />
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
