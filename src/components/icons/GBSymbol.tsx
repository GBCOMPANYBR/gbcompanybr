type GBSymbolProps = {
  className?: string;
  title?: string;
  /** IDs de <linearGradient> devem ser únicos por página — troque ao usar mais de uma instância. */
  gradientId?: string;
};

/**
 * "A Ligadura" — o símbolo oficial da GB Company.
 * G e B fundidos num glifo só: a barra final do G é a espinha do B.
 * Não redesenhar, esticar, rotacionar, separar ou recolorir.
 */
export function GBSymbol({
  className,
  title = "GB Company",
  gradientId = "gbGrad",
}: GBSymbolProps) {
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
      <path
        d="M76 38 A28 28 0 1 0 76 82"
        stroke={`url(#${gradientId})`}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M58 60 L76 60"
        stroke={`url(#${gradientId})`}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M76 28 V92"
        stroke={`url(#${gradientId})`}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M76 28 H88 A16 16 0 0 1 88 60 H76"
        stroke={`url(#${gradientId})`}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M76 60 H92 A16 16 0 0 1 92 92 H76"
        stroke={`url(#${gradientId})`}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
