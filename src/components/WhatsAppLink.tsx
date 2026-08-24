import { buildWhatsAppUrl } from "@/lib/config";

type WhatsAppLinkProps = {
  children: React.ReactNode;
  message?: string;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold text-center transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan";

const variants = {
  primary:
    "bg-[linear-gradient(110deg,#8B5CF6_0%,#4F6BFF_55%,#3FD0E0_100%)] text-ink shadow-[0_0_40px_-12px_rgba(79,107,255,0.7)]",
  secondary: "border border-mist/30 text-paper hover:border-cyan/60",
};

const sizes = {
  md: "px-7 py-4 text-base",
  sm: "px-5 py-2.5 text-sm",
};

export function WhatsAppLink({
  children,
  message,
  variant = "primary",
  size = "md",
  className = "",
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
