import { PropsWithChildren } from 'react'

export default function HeroHeading({ children }: PropsWithChildren) {
  return <h1 className="text-heading-lg lg:text-heading-xl">{children}</h1>
}
