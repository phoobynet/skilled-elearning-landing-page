import HomeHeader from '@/routes/home/HomeHeader'
import HomeFooter from '@/routes/home/HomeFooter'
import styles from './Home.module.scss'
import HomeMain from '@/routes/home/HomeMain'

export default function Home() {
  return (
    <div className={styles.home}>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  )
}
