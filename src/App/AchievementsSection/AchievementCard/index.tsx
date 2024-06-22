import { LuExternalLink } from "react-icons/lu"
import { twMerge } from "tailwind-merge"

type Props = {
  type: string
  title: string
  plataform: string
  link?: string
  duration: string
  className?: string
}

export function AchievementCard({ type, title, plataform, link = '', duration, className } : Props) {
  return (
    <div
      className={twMerge(
        'space-y-3 p-6 border dark:border-zinc-500 rounded-3xl shadow-lg md:hover:scale-105 duration-500',
        className
      )}
    >
      <p className="dark:text-light font-title font-semibold text-lg sm:text-xl">
        {type}
      </p>
      <p className="dark:text-light text-lg sm:text-xl font-medium line-clamp-2">
        {title}
      </p>
      {link === ''
        ? <p className="dark:text-zinc-400">{plataform}</p>
        : 
        <a 
          href={link} 
          target="_blank"
          className="flex items-center gap-2 text-orange-600  font-semibold"
        >
          {plataform} <LuExternalLink />
        </a>
      }
      <p className="text-stone-400 dark:text-light text-sm font-medium">
        {duration}
      </p>
    </div>
  )
}