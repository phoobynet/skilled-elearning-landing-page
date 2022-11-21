import { PropsWithChildren } from 'react'

export default function HeroHeading({ children }: PropsWithChildren) {
  return (
    <h1 className="text-[32px] font-extrabold leading-[40px] lg:text-[56px] lg:leading-[51px]">
      {children}
    </h1>
  )
}
