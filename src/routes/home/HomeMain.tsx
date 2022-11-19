import styles from './HomeMain.module.scss'
import HeadingExtraLarge from '@/components/HeadingExtraLarge'
import Button from '@/components/Button'
import BodyMedium from '@/components/BodyMedium'

export default function HomeMain() {
  return (
    <main className={styles.homeMain}>
      <div className="flex w-1/2 flex-col space-y-5">
        <HeadingExtraLarge>Maximise skill, minimise budget</HeadingExtraLarge>
        <BodyMedium className="text-light-slate-gray">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </BodyMedium>
        <div>
          <Button kind="secondary">Get Started</Button>
        </div>
      </div>
      <div>
        <img
          src="/assets/image-hero-desktop.webp"
          alt=""
          className="absolute top-0 right-0 -mt-[200px] -mr-[350px] object-cover"
        />
      </div>
    </main>
  )
}
