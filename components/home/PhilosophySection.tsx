import FadeIn from '@/components/FadeIn'

export default function PhilosophySection() {
  return (
    <section
      className="py-20 sm:py-28 bg-[#1C2B2D]"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8A045]">
            Notre philosophie
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8">
          <h2
            id="philosophy-heading"
            className="font-heading text-3xl font-bold text-center text-[#FDF8F0] leading-tight sm:text-4xl"
          >
            L&apos;art de savourer l&apos;instant
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10 space-y-6 text-center">
          <p className="text-base leading-[1.85] text-[#BFD0D2]">
            Il y a des endroits où le temps s&apos;étire doucement. Où le bruit des vagues
            remplace le brouhaha du quotidien. La Galère est né de cette conviction simple :
            les meilleurs moments de la vie se partagent au bord de l&apos;eau, avec les gens
            qu&apos;on aime, un verre à la main.
          </p>
          <p className="text-base leading-[1.85] text-[#BFD0D2]">
            Sur notre terrasse en front de mer, chaque détail est pensé pour que vous
            oubliiez l&apos;heure. Les cocktails sont faits avec soin, les glaces avec passion.
            L&apos;équipe est là pour que vous n&apos;ayez qu&apos;à profiter — du soleil, de la vue,
            et de ce moment qui ne ressemble à aucun autre.
          </p>
          <p className="font-heading text-xl italic font-medium text-[#E8A045]">
            &ldquo;Profiter du moment présent.&rdquo;
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
