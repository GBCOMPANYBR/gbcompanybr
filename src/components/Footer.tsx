import { GBSymbol } from "@/components/icons/GBSymbol";
import { CNPJ_PLACEHOLDER, SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-2.5">
          <GBSymbol className="h-8 w-8" gradientId="gbGradFooter" />
          <div>
            <p className="font-display text-base font-bold text-paper">
              {SITE_NAME}
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-mist">
              {SITE_TAGLINE}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-mist md:items-end">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan"
          >
            Instagram
          </a>
          <p className="font-mono text-xs text-mist/70">
            CNPJ {CNPJ_PLACEHOLDER}
          </p>
          <p className="text-xs text-mist/70">
            © {year} {SITE_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
