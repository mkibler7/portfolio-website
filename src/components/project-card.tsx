"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  href: string;
}

export function ProjectCard({ img, title, desc, href }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={true} className="bg-violet-50">
      <CardHeader
        floated={false}
        className="mx-0 mt-0 rouded-xl overflow-hidden h-[clamp(180px,35vw,260px)]"
      >
        {/* Project Image */}
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0 flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col items-center ">
          {/* Project Title */}
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>

          {/* Project Description */}
          <Typography className="mb-6 mx-4 font-normal !text-gray-500">
            {desc}
          </Typography>
        </div>

        {/* Project Routing */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4"
        >
          <Button color="gray" size="sm" className="mt-auto mb-4">
            see details
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
