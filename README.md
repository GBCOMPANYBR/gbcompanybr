# GB Company — Site institucional

Site one-page da GB Company: CNPJ, site, sistema, marketing e comercial —
tudo estruturado e no ar. Feito em Next.js (App Router) + Tailwind CSS,
majoritariamente estático e otimizado para deploy na Vercel (a única rota
dinâmica é o gerador de preview com IA, explicado abaixo).

## Rodando localmente

```bash
npm install
cp .env.local.example .env.local   # cole sua ANTHROPIC_API_KEY (veja abaixo)
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run lint    # eslint
```

## O que trocar antes de publicar

Tudo o que precisa de dado real (número de WhatsApp, links, CNPJ) está
concentrado em **[`src/lib/config.ts`](src/lib/config.ts)**:

| O que trocar | Onde |
| --- | --- |
| Número de WhatsApp | `WHATSAPP_NUMBER` em `src/lib/config.ts` (formato: DDI+DDD+número, só dígitos, ex. `5511999999999`) |
| Mensagem pré-preenchida do WhatsApp | `WHATSAPP_MESSAGES` em `src/lib/config.ts` |
| URL de produção do site | `SITE_URL` já está em `gbcompanybr.com.br` — a identidade oficial confirmada (ver "Domínio e redes sociais" abaixo). Só precisa registrar o domínio de verdade. |
| Link do Instagram | `SOCIAL_LINKS.instagram` já aponta pra `@gbcompanybr` — só precisa criar a conta. |
| CNPJ (rodapé) | `CNPJ_PLACEHOLDER` em `src/lib/config.ts` |
| Cases em destaque | `src/data/cases.ts` — array `FEATURED_CASES` (hoje só o Andrezinho, primeiro negócio estruturado). Foto em `public/cases/`. Troque `status` para `"No ar"` quando o negócio tiver site público. |
| Depoimentos em vídeo | `src/data/testimonials.ts` — array `TESTIMONIALS`. Cada item leva `name`, `business`, `quote` e `videoUrl`. Enquanto `videoUrl` estiver vazio, o card mostra "Em breve"; preencha para virar link clicável com o play. |

A seção "Prova social" só some do site se **os dois arrays** (`FEATURED_CASES` e `TESTIMONIALS`) estiverem vazios.

Todas as chamadas de WhatsApp do site (`WhatsAppLink`) usam essas mesmas
constantes — trocar o número em um único lugar atualiza o site inteiro.

## Domínio e redes sociais

Nome exibido no site: **GB Company**. Handle/domínio usado em todo canal
externo: **gbcompanybr** — ou seja, `gbcompanybr.com.br` e `@gbcompanybr`
no Instagram. Confirmado em 2026-08-22: `gbcompany.com.br` já pertence a
terceiro (desde 2023) e `@gbcompany`/`@gb.company` também já estão em uso
por contas sem relação com a marca — `gbcompanybr` foi o que sobrou livre
tanto no registro.br quanto no Instagram, e virou a identidade oficial.

**Pendente:** registrar `gbcompanybr.com.br` em
[registro.br](https://registro.br) e criar `@gbcompanybr` no Instagram —
domínio `.com.br` não tem período de graça público, então quanto antes
melhor.

## Identidade de marca

O símbolo oficial ("a Ligadura") vive em
[`src/components/icons/GBSymbol.tsx`](src/components/icons/GBSymbol.tsx)
(versão estática) e
[`src/components/icons/GBSymbolAnimated.tsx`](src/components/icons/GBSymbolAnimated.tsx)
(versão que se desenha, usada no hero). Ambos reproduzem o SVG oficial do
manual de identidade — não redesenhar, esticar, rotacionar, separar ou
recolorir o glifo.

Cores, tipografia e o gradiente oficial (`110deg, #8B5CF6 → #4F6BFF →
#3FD0E0`) estão como tokens do Tailwind v4 em
[`src/app/globals.css`](src/app/globals.css) (`@theme`): `ink`, `panel`,
`violet`, `blue`, `cyan`, `mist`, `paper`.

## Gerador de preview com IA ("E se...")

A seção **#e-se** (botão "E SE" no hero) deixa o visitante descrever a ideia
dele e gera, na hora, um preview de marca (nome, tagline e headline de site)
com uma chamada real de IA — via
[`src/app/api/preview/route.ts`](src/app/api/preview/route.ts), usando o
[SDK oficial da Anthropic](https://www.npmjs.com/package/@anthropic-ai/sdk).
Isso é a única parte do site que não é 100% estática: essa rota vira uma
Vercel Function.

**Antes de publicar:**

1. Pegue uma chave em [console.anthropic.com](https://console.anthropic.com).
2. Local: cole em `.env.local` (`ANTHROPIC_API_KEY=sk-ant-...`).
3. Vercel: adicione a mesma variável em *Project Settings → Environment
   Variables*. Sem ela, a rota responde com erro amigável em vez de quebrar
   o site — o botão "Gerar preview" simplesmente mostra a mensagem de erro.

**Custo por chamada.** Por padrão a rota usa o modelo `claude-opus-5`
(`$5 / $25` por milhão de tokens de entrada/saída) com `effort: "low"` e
saída curta — cada geração custa uma fração de centavo, mas é *por clique*
e o botão fica público. Se o volume de tráfego te preocupar, troque a
constante `MODEL` no topo de `src/app/api/preview/route.ts` por um modelo
mais barato (ex. `claude-haiku-4-5`, `$1 / $5` por milhão de tokens).

**Proteção contra abuso.** Três camadas, todas em
`src/app/api/preview/route.ts`:

- Tamanho da ideia limitado a 10–400 caracteres.
- **Trava por sessão** (`MAX_PREVIEWS_PER_SESSION`, hoje `2`): cada visitante
  só gera 2 previews por sessão de navegador (cookie de 24h) — depois disso
  o formulário some e só sobra o CTA de WhatsApp. É a proteção principal
  contra alguém ficar gerando ideia atrás de ideia sem nunca fechar.
- Rate-limit de 8 tentativas a cada 10 minutos por IP, como backstop geral.

Tanto a trava de sessão quanto o rate-limit por IP rodam na memória da
function — não são duráveis entre cold starts/múltiplas instâncias. Pra
tráfego sério em produção, troque por um rate limiter durável (ex. Upstash
Ratelimit) ou proteção no nível do domínio (Vercel Firewall).

## Deploy na Vercel

1. Suba o projeto para um repositório Git (GitHub/GitLab/Bitbucket).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório —
   a Vercel detecta o Next.js automaticamente, sem configuração extra.
3. Antes do deploy final, confira se `SITE_URL` em `src/lib/config.ts`
   já aponta para o domínio real (afeta metatags, Open Graph e sitemap) e
   se `ANTHROPIC_API_KEY` está configurada nas Environment Variables do
   projeto (veja "Gerador de preview com IA" acima).
4. Depois do primeiro deploy, valide o favicon, o preview de Open Graph
   (`/opengraph-image`), o `sitemap.xml`/`robots.txt` e o botão "E se..."
   no domínio final.

## Estrutura

```
src/
  app/            rotas, layout, metadata, sitemap, robots, ícones
    api/preview/  rota do gerador de preview com IA (Vercel Function)
  components/
    icons/        símbolo da marca (estático e animado)
    sections/     cada bloco da página (Hero, FAQ, etc.)
  data/           conteúdo em array (depoimentos)
  lib/            config.ts — constantes que você vai trocar
```
