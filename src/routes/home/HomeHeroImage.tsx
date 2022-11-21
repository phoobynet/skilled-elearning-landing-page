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
        className="absolute -z-10 hidden -translate-y-1/3 transform-gpu transition-all md:hidden lg:block lg:translate-x-[30rem] xl:translate-x-[40rem]"
      />
    </>
  )
}
