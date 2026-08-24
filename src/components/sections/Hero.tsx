import { GBSymbolAnimated } from "@/components/icons/GBSymbolAnimated";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { SITE_TAGLINE } from "@/lib/config";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.25)_0%,rgba(79,107,255,0.12)_45%,transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
        <GBSymbolAnimated className="mb-8 h-16 w-16 sm:h-20 sm:w-20" />

        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          GB Company // {SITE_TAGLINE}
        </p>

        <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl md:text-6xl">
          Você tem a ideia.
          <br />A gente entrega a empresa.
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-mist sm:text-xl">
          CNPJ, site, sistema, marketing e comercial — tudo estruturado e no
          ar. Você sai daqui com um negócio, não com uma promessa.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <WhatsAppLink>Quero estruturar minha ideia</WhatsAppLink>
          <a
            href="#e-se"
            className="inline-flex items-center gap-2 rounded-full border border-cyan/40 px-7 py-4 font-display text-base font-extrabold uppercase tracking-wide text-cyan transition-colors hover:border-cyan hover:bg-cyan/10"
          >
            E se
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
              <path
                d="M8 3v10M3.5 9l4.5 4 4.5-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
