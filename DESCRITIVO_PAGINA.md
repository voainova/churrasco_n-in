# 📋 DESCRIPTIVO COMPLETO DA PÁGINA
## Churrasco da Inovação e Negócios | Cotas de Patrocínio

---

## 🎯 OBJETIVO DA PÁGINA

Página institucional/proposta de patrocínio para o evento "Churrasco da Inovação e Negócios", organizado pelo Núcleo de Inovação e Negócios da AEMFLO/CDL São José. A página apresenta o evento, a programação, as cotas de patrocínio disponíveis e convida empresas a patrocinarem o evento.

**Público-alvo:** Empresários e potenciais patrocinadores da Grande Florianópolis/SC.

---

## 🛠️ STACK TÉCNICA

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Estilização:** Tailwind CSS v4
- **Fontes:**
  - **Montserrat** (títulos e destaques) — via `@fontsource/montserrat`
  - **Inter** (corpo de texto) — via `@fontsource/inter`
- **Deploy:** Cloudflare Pages (raiz `/`)
- **Repositório:** GitHub (branch `main`)

---

## 🎨 IDENTIDADE VISUAL

### Paleta de Cores
- **Preto profundo:** `#0f0805`, `#1a0f0a` (fundos principais)
- **Marrom escuro:** `#2d1810`, `#4a1f0f` (gradientes)
- **Dourado principal:** `#d4a574` → `#f4c984` (gradiente dourado usado em destaques)
- **Prata:** `#b8b8b8` (cota prata)
- **Bronze:** `#b87333` (cota bronze)
- **Verde:** `#4a7c59` (cota apoio)
- **Branco:** `#ffffff` (header e footer)

### Gradientes
- **gradient-hero:** `135deg, #1a0f0a → #2d1810 → #4a1f0f`
- **gradient-gold:** `135deg, #d4a574 → #f4c984 → #d4a574`
- **gradient-dark:** `180deg, #0f0805 → #1a0f0a`
- **text-gold:** Gradiente dourado aplicado em texto (background-clip: text)

### Tipografia
- **Títulos (h1, h2, h3):** Montserrat, font-black, classes `.font-display`
- **Corpo de texto:** Inter, sans-serif
- **Tamanhos:** 
  - Hero: `text-5xl md:text-7xl`
  - Seções: `text-4xl md:text-5xl`
  - Subtítulos: `text-2xl` a `text-3xl`

---

## 📐 ESTRUTURA DA PÁGINA (Seções)

### 1. HEADER (fixo no topo)
- **Fundo:** Branco (`bg-white`)
- **Posicionamento:** `sticky top-0 z-50`
- **Conteúdo:** Duas logos centralizadas
  - Logo AEMFLO/CDL São José (`Logo Núcleo Inovação 2025 melhorada.png`)
  - Logo Núcleo de Inovação e Negócios (`logo completa colorida Inovação e Negócios.jpeg`)
- **Altura:** `h-14 md:h-16`

### 2. HERO SECTION
- **Fundo:** Gradiente escuro (`gradient-hero`) + overlay de imagem
- **Layout:** Grid 2 colunas (texto | imagem)
- **Conteúdo:**
  - Badge "Proposta Exclusiva de Patrocínio" (dourado)
  - Título: "Churrasco da Inovação & Negócios" (dourado + branco)
  - Descrição do evento
  - 3 cards de info: Data (05/Nov/2026), Horário (19h00), Local (AEMFLO/CDL-SJ)
  - Imagem: `Arte_feed.jpeg` em container quadrado
  - Badge flutuante: "80 Empresários Qualificados"

### 3. EDIÇÃO 2025 (Reviva os melhores momentos)
- **Fundo:** Gradiente escuro (`gradient-dark`)
- **Conteúdo:**
  - Vídeo (`video_churras.MOV`) — autoplay, muted, loop
  - Galeria 2x1: `foto2.jpg` (networking) + `foto1.jpg` (palestra)
  - 3 stat cards: "60+ Participantes", "4h De Experiência", "100% Aprovação"

