import { ReactNode } from "react"

type Props = {
  children: ReactNode
  id: string
}

export function Section({ children, id }: Props) {
  return (
    <section id={id}>
      {children}
    </section>
  )
}