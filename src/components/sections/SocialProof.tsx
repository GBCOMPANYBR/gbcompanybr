import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { FEATURED_CASES, type FeaturedCase } from "@/data/cases";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const hasVideo = Boolean(testimonial.videoUrl);

  const content = (
    <div className="group relative aspect-[9/13] w-full overflow-hidden rounded-2xl border border-white/5 bg-panel">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(139,92,246,0.35)_0%,rgba(79,107,255,0.2)_45%,rgba(19,19,40,0.9)_100%)]" />
      <div className="relative flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full text-ink transition-transform ${
            hasVideo
              ? "bg-[linear-gradient(110deg,#8B5CF6_0%,#4F6BFF_55%,#3FD0E0_100%)] group-hover:scale-110"
              : "border border-paper/30 bg-transparent text-paper"
          }`}
        >
          {hasVideo ? (
            <PlayIcon />
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-widest">
              Em breve
            </span>
          )}
        </span>
        <div>
          <p className="font-display text-sm font-bold text-paper">
            {testimonial.name}
          </p>
          <p className="mt-1 text-xs text-mist">{testimonial.business}</p>
        </div>
      </div>
    </div>
  );

  if (!hasVideo) {
    return content;
  }

  return (
    <a
      href={testimonial.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Assistir depoimento de ${testimonial.name}`}
    >
      {content}
    </a>
  );
}

function CaseCard({ featuredCase }: { featuredCase: FeaturedCase }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-panel/50 sm:flex-row">
      <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-64">
        <Image
          src={featuredCase.imageSrc}
          alt={featuredCase.imageAlt}
          fill
          sizes="(min-width: 640px) 16rem, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-7 sm:p-8">
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-cyan/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
          {featuredCase.badge}
        </span>
        <h3 className="font-display text-2xl font-bold text-paper">
          {featuredCase.name}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-mist/70">
          {featuredCase.tagline}
        </p>
        <p className="mt-4 max-w-lg leading-relaxed text-mist">
          {featuredCase.description}
        </p>
        <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-mist/30 px-3 py-1 text-xs text-mist">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          {featuredCase.status}
        </span>
      </div>
    </div>
  );
}

export function SocialProof() {
  if (FEATURED_CASES.length === 0 && TESTIMONIALS.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          Prova social
        </p>
        <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          Quem já está estruturando com a GB
        </h2>
      </Reveal>

      {FEATURED_CASES.length > 0 && (
        <div className="mt-14 flex flex-col gap-6">
          {FEATURED_CASES.map((featuredCase, i) => (
            <Reveal key={featuredCase.name} delay={i * 100}>
              <CaseCard featuredCase={featuredCase} />
            </Reveal>
          ))}
        </div>
      )}

      {TESTIMONIALS.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={`${testimonial.name}-${i}`} delay={i * 100}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
