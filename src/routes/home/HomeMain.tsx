import Card from '@/components/Card'
import { CardData, cards } from '@/data/cards'
import PopularCoursesCard from '@/components/PopularCoursesCard'

export default function HomeMain() {
  return (
    <div className="bg-gradient-to-b from-transparent via-slate-50 via-slate-100 to-slate-200">
      <main className="container mx-auto px-3 pb-12 md:max-w-3xl md:px-0 md:pb-32 md:pt-48 lg:max-w-6xl lg:pb-40 lg:pt-32">
        <div className="grid grid-cols-1 grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          <PopularCoursesCard />
          {cards.map((card: CardData) => (
            <Card
              key={card.image}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
