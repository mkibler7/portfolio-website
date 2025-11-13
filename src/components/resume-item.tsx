"use client";

import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  degree: React.ReactNode;
  school: React.ReactNode;
}

export function ResumeItem({ icon: Icon, degree, school }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card className="h-12 w-12 bg-violet-900 text-white shrink-0 items-center justify-center !rounded-lg">
        <Icon className="h-8 w-8" strokeWidth={2} />
      </Card>
      <div className="flex flex-col leading-tight">
        <Typography className="w-full font-normal !text-gray-500">
          {degree}
        </Typography>
        <Typography className="w-full font-normal !text-gray-500">
          {school}
        </Typography>
      </div>
    </div>
  );
}

export default ResumeItem;
