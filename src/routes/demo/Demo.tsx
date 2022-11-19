import HeadingExtraLarge from '@/components/HeadingExtraLarge'
import HeadingLarge from '@/components/HeadingLarge'
import HeadingMedium from '@/components/HeadingMedium'
import HeadingSmall from '@/components/HeadingSmall'
import BodyMedium from '@/components/BodyMedium'
import BodySmall from '@/components/BodySmall'
import Button from '@/components/Button'

export default function Demo() {
  return (
    <main className="container mx-auto flex max-w-6xl flex-col space-y-3">
      <div id="typography">
        <HeadingExtraLarge>Typography</HeadingExtraLarge>
        <HeadingExtraLarge>
          Increase your skill with minimum budget
        </HeadingExtraLarge>

        <HeadingLarge>Users all around the globe</HeadingLarge>
        <HeadingMedium>Check out our most popular courses</HeadingMedium>
        <HeadingSmall>Photography</HeadingSmall>
        <div>
          <BodyMedium>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
            amet orci. Aenean dignissim pellentesque felis.Donec nec justo eget
            felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
          </BodyMedium>
        </div>
        <div>
          <BodySmall>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
            amet orci. Aenean dignissim pellentesque felis.Donec nec justo eget
            felis facilisis fermentum.
          </BodySmall>
        </div>
      </div>
      <div id="button">
        <header>
          <HeadingExtraLarge>Buttons</HeadingExtraLarge>
        </header>
        <div className="flex space-x-2">
          <Button kind="primary">Get Started</Button>
          <Button kind="secondary">Get Started</Button>
          <Button kind="tertiary">Get Started</Button>
        </div>
      </div>
    </main>
  )
}
