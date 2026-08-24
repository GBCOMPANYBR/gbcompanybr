"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const FAQ_ITEMS = [
  {
    question: "Quanto custa?",
    answer:
      "O preço é fechado na call, baseado na complexidade do que sua ideia precisa. Você sabe o valor exato antes de decidir — sem surpresa depois.",
  },
  {
    question: "Quanto tempo leva?",
    answer:
      "Depende do tamanho do que precisa ser construído, mas o prazo entra no combinado logo na call de estruturação — você sabe a data de lançamento antes de fechar.",
  },
  {
    question: "Eu preciso entender de tecnologia?",
    answer:
      "Não. Você entende do seu negócio, a gente entende de estruturar empresa. Explicamos cada decisão em português claro, sem te enrolar com termo técnico.",
  },
  {
    question: "E depois da entrega?",
    answer:
      "Sua empresa fica no ar, sob seu comando. Se quiser continuar evoluindo o site, o sistema ou o marketing depois do lançamento, seguimos junto — é só chamar.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-5 w-5 shrink-0 text-cyan transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg font-bold text-paper">
          {question}
        </span>
        <ChevronIcon open={open} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="min-h-0 max-w-2xl leading-relaxed text-mist">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          Dúvidas
        </p>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-paper sm:text-4xl">
          Perguntas que todo mundo faz
        </h2>
      </Reveal>

      <div className="mt-10">
        {FAQ_ITEMS.map((item, i) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
