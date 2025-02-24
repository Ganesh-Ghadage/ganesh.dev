"use client";

import { Carousel } from "@/components/ui/carousel";
import { projects } from '../../shared/data.ts'

export function Project() {
  return (
    <div className="relative overflow-hidden w-full h-full py-10 z-10">
      <Carousel projects={projects} />
    </div>
  );
}
