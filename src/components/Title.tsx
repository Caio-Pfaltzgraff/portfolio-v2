type Props = {
  text: string
}

export function Title({ text }: Props) {
  return (
    <div className="flex justify-center">
      <div className="font-semibold font-title text-3xl lg:text-4xl border-b-4 border-b-orange-700 dark:border-b-orange-600 rounded w-fit px-4 pb-1">
        {text}
      </div>
    </div>
  )
}