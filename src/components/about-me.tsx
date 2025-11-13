"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export default function AboutMe() {
  return (
    <section id="about" className="px-6 md:px-12 pt-28 pb-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE — PERFECT, RESPONSIVE, NO CLIPPING */}
        <div className="flex justify-center xl:pr-10">
          <div
            className="
      relative 
      w-[320px] sm:w-[420px] md:w-[520px] lg:w-[600px]
      h-[360px] sm:h-[460px] md:h-[550px] lg:h-[600px]
      overflow-visible
    "
          >
            {/* CENTER IMAGE */}
            <div
              className="
        absolute left-1/2 -translate-x-1/2 top-0
        z-20 rounded-xl shadow-2xl overflow-hidden
        transition-all duration-500
        hover:scale-105
      "
            >
              <Image
                src="/image/dogs.jpg"
                alt="Dogs"
                width={600}
                height={900}
                className="
          object-cover 
          w-[180px] sm:w-[240px] md:w-[300px] lg:w-[340px]
          rounded-xl
        "
              />
            </div>

            {/* LEFT IMAGE */}
            <div
              className="
        absolute 
        bottom-[6rem] sm:bottom-[7rem] md:bottom-[8rem]
        left-[-10%] sm:left-[-12%] md:left-[-14%] lg:left-[-16%]
        -rotate-6
        z-10 overflow-hidden rounded-xl shadow-xl
        transition-all duration-500
        hover:scale-[1.12] hover:-translate-x-5 hover:-translate-y-2 hover:-rotate-12
      "
            >
              <Image
                src="/image/snowboard.jpg"
                alt="Snowboarding"
                width={500}
                height={400}
                className="
          object-cover
          w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px]
          rounded-xl
        "
              />
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
        absolute 
        bottom-[6rem] sm:bottom-[7rem] md:bottom-[8rem]
        right-[-10%] sm:right-[-12%] md:right-[-14%] lg:right-[-16%]
        rotate-6
        z-10 overflow-hidden rounded-xl shadow-xl
        transition-all duration-500
        hover:scale-[1.12] hover:translate-x-5 hover:-translate-y-2 hover:rotate-12
      "
            >
              <Image
                src="/image/cliff-jump.jpg"
                alt="Cliff Jumping"
                width={500}
                height={400}
                className="
          object-cover
          w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px]
          rounded-xl
        "
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — ABOUT TEXT */}
        <div className="space-y-6 lg:pl-10">
          <Typography variant="h2" color="blue-gray">
            About Me
          </Typography>

          <Typography className="font-normal text-gray-600 leading-relaxed max-w-lg">
            Outside of software development, I&apos;m extremely passionate about
            lifting weights, music, snowboarding, and my dogs. I value
            discipline, creativity, and turning ideas into real, tangible
            results.
          </Typography>

          <Typography className="font-normal text-gray-600 leading-relaxed max-w-lg">
            My goals include starting up a family in the next 5 years and making
            my first real estate purchase. I also plan on growing as a developer
            and contributing to impactful teams and projects.
          </Typography>
        </div>
      </div>
    </section>
  );
}
