import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(139,92,246,0.14)_0%,rgba(79,107,255,0.1)_55%,rgba(63,208,224,0.1)_100%)]"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl">
            Sua ideia já esperou demais.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-mist">
            Marque sua call de estruturação e saia com o preço fechado e um
            plano claro pra colocar sua empresa no ar.
          </p>
          <div className="mt-10">
            <WhatsAppLink>Quero estruturar minha ideia</WhatsAppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
