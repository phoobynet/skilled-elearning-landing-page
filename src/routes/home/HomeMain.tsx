import Card from '@/components/Card'
import { CardData, cards } from '@/data/cards'
import PopularCoursesCard from '@/components/PopularCoursesCard'
import { PropsWithChildren } from 'react'

export default function HomeMain() {
  return (
    <Root>
      <Cards>
        <PopularCoursesCard />
        {cards.map((card: CardData) => (
          <Card
            key={card.image}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </Cards>
    </Root>
  )
}

function Root({ children }: PropsWithChildren) {
  return (
    <main className="bg-gradient-to-b from-transparent via-slate-50 via-slate-100 to-slate-200">
      {children}
    </main>
  )
}

function Cards({ children }: PropsWithChildren) {
  return (
    <div className="container mx-auto grid grid-cols-1 grid-cols-1 gap-x-10 gap-y-12 px-3 pb-12 md:max-w-3xl md:grid-cols-2 md:pb-32 md:pt-48 lg:max-w-6xl lg:grid-cols-3 lg:pb-40 lg:pt-32">
      {children}
    </div>
  )
}
