import HeadingMedium from '@/components/HeadingMedium'
import Button from '@/components/Button'
import styles from './HomeFooter.module.scss'

export default function HomeFooter() {
  return (
    <footer className={styles.homeFooter}>
      <div className={styles.content}>
        <HeadingMedium>
          <span className="text-white">skilled</span>
        </HeadingMedium>
        <Button kind="tertiary">Get Started</Button>
      </div>
    </footer>
  )
}
