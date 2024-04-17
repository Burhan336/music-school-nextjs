"use client";
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Google Workspace",
    description:
      "A suite of productivity tools designed for collaboration and communication in the workplace.",
    link: "https://workspace.google.com/",
  },
  {
    title: "Salesforce",
    description:
      "A customer relationship management (CRM) platform that helps businesses manage sales, marketing, and customer support.",
    link: "https://www.salesforce.com/",
  },
  {
    title: "Amazon Web Services (AWS)",
    description:
      "A comprehensive cloud computing platform providing a wide range of services for businesses, developers, and individuals.",
    link: "https://aws.amazon.com/",
  },
  {
    title: "Microsoft Azure",
    description:
      "A cloud computing service offering a variety of tools and services for building, deploying, and managing applications.",
    link: "https://azure.microsoft.com/",
  },
  {
    title: "GitHub",
    description:
      "A platform for version control and collaboration for software development projects using Git.",
    link: "https://github.com/",
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Upcoming Webinars
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}

export default UpcomingWebinars;
