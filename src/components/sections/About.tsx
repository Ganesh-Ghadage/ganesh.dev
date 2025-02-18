'use client'

import { SplineScene } from "@/components/ui/splite";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
 
export function AboutSection() {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 mt-8 md:mt-0 ">
        {/* Left content */}
        <div className="col-span-1 pl-1 md:pl-20 lg:pl-8 lg:pt-2 md:h-full z-10 flex flex-col justify-center">
          <h1 className="text-2xl pl-4 md:text-5xl font-bold bg-clip-text ">
            <TextGradientScroll text="Ganesh Ghadage" />
          </h1>

          <div className="min-h-[50vh] w-full relative ">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full mx-auto md:p-4 items-center">
                <div className="flex px-2 lg:p-2 text-xs md:text-lg lg:text-lg pt-14 md:pt-14 lg:pt-16 w-[20rem] md:w-[40rem] lg:w-[40rem] mx-auto bflex flex-col items-start justify-end pointer-events-auto">
                  <TextGradientScroll text="Result-driven and detail-oriented Frontend Developer with hands-on experience in building dynamic and responsive web applications using React.js, TypeScript, and modern web development tools. Skilled in crafting user-friendly interfaces, optimizing performance, and collaborating with cross-functional teams to deliver scalable solutions. Adept at integrating advanced features like chatbots and ensuring accessibility compliance. Strong problem-solving skills with a focus on leveraging emerging technologies to enhance user experiences. Experienced in Agile environments, dedicated to continuous learning, and passionate about contributing to impactful web development projects." />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right content */}
        <div className="col-span-1 md:h-[100vh] lg:h-full pt-22 md:pt-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full fade-bottom"
          />
        </div>
      </div>
  )
}