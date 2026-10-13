# Deploy no Cloudflare Pages

## Estrutura do Projeto

```
projeto/
├── public/
│   └── assets/          ← Coloque suas imagens e vídeos aqui
│       ├── Arte_feed.jpeg
│       ├── video_churras.MOV
│       ├── foto1.jpg
│       ├── foto2.jpg
│       └── foto3.jpg
├── src/
│   ├── components/
│   └── ...
├── dist/                ← Pasta gerada pelo build (deploy esta)
└── ...
```

## Como Fazer Deploy

### Opção 1: Deploy Direto (Recomendado)

1. **Faça o build do projeto:**
   ```bash
   npm run build
   ```

2. **No Cloudflare Pages:**
   - Crie um novo projeto
   - Conecte seu repositório GitHub
   - Configure:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
   - Deploy!

### Opção 2: Deploy Manual

1. **Faça o build:**
   ```bash
   npm run build
   ```

2. **Envie a pasta `dist/` para o Cloudflare:**
   - Use o Cloudflare CLI ou faça upload manual
   - A pasta `dist/` contém tudo que precisa ser publicado

## Estrutura da Pasta `dist/` (Output do Build)

```
dist/
├── index.html           ← Página principal (na raiz)
└── assets/
    ├── index-*.js       ← JavaScript compilado
    ├── index-*.css      ← CSS compilado
    ├── Arte_feed.jpeg   ← Suas imagens
    ├── video_churras.MOV
    ├── foto1.jpg
    ├── foto2.jpg
    └── foto3.jpg
```

## Importante

- Todos os caminhos estão configurados como **absolutos a partir da raiz** (`/assets/...`)
- Isso garante que funcione corretamente no Cloudflare Pages
- Os arquivos estáticos (imagens, vídeos) devem estar em `public/assets/` ANTES de fazer o build
- O Vite copia automaticamente os arquivos de `public/` para `dist/` durante o build

## Verificação Local

Antes de fazer deploy, teste localmente:

```bash
npm run dev
```

Acesse: http://localhost:3000

## Comandos Úteis

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```