### 4. SOBRE O EVENTO
- **Fundo:** Preto (`bg-black`)
- **Conteúdo:**
  - 3 stat cards: "80 Participantes", "3h30 De Evento", "1 Aniversário"
  - Grid 2 colunas:
    - Texto explicativo sobre o Núcleo + tags (Inovação, Vendas, Networking, Gestão, Liderança)
    - Imagem: `foto3.jpg`

### 5. PROGRAMAÇÃO (Timeline)
- **Fundo:** Gradiente escuro (`gradient-dark`)
- **Layout:** Timeline vertical com dots dourados
- **Itens:**
  1. **19h00–19h15** — Recepção & Exposição dos Patrocinadores
  2. **19h15–19h25** — Abertura & Aniversário do Núcleo
  3. **19h25–19h45** — 🎤 Painel Dinâmico dos Patrocinadores (com tags Master/Prata/Bronze)
  4. **19h45–20h35** — Palestra Principal (Fernando Atalaia)
  5. **20h45–22h30** — 🥩 Churrasco Gourmet pelo Chef Rodrigo

### 6. COTAS DE PATROCÍNIO
- **Fundo:** Preto (`bg-black`)
- **Layout:** Grid 4 colunas (md:2, lg:4)
- **Cards:**
  - **MASTER** (R$ 3.000) — Borda dourada, badge "Destaque", 1 cota disponível
  - **PRATA** (R$ 2.000) — Borda prata, até 3 cotas
  - **BRONZE** (R$ 1.000) — Borda bronze, até 5 cotas
  - **APOIO** (R$ 500) — Borda verde, exclusivo para nucleados
- **Cada card lista:** Entrevista no palco, mesa, press kit, logo, ingressos churrasco + imersão, menções MC, posts Instagram

### 7. IMERSÃO (Bônus Exclusivo)
- **Fundo:** Gradiente escuro com blobs dourados/laranjas (blur)
- **Card central:** `immersion-card`
- **Conteúdo:**
  - Título: "Imersão da Inovação e Negócios"
  - **Subtítulo destacado:** "Treinamento completo para sua equipe — incluso no patrocínio"
  - 5 pilares: Inovação, Vendas, Finanças, Gestão, Lideranças
  - Lista de ingressos por cota (Master: 10, Prata: 5, Bronze: 3, Apoio: 1)

### 8. POR QUE PATROCINAR
- **Fundo:** Preto (`bg-black`)
- **Layout:** Grid 3 colunas
- **6 cards com ícones:**
  1. 🎯 Público Qualificado
  2. 🎤 Palco com Credibilidade
  3. 🤝 Networking Real
  4. 📱 Visibilidade Digital
  5. 🚀 Bônus Imersão
  6. 🏆 Associação de Marca

### 9. CTA FINAL
- **Fundo:** Gradiente hero com overlay
- **Conteúdo:**
  - Título: "Garanta sua vaga no palco"
  - 2 stat cards: Contato (Douglas - (48) 99912-8875) + Info do evento
  - Botão CTA: "Falar com Douglas →" (link WhatsApp: `https://wa.me/5548999128875`)

### 10. FOOTER
- **Fundo:** Branco (`bg-white`)
- **Fontes:** Escuras (text-gray-900, text-gray-700, text-gray-500)
- **Conteúdo:**
  - Duas logos (mesmas do header)
  - "Núcleo de Inovação e Negócios"
  - "AEMFLO / CDL São José-SC"
  - "Proposta de Patrocínio • Churrasco da Inovação e Negócios 2026"

---

## 📁 ESTRUTURA DE ARQUIVOS

