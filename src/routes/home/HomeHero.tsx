import Button from '@/components/Button'
import HeadingExtraLarge from '@/components/HeadingExtraLarge'
import BodyMedium from '@/components/BodyMedium'

export default function HomeHero() {
  return (
    <header className="container relative mx-auto mb-auto grid h-[500px] max-w-6xl grid-cols-2 pt-24">
      <div className="flex max-w-[465px] flex-col space-y-6">
        <HeadingExtraLarge>Maximise skill, minimise budget</HeadingExtraLarge>
        <BodyMedium className="text-light-slate-gray">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </BodyMedium>
        <div>
          <Button kind="secondary">Get Started</Button>
        </div>
      </div>
      <img
        src="/assets/image-hero-desktop.webp"
        alt=""
        className="absolute -z-10 -translate-y-1/3 translate-x-[40rem] transform-gpu"
      />
    </header>
  )
}
