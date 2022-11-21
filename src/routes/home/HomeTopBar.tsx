import Button from '@/components/Button'

export default function HomeTopBar() {
  return (
    <div className="container z-50 mx-auto flex h-24 max-w-sm items-center justify-between px-3 md:max-w-3xl md:px-0 lg:max-w-6xl">
      <img
        src="/assets/logo-dark.svg"
        alt="skilled logo"
      />
      <Button kind="primary">Get Started</Button>
    </div>
  )
}
