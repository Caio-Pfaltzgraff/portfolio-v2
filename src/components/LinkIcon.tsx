import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<'a'> {
  animation?: boolean;
}

export function LinkIcon({animation = false, target = '_blank', ...props}: Props) {
  return (
    <a 
      {...props} 
      target={target}
      className={twMerge(
        'text-slate-800 dark:text-light cursor-pointer',
        animation && "hover:-translate-y-4 duration-500 ease-in", 
        props.className
      )} 
    />
  )
}