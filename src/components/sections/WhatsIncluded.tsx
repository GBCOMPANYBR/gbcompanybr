import { Reveal } from "@/components/Reveal";

type IconProps = { id: string };

function IconWrapper({
  id,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={id}
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="55%" stopColor="#4F6BFF" />
          <stop offset="100%" stopColor="#3FD0E0" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

function IconDocument({ id }: IconProps) {
  return (
    <IconWrapper id={id}>
      <path d="M6 3.5h8l4 4V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V4a.5.5 0 0 1 .5-.5Z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 13h6M9 16.5h6" />
    </IconWrapper>
  );
}

function IconBrowser({ id }: IconProps) {
  return (
    <IconWrapper id={id}>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 8.5h18" />
      <circle cx="6" cy="6.5" r="0.6" fill={`url(#${id})`} stroke="none" />
      <circle cx="8.2" cy="6.5" r="0.6" fill={`url(#${id})`} stroke="none" />
    </IconWrapper>
  );
}

function IconSystem({ id }: IconProps) {
  return (
    <IconWrapper id={id}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2" />
    </IconWrapper>
  );
}

function IconMarketing({ id }: IconProps) {
  return (
    <IconWrapper id={id}>
      <path d="M3 10.5v3a1 1 0 0 0 1 1h2l5.2 3.5a.5.5 0 0 0 .8-.4V6.4a.5.5 0 0 0-.8-.4L6 9.5H4a1 1 0 0 0-1 1Z" />
      <path d="M17 9c1 1 1 5 0 6M20 7c2 2.5 2 7.5 0 10" />
    </IconWrapper>
  );
}

function IconSocial({ id }: IconProps) {
  return (
    <IconWrapper id={id}>
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="17.5" cy="6" r="2.2" />
      <circle cx="17.5" cy="18" r="2.2" />
      <path d="M8 11l7.7-4M8 13l7.7 4" />
    </IconWrapper>
  );
}

function IconCommercial({ id }: IconProps) {
  return (
    <IconWrapper id={id}>
      <path d="M3 17l5-5.5 4 3L21 6" />
      <path d="M15 6h6v6" />
    </IconWrapper>
  );
}

const ITEMS = [
  {
    icon: IconDocument,
    title: "CNPJ e contabilidade",
    description: "Empresa aberta e regularizada, sem você pisar num balcão.",
  },
  {
    icon: IconBrowser,
    title: "Site profissional",
    description: "Rápido, responsivo e pensado pra converter quem chega.",
  },
  {
    icon: IconSystem,
    title: "Sistema sob medida",
    description: "A ferramenta que a sua operação realmente precisa pra rodar.",
  },
  {
    icon: IconMarketing,
    title: "Marketing e posicionamento",
    description: "Nome, proposta e discurso que fazem sentido pro seu público.",
  },
  {
    icon: IconSocial,
    title: "Redes sociais configuradas",
    description: "Perfis prontos e alinhados com a identidade da marca.",
  },
  {
    icon: IconCommercial,
    title: "Estrutura comercial",
    description: "Script e processo de venda prontos pro primeiro cliente.",
  },
];

export function WhatsIncluded() {
  return (
    <section
      id="o-que-entra"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          Estruturação completa
        </p>
        <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          Tudo que uma empresa precisa pra existir de verdade
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 100}>
            <div className="h-full rounded-2xl border border-white/5 bg-panel/50 p-7 transition-colors hover:border-white/10">
              <item.icon id={`incluso-icon-${i}`} />
              <h3 className="mt-5 font-display text-lg font-bold text-paper">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-mist">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
