import Card from '@/components/Card'
import { CardData, cards } from '@/data/cards'
import PopularCoursesCard from '@/components/PopularCoursesCard'

export default function HomeMain() {
  return (
    <main className="container mx-auto max-w-6xl py-32">
      <div className="grid h-[346px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
  )
}
