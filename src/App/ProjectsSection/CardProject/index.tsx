import { Image, Tooltip } from "@nextui-org/react"
import { Code, Github, Globe } from "lucide-react"

type Props = {
  image: string
  title: string
  description: string
  techs: {
    name: string
    image: string
  }[]
  github: string
  deploy: string
}

export function CardProject({image, title, description, techs, github, deploy}: Props) {
  return (
    <div className="grid gap-y-4 border px-[2.5vw] py-[4vw] md:px-3 md:py-4 lg:px-3.5 rounded-xl max-w-md shadow-lg">
        <div className="flex gap-2 ml-0.5">
          <div className="rounded-full size-3 bg-red-500" />
          <div className="rounded-full size-3 bg-yellow-500" />
          <div className="rounded-full size-3 bg-green-500" />
        </div>
        <div className="h-48 xl:h-52">
        {image ? (
          <Image src={image} alt="Projeto" className="object-cover object-left aspect-auto size-full rounded-md" />
        ) : (
          <div className="bg-midnightBlue flex justify-center items-center h-full w-full rounded-md">
            <Code className="text-light size-16"/>
          </div>
        )}
      </div>
      <h4 className="text-xl font-bold dark:text-light-200">{title}</h4>

        <p className="line-clamp-5 dark:text-zinc-400">{description}</p>

        <div className="flex flex-wrap gap-x-3 gap-y-4 text-gray-600 dark:text-white mb-2">
          {techs.map((tech => (
            <Tooltip
              content={tech.name}
              showArrow={true}
              key={tech.name}
              classNames={{
                base: [
                  "before:bg-dark-100 dark:before:bg-zinc-700"
                ],
                content: [
                  "px-4 py-2 shadow-xl",
                  "text-white bg-dark-100 dark:bg-zinc-700"
                ]
              }}
            >
            <img src={tech.image} className="size-8"/>
          </Tooltip>
          )))}
        </div>

        <div className="flex justify-center sm:justify-start flex-wrap gap-4 md:gap-6 box-border mb-1.5">
          <a 
            href={github}
            target="_blank"
            className="flex justify-center items-center gap-1.5 border-2 border-orange-700 dark:border-orange-600 rounded-full px-5 py-2 text-sm text-orange-700 dark:text-orange-600 tracking-wider hover:bg-orange-700 hover:dark:bg-orange-600 hover:text-white dark:hover:text-white duration-400"
          >
            Github <Github className="size-5"/>
          </a>
          {deploy && <a 
            href={deploy}
            target="_blank"
            className="flex justify-center items-center gap-1.5 border-2 border-orange-700 dark:border-orange-600 rounded-full px-5 py-2 text-sm text-orange-700 dark:text-orange-600 tracking-wider hover:bg-orange-700 hover:dark:bg-orange-600 hover:text-white dark:hover:text-white duration-400"
          >
            Site <Globe className="size-5"/>
          </a>}
        </div>
    </div>
  )
}