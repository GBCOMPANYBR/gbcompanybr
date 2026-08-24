/**
 * Site-wide constants. Everything a non-developer needs to update
 * before launch lives in this one file — see README.md.
 */

export const WHATSAPP_NUMBER = "5527999723343";

export const WHATSAPP_MESSAGES = {
  default:
    "Olá! Tenho uma ideia de negócio e quero estruturar com a GB Company.",
} as const;

export function buildWhatsAppUrl(
  message: string = WHATSAPP_MESSAGES.default
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Domínio oficial, comprado na Hostinger em 2026-08-24 e conectado ao
// projeto na Vercel (DNS apontando pra 76.76.21.21).
export const SITE_URL = "https://gbcompanybr.com.br";

export const SITE_NAME = "GB Company";
export const SITE_TAGLINE = "E se...";

// @gbcompanybr é o handle oficial da marca (confirmado livre em 2026-08-22,
// pareado com o domínio gbcompanybr.com.br). Este link já funciona assim que
// a conta for criada — não precisa trocar nada aqui depois.
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/gbcompanybr",
};

// TODO: trocar pelo CNPJ real assim que a empresa estiver registrada
export const CNPJ_PLACEHOLDER = "00.000.000/0001-00";
