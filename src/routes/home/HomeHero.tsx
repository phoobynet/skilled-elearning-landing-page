import Button from '@/components/Button'
import HomeHeroImage from '@/routes/home/HomeHeroImage'
import HeroHeading from '@/components/HeroHeading'
import HeroMessage from '@/components/HeroMessage'

export default function HomeHero() {
  return (
    <header className="container relative mx-auto grid max-w-sm grid-cols-none px-3 md:max-w-3xl md:grid-cols-2 md:px-0 md:pt-24 lg:h-[500px] lg:max-w-6xl">
      <div className="flex flex-col space-y-6 lg:max-w-[465px]">
        <HeroHeading>Maximise skill, minimise budget</HeroHeading>
        <HeroMessage>
          Our modern courses across a range of in&#x2011;demand skills will give
          you the knowledge you need to live the life you want.
        </HeroMessage>
        <div>
          <Button kind="secondary">Get Started</Button>
        </div>
      </div>
      <HomeHeroImage />
    </header>
  )
}
