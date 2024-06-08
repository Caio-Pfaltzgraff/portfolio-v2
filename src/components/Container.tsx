import { ReactNode } from "react"

type Props = {
  children: ReactNode
  component: 'div' | 'main'
}

export function Container({ children, component }: Props) {
  return (
    <>
      {component === 'div' ? (
        <div className="max-w-screen-xl mx-auto px-4 2xl:px-0 pb-10">
          {children}
        </div>
      ) : (
        <main className="max-w-screen-xl mx-auto px-4 2xl:px-0 pb-10">
          {children}
        </main>
      )}
    </>
  )
}