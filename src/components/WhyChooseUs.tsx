"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Advanced Security",
    description:
      "Our top-notch security measures ensure that your data is always safe and protected. We use the latest encryption technologies and implement strict access controls to safeguard your sensitive information.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Security.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Seamless Integration",
    description:
      "Easily integrate our platform with your existing tools and systems. Our seamless integration capabilities help you automate tasks, streamline processes, and improve overall efficiency.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Integration.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "24/7 Support",
    description:
      "Get round-the-clock support from our dedicated team of experts. Whether you have questions, need assistance, or encounter issues, we're here to provide prompt and reliable support whenever you need it.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Support.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Scalability",
    description:
      "Our scalable solutions grow with your business. Whether you're a startup or a large enterprise, our platform can handle your growing needs, ensuring smooth operations and optimal performance at any scale.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Scalability.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "User-Friendly Interface",
    description:
      "Experience a user-friendly interface designed for simplicity and ease of use. Our intuitive interface makes navigation seamless, allowing you to focus on your work without any distractions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/userfriendly.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
