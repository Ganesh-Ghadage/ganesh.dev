"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll";

const content = [
      {
            title: "Senior System Engineer",
            description:
                  <div>
                        <h1 className="text-xl">Infosys Ltd.</h1>
                        <h1>Jul 22 - Current</h1>
                  </div>,
            content: (
                  <div className="h-full w-full  flex items-center justify-center text-white">
                  <img
                  src="https://contentstatic.techgig.com/thumb/msid-108083341,width-800,resizemode-4/Infosys-allows-employees-WFH-for-3-days-a-week.jpg?4034"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                  alt="linear board demo"
                  />
                  </div>
            ),
      },
      {
            title: "Team Collaboration",
            description:
                  "Collaborated with a cross-functional team of 5 frontend developers and other backend, database, and support teams to build a responsive and scalable insurance website.",
            content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                  Team Collaboration
                  </div>
            ),
      },
      {
            title: "Feature Development",
            description:
                  " Designed and developed key features of the website using React.js, TypeScript, and modern libraries such as Redux Toolkit, Axios, and Tailwind CSS to enhance user experience and functionality.",
            content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                  Feature Development
                  </div>
            ),
      },
      {
            title: "Chatbot Integration",
            description:
                  " Played a leading role in developing and integrating a chatbot feature to assist users with real-time insurance-related queries, leveraging third-party AI tools and frameworks to improve response accuracy and customer satisfaction.",
            content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                  Chatbot Integration
                  </div>
            ),
      },
      {
            title: "Performance Optimization",
            description: " Improved website performance by 30% by optimizing reusable components, streamlining state management, and implementing lazy loading for heavy assets.",
            content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                  Performance Optimization
                  </div>
            ),
      },
      {
            title: "Agile Collaboration",
            description:
                  "Participated in Agile ceremonies, including daily stand-ups, sprint planning, and retrospectives, contributing to a 15% increase in project delivery efficiency.",
            content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                  Agile Collaboration
                  </div>
            ),
      },
      {
            title: "Code Quality & Collaboration",
            description:
                  " Maintained code quality and collaboration by implementing Git workflows and conducting peer code reviews.",
            content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                  Code Quality & Collaboration
                  </div>
            ),
      },
      {
            title: "Key Impact Area",
            description:
                  <div className="flex flex-col gap-2">
                        <h1><b>User-Centric Design</b> Delivered an intuitive chatbot feature, reducing user inquiry resolution time by 20%</h1>
                        <h1><b>Collaboration</b> Actively supported backend and database teams to streamline API integration, reducing development bottlenecks.</h1>
                        <h1><b>Innovation</b> Proposed and implemented component-level optimizations that decreased development turnaround time by 25%.</h1>
                  </div>,
            content: (
                  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                  Key Impact Area
                  </div>
            ),
      },
];

export function Work() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
