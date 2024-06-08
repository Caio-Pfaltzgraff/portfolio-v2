import { ReactNode } from "react"

type Props = {
  children: ReactNode
  id: string
  className?: string
}

export function Section({ children, id, className }: Props) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}