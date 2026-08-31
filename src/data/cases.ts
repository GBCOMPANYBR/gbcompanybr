export type FeaturedCase = {
  name: string;
  badge: string;
  tagline: string;
  description: string;
  status: "Em construção" | "No ar";
  imageSrc: string;
  imageAlt: string;
};

export const FEATURED_CASES: FeaturedCase[] = [
  {
    name: "Andrezinho",
    badge: "Primeiro negócio estruturado",
    tagline: "Preço de oportunidade. Negócio de verdade.",
    description:
      "Marketplace com conferência física e verificação de identidade: quem vende tem a oportunidade, quem compra tem a garantia de que o produto existe e chega de verdade.",
    status: "No ar",
    imageSrc: "/cases/andrezinho.jpg",
    imageAlt: "Logo do marketplace Andrezinho",
  },
  {
    name: "iMetal",
    badge: "Sistema sob medida",
    tagline: "Gestão de pedidos, do papel pro sistema.",
    description:
      "Sistema de back-office para controlar pedidos, clientes e importações — dados reais em produção, substituindo planilha por um painel de verdade.",
    status: "No ar",
    imageSrc: "/cases/imetal.jpg",
    imageAlt: "Logo da iMetal",
  },
  {
    name: "Five Distribuidora",
    badge: "Site institucional",
    tagline: "Da caixa fechada à garrafa avulsa.",
    description:
      "Site institucional para distribuidora de bebidas na zona leste de São Paulo — atacado e varejo, catálogo por categoria e pedido direto pelo WhatsApp.",
    status: "No ar",
    imageSrc: "/cases/five-bebidas.jpg",
    imageAlt: "Logo da Five Distribuidora de Bebidas",
  },
];
