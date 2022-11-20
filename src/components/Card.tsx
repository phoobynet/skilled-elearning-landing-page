import HeadingSmall from '@/components/HeadingSmall'
import BodyMedium from '@/components/BodyMedium'

type Props = {
  title: string
  description: string
  image: string
}

export default function Card({ title, description, image }: Props) {
  return (
    <div className="relative flex h-[346px] w-[350px] flex-col justify-between place-self-start self-end rounded-xl bg-white px-6 py-12 drop-shadow-sm">
      <img
        src={image}
        alt=""
        className="absolute -translate-y-[4.5rem]"
      />
      <header className="pt-3">
        <HeadingSmall>{title}</HeadingSmall>
      </header>
      <main>
        <p className="text-light-slate-gray">
          <BodyMedium>{description}</BodyMedium>
        </p>
      </main>
      <footer>
        <a
          href="#"
          className="text-violet-red"
        >
          Get Started
        </a>
      </footer>
    </div>
  )
}
