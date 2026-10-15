# 📝 Sugestão: Renomear Arquivos para Compatibilidade com GitHub

## Problema Identificado

Os nomes dos arquivos de logo contêm **espaços e caracteres especiais** que podem causar problemas no Git/GitHub:

- ❌ `Logo Núcleo Inovação 2025 melhorada.png`
- ❌ `logo completa colorida Inovação e Negócios.jpeg`

## Solução Recomendada

### Opção 1: Renomear os Arquivos (Recomendado)

**Nomes sugeridos:**
- ✅ `logo-aemflo-cdl.png` (para AEMFLO/CDL São José)
- ✅ `logo-nucleo-inovacao.jpeg` (para Núcleo de Inovação e Negócios)

**Comandos para renomear:**
```bash
# Renomear arquivos
git mv "public/assets/Logo Núcleo Inovação 2025 melhorada.png" "public/assets/logo-aemflo-cdl.png"
git mv "public/assets/logo completa colorida Inovação e Negócios.jpeg" "public/assets/logo-nucleo-inovacao.jpeg"

# Commitar
git add .
git commit -m "Rename logo files for GitHub compatibility"
git push origin main
```

**Depois atualize as referências nos componentes:**
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

Mude de:
```tsx
src="/assets/Logo Núcleo Inovação 2025 melhorada.png"
src="/assets/logo completa colorida Inovação e Negócios.jpeg"
```

Para:
```tsx
src="/assets/logo-aemflo-cdl.png"
src="/assets/logo-nucleo-inovacao.jpeg"
```

---

### Opção 2: Usar Git LFS (Se os arquivos forem grandes)

Se os arquivos de mídia forem muito grandes (>50MB):

```bash
# Instalar Git LFS
git lfs install

# Rastrear tipos de arquivo
git lfs track "*.png"
git lfs track "*.jpeg"
git lfs track "*.jpg"
git lfs track "*.MOV"
git lfs track "*.mp4"

# Commitar o .gitattributes
git add .gitattributes
git commit -m "Add Git LFS tracking"
git push origin main
```

---

### Opção 3: Hospedar Imagens Externamente

Se o problema persistir, hospede as imagens em:
- **Imgur** (gratuito)
- **Cloudinary** (gratuito até certo limite)
- **GitHub CDN** (raw.githubusercontent.com)
- **AWS S3** (pago, mas confiável)

Depois use URLs absolutas nos componentes:
```tsx
src="https://seu-cdn.com/logo-aemflo-cdl.png"
```

---

## Checklist de Arquivos

Verifique se todos os arquivos estão com nomes amigáveis:

| Arquivo Atual | Nome Sugerido | Status |
|---------------|---------------|--------|
| `Logo Núcleo Inovação 2025 melhorada.png` | `logo-aemflo-cdl.png` | ⚠️ Renomear |
| `logo completa colorida Inovação e Negócios.jpeg` | `logo-nucleo-inovacao.jpeg` | ⚠️ Renomear |
| `Arte_feed.jpeg` | ✅ OK | ✅ |
| `video_churras.MOV` | `video-churras.mp4` (comprimir) | ⚠️ Verificar tamanho |
| `foto1.jpg` | ✅ OK | ✅ |
| `foto2.jpg` | ✅ OK | ✅ |
| `foto3.jpg` | ✅ OK | ✅ |

---

## Próximos Passos

1. **Ver o erro específico** que o Git está mostrando
2. **Aplicar a solução** adequada (renomear, LFS, ou hospedar externamente)
3. **Testar o push** novamente
4. Se ainda não funcionar, **compartilhar a mensagem de erro** para análise detalhada

---

*Veja também: `TROUBLESHOOTING_GITHUB.md` para mais soluções*
