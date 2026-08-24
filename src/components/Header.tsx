"use client";

import { useState } from "react";
import { GBSymbol } from "@/components/icons/GBSymbol";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#o-que-entra", label: "Estruturação completa" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#topo"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <GBSymbol className="h-8 w-8" gradientId="gbGradHeader" />
          <span className="font-display text-lg font-bold tracking-tight text-paper">
            GB Company
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#e-se"
            className="inline-flex items-center rounded-full border border-cyan/40 px-4 py-2 font-display text-xs font-extrabold uppercase tracking-wide text-cyan transition-colors hover:border-cyan hover:bg-cyan/10"
          >
            E se
          </a>
          <WhatsAppLink variant="secondary" size="sm">
            Falar no WhatsApp
          </WhatsAppLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-paper md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path
                d="M4 4L18 18M18 4L4 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6H19M3 11H19M3 16H19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-mist transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#e-se"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-cyan transition-colors hover:text-paper"
            >
              E se
            </a>
          </nav>
          <WhatsAppLink className="mt-5 w-full">
            Quero estruturar minha ideia
          </WhatsAppLink>
        </div>
      )}
    </header>
  );
}
