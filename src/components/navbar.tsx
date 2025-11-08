"use client";

import React from "react";
import LinkedInIcon from "./icons/linkedin-icon";
import GitHubIcon from "./icons/github-icon";
import ResumeIcon from "./icons/resume-icon";

import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/michael-kibler-11369519b/",
    external: true,
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    href: "https://github.com/mkibler7",
    external: true,
  },
  {
    name: "Resume",
    icon: ResumeIcon,
    href: "#",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li className="w-full">
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium hover:text-violet-600 text-violet-900 justify-center"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    // wrap your top bar + Collapse in a relative container
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="relative">
        {/* top row */}
        <div className="container mx-auto flex items-center justify-between lg:grid lg:grid-cols-3">
          {/* Left: Logo */}
          <Typography
            as="a"
            href="/"
            className="text-lg font-bold text-violet-900 tracking-wide hover:text-violet-700 transition-colors"
          >
            Kibler
          </Typography>

          {/* Center: Social Links (desktop) */}
          <ul className="hidden lg:flex items-center justify-center gap-8 mr-5">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>

          {/* Right: Buttons (desktop) */}
          <div className="ml-5 hidden lg:flex items-center justify-end gap-2">
            <Button
              variant="text"
              className="hover:text-violet-700 text-violet-900"
            >
              Projects
            </Button>
            <Button
              variant="text"
              className="text-violet-900 hover:text-violet-600"
            >
              About
            </Button>
            <Button
              variant="filled"
              className="bg-violet-900 hover:bg-violet-600"
            >
              Contact
            </Button>
          </div>

          {/* Mobile toggle */}
          <IconButton
            variant="text"
            onClick={() => setOpen((cur) => !cur)}
            className="ml-auto inline-block lg:hidden text-violet-900 hover:text-violet-600"
            aria-label="Open navigation menu"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </IconButton>
        </div>

        {/* Floating dropdown: absolute, right aligned, no page-wide background */}
        <Collapse
          open={open}
          className="absolute right-2 top-full w-auto bg-transparent shadow-none"
        >
          <div className="mt-3 w-[18rem] rounded-xl border border-gray-100 bg-white p-4">
            <ul className="flex flex-col gap-4 items-center text-center">
              {NAV_MENU.map(({ name, icon: Icon, href }, index) => (
                <li
                  key={name}
                  className={`w-full ${
                    index !== NAV_MENU.length - 1
                      ? "border-b border-gray-200/50"
                      : "border-b border-gray-200/30"
                  } py-2`}
                >
                  <NavItem href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2 items-center">
              <Button
                variant="text"
                className="text-violet-900 hover:text-violet-600 w-full"
              >
                Projects
              </Button>
              <Button
                variant="text"
                className="text-violet-900 hover:text-violet-600 w-full"
              >
                About
              </Button>
              <Button
                variant="filled"
                className="w-full bg-violet-900 hover:bg-violet-600 !shadow-none"
              >
                Contact
              </Button>
            </div>
          </div>
        </Collapse>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
