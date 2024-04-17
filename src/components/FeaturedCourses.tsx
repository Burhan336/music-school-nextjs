"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import courseData from "../data/courseData.json";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { BackgroundGradient } from "./ui/background-gradient";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-8 bg-gray-900 flex flex-col items-center justify-center">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-800 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow ">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  {/* <Link className="border" href={`/courses/${course.slug}`}> */}
                  <ButtonsCard>
                    <Link href={`/courses/${course.slug}`}>
                      <button className=" mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Learn More
                      </button>
                    </Link>
                  </ButtonsCard>
                  {/* </Link> */}
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center ">
        <Link href={"/courses"}>
          <HoverBorderGradient
            containerClassName="rounded-full "
            as="button"
            className="dark:bg-black bg-white text-white dark:text-white "
          >
            View all courses
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
