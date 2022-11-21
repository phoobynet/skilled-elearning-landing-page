import { PropsWithChildren } from 'react'

export default function HeroMessage({ children }: PropsWithChildren) {
  return (
    <div className="text-[16px] font-medium leading-[26px] text-light-slate-gray lg:text-[18px] lg:leading-[28px]">
      {children}
    </div>
  )
}
