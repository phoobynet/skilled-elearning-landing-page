import Button from '@/components/Button'

export default function HomeFooter() {
  return (
    <footer className="fixed bottom-0 h-[120px] w-full bg-gun-metal">
      <div className="container mx-auto flex h-full max-w-6xl items-center justify-between">
        <img
          src="/assets/logo-light.svg"
          alt="skilled logo"
        />
        <Button kind="tertiary">Get Started</Button>
      </div>
    </footer>
  )
}
