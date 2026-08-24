"use client";

import { useState, type FormEvent } from "react";
import { WhatsAppLink } from "@/components/WhatsAppLink";

type Layout = "split" | "centered" | "stacked";
type Vibe = "warm" | "cool" | "fresh" | "bold" | "earthy";

type PreviewResult = {
  businessName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  features: string[];
  icon: string;
  layout: Layout;
  vibe: Vibe;
};

type Accent = { solid: string; soft: string; text: string };

const IDEA_MAX_LENGTH = 400;
const IDEA_MIN_LENGTH = 10;

function slugify(text: string) {
  return (
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "") || "sua-marca"
  );
}

// Paleta escolhida pela "vibe" que a IA atribui ao negócio — de propósito
// bem longe da paleta violeta/azul/ciano da própria GB, pra parecer o site
// de outra empresa, não uma continuação visual do site da GB.
const VIBE_PALETTE: Record<Vibe, Accent> = {
  warm: { solid: "#F59E0B", soft: "#FFFBEB", text: "#92400E" },
  cool: { solid: "#0D9488", soft: "#F0FDFA", text: "#115E59" },
  fresh: { solid: "#10B981", soft: "#ECFDF5", text: "#065F46" },
  bold: { solid: "#FB7185", soft: "#FFF1F2", text: "#9F1239" },
  earthy: { solid: "#65A30D", soft: "#F7FEE7", text: "#3F6212" },
};

function BrowserChrome({ result, accent }: { result: PreviewResult; accent: Accent }) {
  return (
    <div className="flex items-center gap-2 border-b border-black/5 bg-slate-100 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      <span className="ml-3 flex items-center gap-1.5 truncate rounded-full bg-white px-3 py-1 font-mono text-[10px] text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent.solid }} />
        {slugify(result.businessName)}.com.br
      </span>
    </div>
  );
}

function SiteNav({ result, accent }: { result: PreviewResult; accent: Accent }) {
  const initial = result.businessName.trim().charAt(0).toUpperCase() || "?";
  return (
    <div className="flex items-center justify-between border-b border-black/5 px-5 py-3 sm:px-8">
      <div className="flex items-center gap-2">
        <span
          className="flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold text-white"
          style={{ backgroundColor: accent.solid }}
        >
          {initial}
        </span>
        <span className="text-sm font-bold text-slate-800">{result.businessName}</span>
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <span className="text-xs text-slate-400">Sobre</span>
        <span className="text-xs text-slate-400">Serviços</span>
        <span className="text-xs text-slate-400">Contato</span>
        <span
          className="rounded-full px-3 py-1.5 text-xs font-semibold text-white"
          style={{ backgroundColor: accent.solid }}
        >
          Fale conosco
        </span>
      </div>
    </div>
  );
}

function TagBadge({ result, accent }: { result: PreviewResult; accent: Accent }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
      style={{ backgroundColor: accent.soft, color: accent.text }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent.solid }} />
      {result.tagline}
    </span>
  );
}

function CtaPill({ accent, dark = false }: { accent: Accent; dark?: boolean }) {
  return (
    <span
      className="mt-6 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-bold text-white"
      style={{ backgroundColor: dark ? "rgba(255,255,255,0.2)" : accent.solid }}
    >
      Saiba mais
    </span>
  );
}

function SplitHero({ result, accent }: { result: PreviewResult; accent: Accent }) {
  return (
    <div className="grid gap-6 px-5 py-10 sm:grid-cols-[1.2fr_0.8fr] sm:items-center sm:px-8 sm:py-14">
      <div>
        <TagBadge result={result} accent={accent} />
        <h3 className="mt-4 text-balance text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
          {result.heroHeadline}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
          {result.heroSubheadline}
        </p>
        <CtaPill accent={accent} />
      </div>
      <div className="relative hidden aspect-square items-center justify-center sm:flex">
        <div
          className="h-40 w-40 rounded-4xl"
          style={{ background: `linear-gradient(135deg, ${accent.solid}33, ${accent.solid}0d)` }}
        />
        <div
          className="absolute flex h-24 w-24 items-center justify-center rounded-3xl text-4xl"
          style={{ backgroundColor: accent.solid }}
        >
          {result.icon}
        </div>
      </div>
    </div>
  );
}

function CenteredHero({ result, accent }: { result: PreviewResult; accent: Accent }) {
  return (
    <div className="px-5 py-14 text-center sm:px-8 sm:py-20">
      <div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
        style={{ backgroundColor: accent.soft }}
      >
        {result.icon}
      </div>
      <div className="mt-5 flex justify-center">
        <TagBadge result={result} accent={accent} />
      </div>
      <h3 className="mx-auto mt-4 max-w-lg text-balance text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
        {result.heroHeadline}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
        {result.heroSubheadline}
      </p>
      <CtaPill accent={accent} />
    </div>
  );
}

