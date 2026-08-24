import { Reveal } from "@/components/Reveal";

export function WhoItsFor() {
  return (
    <section className="border-y border-white/5 bg-panel/30">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            Para quem é
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-paper sm:text-4xl">
            Pra quem tem uma ideia e cansou de adiar
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            Não importa o nicho — comida, serviço, produto, conteúdo. Se dá
            pra virar empresa, a gente estrutura.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
