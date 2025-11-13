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
  images: string[];
  title: string;
  desc: string;
  href: string;
  onImageEnter?: () => void;
  onImageLeave?: () => void;
  onImageMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function ProjectCard({
  images,
  title,
  desc,
  href,
  onImageEnter,
  onImageLeave,
  onImageMove,
}: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={true} className="bg-violet-50 h-[525px]">
      <CardHeader
        floated={false}
        className="mx-0 mt-0 rounded-b-none rounded-xl overflow-hidden h-[clamp(180px,35vw,260px)]"
        onMouseEnter={onImageEnter}
        onMouseLeave={onImageLeave}
        onMouseMove={onImageMove}
      >
        {/* Project Image */}
        <Image
          src={images[0]}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </CardHeader>
      <CardBody className="p-0 flex flex-col items-center justify-between flex-grow">
        <div className="flex flex-col items-center mt-8">
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
          <Button
            size="sm"
            className="mt-auto mb-4 bg-violet-900 hover:bg-violet-600"
          >
            see details
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
