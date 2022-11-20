import HomeHero from '@/routes/home/HomeHero'
import HomeFooter from '@/routes/home/HomeFooter'
import HomeMain from '@/routes/home/HomeMain'
import HomeTopBar from '@/routes/home/HomeTopBar'

export default function Home() {
  return (
    <div className="h-screen">
      <HomeTopBar />
      <HomeHero />
      <HomeMain />
      <HomeFooter />
    </div>
  )
}