function StackedHero({ result, accent }: { result: PreviewResult; accent: Accent }) {
  return (
    <div>
      <div
        className="px-5 py-12 text-center sm:px-8 sm:py-16"
        style={{ backgroundColor: accent.solid }}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl">
          {result.icon}
        </div>
        <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-widest text-white/80">
          {result.tagline}
        </p>
        <h3 className="mx-auto mt-2 max-w-lg text-balance text-2xl font-extrabold leading-tight text-white sm:text-3xl">
          {result.heroHeadline}
        </h3>
      </div>
      <div className="px-5 py-8 text-center sm:px-8">
        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-500">
          {result.heroSubheadline}
        </p>
        <CtaPill accent={accent} />
      </div>
    </div>
  );
}

const HERO_BY_LAYOUT: Record<Layout, typeof SplitHero> = {
  split: SplitHero,
  centered: CenteredHero,
  stacked: StackedHero,
};

function FeaturesRow({ result, accent }: { result: PreviewResult; accent: Accent }) {
  return (
    <div className="grid grid-cols-1 gap-3 border-t border-black/5 px-5 py-6 sm:grid-cols-3 sm:px-8">
      {result.features.map((feature) => (
        <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
            style={{ backgroundColor: accent.solid }}
          >
            ✓
          </span>
          {feature}
        </div>
      ))}
    </div>
  );
}

function PreviewCard({ result }: { result: PreviewResult }) {
  const accent = VIBE_PALETTE[result.vibe] ?? VIBE_PALETTE.cool;
  const Hero = HERO_BY_LAYOUT[result.layout] ?? SplitHero;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-11 top-6 z-10 w-40 rotate-45 py-1 text-center font-mono text-[9px] font-bold uppercase tracking-widest text-white shadow-md"
        style={{ backgroundColor: accent.solid }}
      >
        Preview GB
      </div>

      <BrowserChrome result={result} accent={accent} />
      <SiteNav result={result} accent={accent} />
      <Hero result={result} accent={accent} />
      <FeaturesRow result={result} accent={accent} />

      <div className="border-t border-black/5 px-5 py-3 text-center text-[10px] text-slate-400 sm:px-8">
        © {result.businessName} — site ilustrativo gerado pela GB Company
      </div>
    </div>
  );
}

export function PreviewGenerator() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PreviewResult | null>(null);
  const [limitReached, setLimitReached] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading || limitReached || idea.trim().length < IDEA_MIN_LENGTH) return;

    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "Não deu pra gerar o preview agora. Tenta de novo.");
        if (data?.limitReached) setLimitReached(true);
        return;
      }

      setResult(data.preview as PreviewResult);
      if (typeof data.remaining === "number" && data.remaining <= 0) {
        setLimitReached(true);
      }
    } catch {
      setError("Falha de conexão. Tenta de novo.");
    } finally {
      setLoading(false);
    }
  }

  const whatsappMessage = result
    ? `Olá! Testei o gerador da GB Company e minha ideia virou "${result.businessName}". Quero ver como fica de verdade, sem marca d'água.`
    : undefined;

  return (
    <section
      id="e-se"
      className="border-y border-white/5 bg-panel/30 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          Experimente
        </p>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-paper sm:text-4xl">
          <span className="bg-[linear-gradient(110deg,#8B5CF6_0%,#4F6BFF_55%,#3FD0E0_100%)] bg-clip-text text-transparent">
            E se
          </span>{" "}
          sua ideia já tivesse nome e site?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mist">
          Descreve sua ideia em uma ou duas frases. A gente monta um preview de
          como ela pode virar marca — na hora, aqui mesmo.
        </p>
      </div>

      {!limitReached && (
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl">
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value.slice(0, IDEA_MAX_LENGTH))}
            rows={3}
            placeholder="Ex: uma hamburgueria artesanal de bairro com entrega própria"
            className="w-full resize-none rounded-2xl border border-white/10 bg-panel/60 p-4 text-paper placeholder:text-mist/50 focus:border-cyan/50 focus:outline-none"
          />
          <div className="mt-3 flex items-center justify-between gap-4">
            <span className="font-mono text-xs text-mist/60">
              {idea.length}/{IDEA_MAX_LENGTH}
            </span>
            <button
              type="submit"
              disabled={loading || idea.trim().length < IDEA_MIN_LENGTH}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#8B5CF6_0%,#4F6BFF_55%,#3FD0E0_100%)] px-6 py-3 font-display text-sm font-bold text-ink transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            >
              {loading ? "Estruturando..." : "Gerar preview"}
            </button>
          </div>
          {error && <p className="mt-3 text-sm text-red-300">{error}</p>}
        </form>
      )}

      {result && (
        <div className="mx-auto mt-10 max-w-3xl">
          <PreviewCard result={result} />
          <div className="mt-8 text-center">
            <p className="mx-auto mb-4 max-w-md text-mist">
              {limitReached
                ? "Você já viu como sua ideia pode virar marca. Bora tirar a marca d'água e colocar isso no ar de verdade?"
                : "Isso é só uma prévia. Bora tirar a marca d'água e colocar isso no ar de verdade?"}
            </p>
            <WhatsAppLink message={whatsappMessage}>
              Quero isso de verdade
            </WhatsAppLink>
          </div>
        </div>
      )}

      {limitReached && !result && (
        <div className="mx-auto mt-10 max-w-md text-center">
          <p className="mb-4 text-mist">{error}</p>
          <WhatsAppLink>Quero conversar agora</WhatsAppLink>
        </div>
      )}
    </section>
  );
}
