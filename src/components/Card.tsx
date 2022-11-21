type Props = {
  title: string
  description: string
  image: string
}

export default function Card({ title, description, image }: Props) {
  return (
    <div className="relative flex h-[346px] flex-col justify-between place-self-start self-end rounded-xl bg-white px-6 py-12">
      <img
        src={image}
        alt=""
        className="absolute -translate-y-[4.5rem]"
      />
      <header className="pt-3">
        <h3 className="text-heading-sm">{title}</h3>
      </header>
      <main>
        <p className="text-body-medium text-light-slate-gray">{description}</p>
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
