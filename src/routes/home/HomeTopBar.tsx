export default function HomeTopBar() {
  return (
    <nav className="container z-50 mx-auto flex h-24 max-w-sm items-center justify-between px-3 md:max-w-3xl lg:max-w-6xl">
      <img
        src="/assets/logo-dark.svg"
        alt="skilled logo"
      />
      <button className="btn btn-primary">Get Started</button>
    </nav>
  )
}
