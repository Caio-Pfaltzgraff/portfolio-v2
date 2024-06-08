import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<'a'> {}

export function LinkIcon({target = '_blank', ...props}: Props) {
  return (
    <a 
      {...props} 
      target={target}
      className={twMerge(
        'text-slate-800 dark:text-light cursor-pointer',
        props.className
      )} 
    />
  )
}