```
projeto/
├── index.html
├── package.json
├── vite.config.js              ← base: '/' para deploy na raiz
├── tsconfig.json
├── public/
│   └── assets/                 ← Imagens e vídeos
│       ├── Arte_feed.jpeg
│       ├── video_churras.MOV
│       ├── foto1.jpg
│       ├── foto2.jpg
│       ├── foto3.jpg
│       ├── Logo Núcleo Inovação 2025 melhorada.png
│       └── logo completa colorida Inovação e Negócios.jpeg
└── src/
    ├── main.tsx
    ├── App.tsx                 ← Importa todas as seções
    ├── index.css               ← Estilos custom + Tailwind
    └── components/
        ├── Header.tsx
        ├── HeroSection.tsx
        ├── Edicao2025Section.tsx
        ├── SobreEventoSection.tsx
        ├── ProgramacaoSection.tsx
        ├── CotasSection.tsx
        ├── ImersaoSection.tsx
        ├── PorQuePatrocinarSection.tsx
        ├── CtaSection.tsx
        └── Footer.tsx
```

---

## 🖼️ ASSETS UTILIZADOS

| Arquivo | Localização na Página |
|---------|----------------------|
| `Logo Núcleo Inovação 2025 melhorada.png` | Header + Footer |
| `logo completa colorida Inovação e Negócios.jpeg` | Header + Footer |
| `Arte_feed.jpeg` | Hero Section (imagem principal) |
| `video_churras.MOV` | Seção Edição 2025 (vídeo) |
| `foto1.jpg` | Seção Edição 2025 (galeria - palestra) |
| `foto2.jpg` | Seção Edição 2025 (galeria - networking) |
| `foto3.jpg` | Seção Sobre o Evento (grupo) |

---

## 📝 CONTEÚDO/COPY PRINCIPAL

### Dados do Evento
- **Nome:** Churrasco da Inovação & Negócios
- **Data:** 05 de Novembro de 2026
- **Horário:** 19h00
- **Local:** AEMFLO / CDL São José-SC
- **Público esperado:** 80 empresários qualificados
- **Organização:** Núcleo de Inovação e Negócios da AEMFLO/CDL São José

### Palestrante
- **Fernando Atalaia** — Estrategista de Ecossistema Empresarial
- **Tema:** Vendas, Ecossistema e Aumento de Faturamento

### Chef
- **Chef Rodrigo** — Churrasco Gourmet

### Contato
- **Douglas** — Consultor de Núcleos
- **Telefone:** (48) 99912-8875
- **WhatsApp:** https://wa.me/5548999128875

---

## 💰 COTAS DE PATROCÍNIO (Resumo)

| Cota | Valor | Disponibilidade | Entrevista | Ingressos Churrasco | Ingressos Imersão |
|------|-------|-----------------|------------|---------------------|-------------------|
| MASTER | R$ 3.000 | 1 cota | 7 min | 10 | 10 |
| PRATA | R$ 2.000 | Até 3 | 4 min | 5 | 5 |
| BRONZE | R$ 1.000 | Até 5 | Painel Relâmpago | 3 | 3 |
| APOIO | R$ 500 | Limitada (nucleados) | — | 1 | 1 |

---

## 🔄 POSSÍVEIS MUDANÇAS PARA PÁGINA DE VENDAS

Ao adaptar para uma página de vendas, considere:

1. **Mudar o foco de "proposta de patrocínio" para "compra de ingressos"**
2. **Adicionar contador regressivo** para o evento
3. **Incluir depoimentos** de participantes da edição anterior
4. **Adicionar formulário de inscrição/compra**
5. **Incluir seção de FAQ** (perguntas frequentes)
6. **Adicionar garantia/satisfação**
7. **Incluir seção "Para quem é este evento"**
8. **Adicionar botões de compra com urgência** (vagas limitadas)
9. **Incluir seção de benefícios para o participante** (não patrocinador)
10. **Adicionar prova social** (fotos, vídeos, depoimentos em vídeo)
11. **Criar seção de palestrante mais detalhada** com bio e foto
12. **Adicionar seção do local** com mapa
13. **Incluir seção "O que está incluso"** (churrasco, palestra, networking, etc)

---

## 🚀 DEPLOY

- **Plataforma:** Cloudflare Pages
- **Branch:** `main`
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Root directory:** `/` (raiz)
- **Base URL:** `/` (configurado no vite.config.js)

---

*Documento gerado em 2026 — Página: Churrasco da Inovação e Negócios*
