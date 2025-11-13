"use client";

import React, { useState } from "react";

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import GitHubIcon from "@/components/icons/github-icon";
import InstagramIcon from "@/components/icons/instagram-icon";

export function ContactForm() {
  // Track form values and submission status
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  type Status = "idle" | "sending" | "success" | "error";
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Handle text field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // simple client-side validation
  const isValid = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setErrorMsg("Please enter your first and last name.");
      return false;
    }
    // ✅ email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Please include a brief message.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🚫 stop if invalid
    if (!isValid()) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 text-violet-900"
        >
          Contact
        </Typography>
      </div>

      <div>
        <Card
          shadow={true}
          className="container mx-auto border border-gray/50 bg-violet-50"
        >
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            {/* LEFT: Contact Info */}
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-violet-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-400"
              >
                Fill out the form and I will get back to you as soon as
                possible.
              </Typography>
              <div className="flex gap-5 mb-3 text-gray-200">
                <PhoneIcon className="h-6 w-6 " />
                <Typography variant="h6">+1 (714) 316-3803</Typography>
              </div>
              <div className="flex gap-5 mb-3 text-gray-200">
                <EnvelopeIcon className="h-6 w-6" />
                <Typography variant="h6">
                  michael.kibler.dev@gmail.com
                </Typography>
              </div>

              <div className="flex items-center gap-5 mt-6 text-gray-100">
                <a
                  href="https://www.linkedin.com/in/michael-kibler-11369519b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/mkibler7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.instagram.com/michael_pkibler"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="firstName"
                    placeholder="eg. John"
                    value={formData.firstName}
                    onChange={handleChange}
                    containerProps={{ className: "!min-w-full mb-8 md:mb-0" }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="lastName"
                    placeholder="eg. Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    containerProps={{ className: "!min-w-full " }}
                  />
                </div>
                <div>
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="eg. johndoe@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    containerProps={{ className: "!min-w-full mb-8" }}
                  />
                </div>

                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  placeholder="eg. Hello there!"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  containerProps={{ className: "!min-w-full mb-8" }}
                />

                <div className="w-full flex justify-end">
                  <Button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    className={`w-full md:w-fit ${
                      status === "success"
                        ? "bg-gray-400"
                        : status === "error"
                        ? "bg-red-600"
                        : "bg-violet-900 hover:bg-violet-700"
                    }`}
                    size="md"
                  >
                    {status === "sending"
                      ? "Sending..."
                      : status === "success"
                      ? "Message Delivered"
                      : status === "error"
                      ? "Try Again"
                      : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
