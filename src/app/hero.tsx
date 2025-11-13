"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <header className="bg-violet-50 p-8">
      {/* Text Section */}
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="relative inline-block mb-4 lg:text-5xl !leading-tight text-3xl text-indigo-900"
          >
            <span className="bg-gradient-to-r from-violet-900 to-indigo-600 bg-clip-text text-transparent">
              Hello, I&apos;m Michael Kibler.
            </span>
            <div className="mx-auto mt-3 h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500/70 to-transparent rounded-full"></div>
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-4xl !leading-tight text-3xl text-indigo-800"
          >
            Software Engineer
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Californa-based developer. <br /> I build create scalable,
            user-focused software with clean, maintainable code.
          </Typography>
        </div>
        {/* Portrait Section */}
        <div
          className={`relative mx-auto aspect-square w-44 sm:w-72 lg:w-80 hover:scale-[1.25] ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
          } transition-[opacity,transform] duration-[3000ms] ease-out`}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full bg-indigo-400/30
                  -translate-x-6 translate-y-5"
          ></div>
          <div
            className="pointer-events-none absolute inset-0 rounded-full bg-violet-500/30
                  translate-x-10 translate-y-10"
          ></div>
          <Image
            width={1024}
            height={1024}
            alt="Michael Kibler portriat"
            src={`/image/self-portrait.jpg`}
            className="relative size-full rounded-full object-cover"
            priority
            placeholder="blur"
            blurDataURL={`/image/self-portrait-blur.jpg`}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </header>
  );
}
