import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<'button'> {
  isActive?: boolean;
}

export function Button({ isActive, ...props} : Props) {
  return (
    <button 
      {...props}
      className={twMerge(
        'flex gap-2 items-center outline-none border border-zinc-400 dark:border-zinc-500 rounded-xl px-6 py-2.5 font-medium text-base text-zinc-500 dark:text-zinc-300',
        isActive && 'border-orange-600 text-orange-600 dark:border-orange-600 dark:text-orange-600',
        props.className
      )}
    />
  )
}