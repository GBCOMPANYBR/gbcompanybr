import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "A call de estruturação",
    description:
      "Você conta a ideia. A gente desenha o negócio na sua frente: nome, proposta, o que o site e o sistema precisam fazer. Ao final, você já sai com o preço fechado.",
  },
  {
    number: "02",
    title: "A construção",
    description:
      "CNPJ aberto, site e sistema desenvolvidos, redes sociais configuradas e script comercial pronto. Você acompanha tudo.",
  },
  {
    number: "03",
    title: "O lançamento",
    description:
      "Sua empresa no ar, pronta pra vender. 50% no fechamento, 50% só na entrega de tudo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          Como funciona
        </p>
        <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          Da ideia ao ar, em três passos
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 100}>
            <div className="relative h-full rounded-2xl border border-white/5 bg-panel/50 p-8">
              <span className="font-mono text-sm text-mist/60">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-paper">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-mist">
                {step.description}
              </p>
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute right-0 top-1/2 hidden h-px w-8 translate-x-full bg-[linear-gradient(110deg,#8B5CF6_0%,#4F6BFF_55%,#3FD0E0_100%)] md:block"
                />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
