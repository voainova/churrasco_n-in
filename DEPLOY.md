# Deploy no Cloudflare Pages

## ✅ Configuração Atualizada

O projeto está configurado para deploy na **raiz** (main) com `base: '/'` no `vite.config.js`.

## Estrutura do Projeto

```
projeto/
├── public/
│   └── assets/              ← Coloque suas imagens e vídeos aqui
│       ├── Arte_feed.jpeg
│       ├── video_churras.MOV
│       ├── foto1.jpg
│       ├── foto2.jpg
│       ├── foto3.jpg
│       ├── Logo Núcleo Inovação 2025 melhorada.png
│       └── logo completa colorida Inovação e Negócios.jpeg
├── src/
│   ├── components/
│   └── ...
├── dist/                    ← Pasta gerada pelo build (deploy aqui)
└── ...
```

## Como Fazer Deploy no Cloudflare Pages

### Passo 1: Preparar o Repositório GitHub

1. **Certifique-se de que todos os assets estão na pasta `public/assets/`:**
   - Arte_feed.jpeg
   - video_churras.MOV
   - foto1.jpg
   - foto2.jpg
   - foto3.jpg
   - Logo Núcleo Inovação 2025 melhorada.png
   - logo completa colorida Inovação e Negócios.jpeg

2. **Faça commit e push para a branch `main`:**
   ```bash
   git add .
   git commit -m "Atualização do projeto"
   git push origin main
   ```

### Passo 2: Configurar Cloudflare Pages

1. **Acesse o Cloudflare Dashboard** e vá para "Pages"

2. **Crie um novo projeto:**
   - Clique em "Create a project"
   - Selecione "Connect to Git"
   - Escolha seu repositório GitHub

3. **Configure o build:**
   - **Framework preset:** Selecione "Vite" (ou "None")
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (raiz)

4. **Deploy!**
   - Clique em "Save and Deploy"
   - Aguarde o build completar

## Estrutura da Pasta `dist/` (Output do Build)

Após o build, a pasta `dist/` terá esta estrutura:

```
dist/
├── index.html               ← Na raiz ✅
└── assets/
    ├── index-*.js           ← Bundle JavaScript
    ├── index-*.css          ← Bundle CSS
    ├── Arte_feed.jpeg       ← Copiado de public/assets/
    ├── video_churras.MOV
    ├── foto1.jpg
    ├── foto2.jpg
    ├── foto3.jpg
    ├── Logo Núcleo Inovação 2025 melhorada.png
    └── logo completa colorida Inovação e Negócios.jpeg
```

## Configuração do Vite

O `vite.config.js` está configurado com `base: '/'` para garantir que todos os caminhos sejam absolutos a partir da raiz:

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // ← Deploy na raiz
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
```

## Atualizações Futuras

Quando você fizer alterações no código:

1. **Faça as alterações nos arquivos `src/`**
2. **Commit e push para a branch `main`:**
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push origin main
   ```
3. **O Cloudflare Pages detectará automaticamente e fará o redeploy**

## Problemas Comuns

### Se as imagens não carregarem:
- Verifique se os arquivos estão em `public/assets/`
- Confirme que os nomes dos arquivos estão corretos (case-sensitive)
- Verifique se os caminhos no código estão como `/assets/nome-do-arquivo`

### Se o deploy não atualizar:
- Confirme que está fazendo push para a branch `main`
- Verifique nas configurações do Cloudflare Pages se o "Root directory" está como `/`
- Confirme que o "Build output directory" está como `dist`

### Se os caminhos estiverem errados:
- Verifique se o `vite.config.js` tem `base: '/'`
- Faça um novo build: `npm run build`
- Verifique se o `dist/index.html` tem caminhos absolutos (`/assets/...`)

## URLs de Produção

Após o deploy, seu site estará disponível em:
- **URL principal:** `https://seu-projeto.pages.dev`
- **URL personalizada:** (se configurada no Cloudflare)

## Suporte

Se precisar de ajuda:
- Documentação do Vite: https://vitejs.dev/
- Documentação do Cloudflare Pages: https://developers.cloudflare.com/pages/
