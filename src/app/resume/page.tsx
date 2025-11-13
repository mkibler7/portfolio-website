"use client";

import { Button, Typography } from "@material-tailwind/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Navbar from "@/components/navbar";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-8">
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2"
          >
            My Resume
          </Typography>
          <Typography
            variant="lead"
            className="text-gray-600 max-w-2xl mx-auto"
          >
            View or download my professional resume below.
          </Typography>
        </div>

        {/* Inline PDF Viewer */}
        <div className="w-full max-w-4xl h-[80vh] shadow-xl border border-indigo-100 rounded-xl overflow-hidden">
          <iframe
            src="/resume.pdf"
            className="w-full h-full border-none"
            title="Michael Kibler Resume"
          />
        </div>

        {/* Download Button */}
        <div className="mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button
              size="lg"
              className="flex items-center gap-2 px-6 py-3 btn-primary"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
