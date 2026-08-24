type GBSymbolAnimatedProps = {
  className?: string;
  title?: string;
};

/**
 * Versão animada da Ligadura: o traço se desenha e termina na forma oficial
 * completa, como manda o manual de marca. Animação é CSS puro (sem JS) e
 * respeita prefers-reduced-motion mostrando a forma final direto.
 */
export function GBSymbolAnimated({
  className,
  title = "GB Company",
}: GBSymbolAnimatedProps) {
  const gradientId = "gbGradAnimated";
  const strokes: { d: string; length: number; delay: number }[] = [
    { d: "M76 38 A28 28 0 1 0 76 82", length: 140, delay: 0 },
    { d: "M76 28 V92", length: 70, delay: 0.35 },
    { d: "M58 60 L76 60", length: 25, delay: 0.75 },
    { d: "M76 28 H88 A16 16 0 0 1 88 60 H76", length: 85, delay: 0.9 },
    { d: "M76 60 H92 A16 16 0 0 1 92 92 H76", length: 95, delay: 1.25 },
  ];

  return (
    <svg
      viewBox="20 14 110 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="10"
          y1="10"
          x2="140"
          y2="110"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="55%" stopColor="#4F6BFF" />
          <stop offset="100%" stopColor="#3FD0E0" />
        </linearGradient>
      </defs>
      <style>{`
        .gb-draw-path {
          stroke-dasharray: var(--len);
          stroke-dashoffset: var(--len);
          animation: gb-draw 1.1s ease-out var(--delay) forwards;
        }
        @keyframes gb-draw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gb-draw-path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      {strokes.map((s) => (
        <path
          key={s.d}
          d={s.d}
          stroke={`url(#${gradientId})`}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="gb-draw-path"
          style={
            {
              "--len": s.length,
              "--delay": `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </svg>
  );
}
