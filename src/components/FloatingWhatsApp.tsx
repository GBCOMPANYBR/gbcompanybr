import { WhatsAppGlyph } from "@/components/icons/WhatsAppGlyph";
import { buildWhatsAppUrl } from "@/lib/config";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp: mude de vida agora"
      className="group fixed right-5 bottom-5 z-40 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan sm:right-7 sm:bottom-7"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <span className="whitespace-nowrap rounded-full border border-white/10 bg-panel/90 px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-wider text-paper shadow-lg backdrop-blur-sm">
        Mude de vida agora
      </span>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(110deg,#8B5CF6_0%,#4F6BFF_55%,#3FD0E0_100%)] text-ink shadow-[0_8px_30px_-8px_rgba(79,107,255,0.85)] transition-transform duration-200 group-hover:scale-110">
        <WhatsAppGlyph className="h-7 w-7" />
      </span>
    </a>
  );
}
