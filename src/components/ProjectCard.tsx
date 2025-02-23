
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectInterface } from '@/shared/interface.ts';

function ProjectCard({project} : {project: ProjectInterface}) {
  return (
      <div className='h-full w-full bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 relative z-50 flex flex-col flex-1 overflow-hidden'>
          <div className='flex flex-col '>
            <h4 className="flex flex-col gap-2 items-center md:text-2xl text-neutral-600 dark:text-neutral-100 bg-gray-100 dark:bg-neutral-900 p-4 font-bold text-center mb-8">
              <span className="md:text-xl w-fit px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                {project.title}
              </span>
              <span className='text-sm md:text-lg'>
                {project.desciption.title}
              </span>
            </h4>
            <div className="flex justify-center items-center">
              {project.images && project.images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt="project images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 p-4 flex flex-col gap-y-2  mx-auto h-[50vh] md:h-fit overflow-y-auto">
              {project.desciption.point.map((pnt, idx) => (
                <p className="text-sm text-neutral-600 dark:text-neutral-100" key={idx}>
                  {pnt}
                </p>
              ))}
            </div>
          </div>
          <div className={`gap-4 flex ${project.link ? "justify-between" : "justify-end" } p-4 bg-gray-100 dark:bg-neutral-900`}>
            {project.link && <Button
              variant="secondary"
              className="w-28 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300"
            >
              <a href={project.link} target='_blank'>Live Demo</a>
            </Button>}
            <Button
              variant="default"
              className="w-28 bg-black text-white dark:bg-white dark:text-black border border-black"
            >
              <a href={project.gitLink} target='_blank'>GitHub Repo</a>
            </Button>
          </div>
    </div>
  )
}

export default ProjectCard
