import HeadingSmall from '@/components/HeadingSmall'
import BodySmall from '@/components/BodySmall'
import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  icon: ReactNode
}

export default function Card({ title, description }: Props) {
  return (
    <div className="h-[346px] w-[350px] rounded-lg bg-white">
      <header>
        <HeadingSmall>{title}</HeadingSmall>
      </header>
      <p>
        <BodySmall>{description}</BodySmall>
      </p>
      <a
        href="#"
        className="text-violet-red"
      >
        Get Started
      </a>
    </div>
  )
}
