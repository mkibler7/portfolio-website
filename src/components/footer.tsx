"use client";
import { Typography, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20 bg-violet-50">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Website crafted by{" "}
            <a
              href="https://www.linkedin.com/in/michael-kibler-11369519b/"
              target="_blank"
            >
              Michael Kibler
            </a>
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
