import HeadingExtraLarge from '@/components/HeadingExtraLarge'
import HeadingLarge from '@/components/HeadingLarge'
import HeadingMedium from '@/components/HeadingMedium'
import HeadingSmall from '@/components/HeadingSmall'

export default function Demo() {
  return (
    <main className="container mx-auto max-w-6xl">
      <div id="typography">
        <HeadingExtraLarge>
          Increase your skill with minimum budget
        </HeadingExtraLarge>

        <HeadingLarge>Users all around the globe</HeadingLarge>
        <HeadingMedium>Check out our most popular courses</HeadingMedium>
        <HeadingSmall>Photography</HeadingSmall>
      </div>
    </main>
  )
}
