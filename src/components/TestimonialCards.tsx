"use client";

import { Boxes } from "./ui/background-boxes";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Using this platform has transformed how we collaborate as a team. It's intuitive, efficient, and has greatly improved our productivity.",
    name: "John Doe",
    title: "CEO, Tech Innovations Inc.",
  },
  {
    quote:
      "The seamless integration capabilities of this platform have made our workflow so much smoother. It's like everything just clicks together effortlessly.",
    name: "Jane Smith",
    title: "CTO, Digital Solutions Co.",
  },
  {
    quote:
      "I'm impressed by the level of security this platform provides. It gives us peace of mind knowing that our data is always protected.",
    name: "Mike Johnson",
    title: "VP of Operations, SecureTech",
  },
  {
    quote:
      "The 24/7 support team has been incredibly helpful whenever we've needed assistance. Their responsiveness is top-notch.",
    name: "Emily Brown",
    title: "Director of Customer Success, Global Enterprises",
  },
  {
    quote:
      "The scalability of this platform is amazing. It has easily accommodated our growing needs without any hiccups.",
    name: "Alex Rodriguez",
    title: "Founder, StartupX",
  },
];
function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <Boxes />
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          ></InfiniteMovingCards>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
