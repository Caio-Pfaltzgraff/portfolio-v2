import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function Container({ children }: Props) {
  return (
    <main className="max-w-screen-xl mx-auto px-4 2xl:px-0">
      {children}
    </main>
  )
}