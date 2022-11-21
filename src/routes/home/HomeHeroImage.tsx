export default function HomeHeroImage() {
  return (
    <>
      {/* mobile */}
      <img
        src="/assets/image-hero-mobile.webp"
        alt=""
        className="md:hidden"
      />

      {/* tablet */}
      <img
        src="/assets/image-hero-tablet.webp"
        alt=""
        className="absolute -z-10 hidden -translate-y-[10rem] transform-gpu md:block md:translate-x-[22rem] lg:hidden"
      />

      {/* desktop */}
      <img
        src="/assets/image-hero-desktop.webp"
        alt=""
        className="absolute -z-10 hidden -translate-y-1/3 translate-x-[40rem] transform-gpu md:hidden lg:block"
      />
    </>
  )
}
