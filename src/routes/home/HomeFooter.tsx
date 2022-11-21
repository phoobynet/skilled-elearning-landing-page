export default function HomeFooter() {
  return (
    <footer className="bottom-0 h-[120px] w-full bg-gun-metal">
      <div className="container mx-auto flex h-full max-w-sm items-center justify-between px-3 md:max-w-3xl md:px-0 lg:max-w-6xl">
        <img
          src="/assets/logo-light.svg"
          alt="skilled logo"
        />
        <button className="btn btn-tertiary">Get Started</button>
      </div>
    </footer>
  )
}
