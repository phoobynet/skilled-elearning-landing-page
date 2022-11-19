import HeadingMedium from '@/components/HeadingMedium'
import Button from '@/components/Button'
import styles from './HomeHeader.module.scss'

export default function HomeHeader() {
  return (
    <header className={styles.homeHero}>
      <HeadingMedium>skilled</HeadingMedium>
      <Button kind="primary">Get Started</Button>
    </header>
  )
}
