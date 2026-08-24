export type FeaturedCase = {
  name: string;
  tagline: string;
  description: string;
  status: "Em construção" | "No ar";
  imageSrc: string;
  imageAlt: string;
};

// Primeiro negócio estruturado pela GB Company. Atualize `status` para
// "No ar" e adicione um link quando o site do Andrezinho for publicado.
export const FEATURED_CASES: FeaturedCase[] = [
  {
    name: "Andrezinho",
    tagline: "Preço de oportunidade. Negócio de verdade.",
    description:
      "Marketplace com conferência física e verificação de identidade: quem vende tem a oportunidade, quem compra tem a garantia de que o produto existe e chega de verdade.",
    status: "Em construção",
    imageSrc: "/cases/andrezinho.jpg",
    imageAlt: "Andrezinho, à frente do marketplace que leva o nome dele",
  },
];
