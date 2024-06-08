type Props = {
  icon: string
  name: string
  level: string
}

export function SkillCard({ icon, level, name }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-28">
      <img src={icon} alt={name} className="size-14 hover:-translate-y-2 duration-500"/>
      <p className="font-extrabold tracking-wider">{name}</p>
      <p className="text-zinc-500 font-medium text-sm">{level}</p>
    </div>
  )
}