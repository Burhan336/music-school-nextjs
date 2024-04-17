import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import courseData from "../data/courseData.json";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

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
            <CardContainer className="inter-var ">
              <CardBody className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[30%] sm:w-[20rem] h-auto rounded-xl p-12 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  <div className="mt-6">
                    <h1> {course.title}</h1>
                    <p className="text-base font-light">{course.instructor}</p>
                    <p className="text-sm font-thin">{course.description}</p>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
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
