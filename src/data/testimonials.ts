export type Testimonial = {
  name: string;
  business: string;
  quote: string;
  /** URL do vídeo (YouTube, Vimeo, mp4 etc.) — deixe vazio até gravar o depoimento */
  videoUrl?: string;
};

// Depoimentos em vídeo dos clientes. Enquanto estiver vazio, a seção
// "Prova social" mostra só os cases em destaque (src/data/cases.ts).
export const TESTIMONIALS: Testimonial[] = [];
