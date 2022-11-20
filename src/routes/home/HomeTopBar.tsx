import Button from '@/components/Button'

export default function HomeTopBar() {
  return (
    <div className="container z-50 mx-auto flex h-24 max-w-6xl items-center justify-between">
      <img
        src="/assets/logo-dark.svg"
        alt="skilled logo"
      />
      <Button kind="primary">Get Started</Button>
    </div>
  )
}
