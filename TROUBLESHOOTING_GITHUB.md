# 🚨 Guia de Troubleshooting - Erro ao subir para o GitHub

## Problemas Comuns e Soluções

### 1. **Arquivos com nomes contendo espaços ou caracteres especiais**

Os arquivos de logo têm nomes problemáticos:
- ❌ `Logo Núcleo Inovação 2025 melhorada.png` (espaços + acento)
- ❌ `logo completa colorida Inovação e Negócios.jpeg` (espaços + acento)

**Solução:** Renomeie os arquivos antes de commitar:
```bash
# Renomear arquivos com espaços/acentos
git mv "public/assets/Logo Núcleo Inovação 2025 melhorada.png" "public/assets/logo-aemflo-cdl.png"
git mv "public/assets/logo completa colorida Inovação e Negócios.jpeg" "public/assets/logo-nucleo-inovacao.jpeg"
```

Depois atualize as referências nos componentes:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

---

### 2. **Arquivos muito grandes (limite do GitHub: 100MB por arquivo)**

O arquivo `video_churras.MOV` pode ser muito grande.

**Solução A: Usar Git LFS (Large File Storage)**
```bash
# Instalar Git LFS
git lfs install

# Rastrear arquivos de vídeo
git lfs track "*.MOV"
git lfs track "*.mp4"

# Commitar o .gitattributes
git add .gitattributes
git commit -m "Add Git LFS tracking for video files"
git push origin main
```

**Solução B: Comprimir o vídeo**
Use ferramentas como HandBrake ou FFmpeg para reduzir o tamanho:
```bash
# Exemplo com FFmpeg
ffmpeg -i video_churras.MOV -vcodec h264 -crf 28 video_churras_compressed.mp4
```

**Solução C: Hospedar o vídeo externamente**
- YouTube (não listado)
- Vimeo
- Cloudinary
- AWS S3

Depois atualize a referência no componente `Edicao2025Section.tsx`.

---

### 3. **Pasta `dist/` ou `node_modules/` foi commitada**

Se essas pastas foram commitadas antes de estar no `.gitignore`:

```bash
# Remover do cache do Git (mantém os arquivos locais)
git rm -r --cached dist/
git rm -r --cached node_modules/

# Commitar a remoção
git commit -m "Remove dist and node_modules from tracking"
git push origin main
```

---

### 4. **Conflitos com a branch `main`**

```bash
# Atualizar sua branch local
git pull origin main --rebase

# Se houver conflitos, resolva e depois:
git add .
git rebase --continue
git push origin main
```

---

### 5. **Autenticação SSH/HTTPS**

**Se usar HTTPS:**
```bash
# Verificar credenciais
git config --global credential.helper

# Se não estiver configurado:
git config --global credential.helper store
# ou
git config --global credential.helper manager  # Windows
```

**Se usar SSH:**
```bash
# Testar conexão SSH
ssh -T git@github.com

# Se falhar, gerar nova chave SSH:
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Adicionar chave pública ao GitHub
cat ~/.ssh/id_ed25519.pub
# Copie e adicione em: GitHub > Settings > SSH and GPG keys
```

---

### 6. **Branch errada**

```bash
# Verificar em qual branch você está
git branch

# Se não estiver na main:
git checkout main
git merge sua-branch-atual

# Ou criar uma nova branch e fazer PR:
git checkout -b feature/atualizacao
git push origin feature/atualizacao
# Depois crie um Pull Request no GitHub
```

---

### 7. **Repositório muito grande (limite: 1GB)**

```bash
# Ver tamanho do repositório
git count-objects -vH

# Se estiver grande, remover arquivos grandes do histórico:
# (CUIDADO: isso reescreve o histórico)
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch caminho/para/arquivo/grande" \
  --prune-empty --tag-name-filter cat -- --all
```

---

## 🔧 Comandos de Diagnóstico

```bash
# Ver status do Git
git status

# Ver o que está sendo rastreado
git ls-files

# Ver tamanho dos arquivos rastreados
git ls-files | xargs du -sh

# Ver histórico de commits
git log --oneline

# Ver branches
git branch -a

# Ver remote
git remote -v
```

---

## ✅ Checklist Antes do Push

1. ✅ Verificar se `.gitignore` está atualizado
2. ✅ Verificar se não há arquivos com nomes problemáticos
3. ✅ Verificar se não há arquivos muito grandes (>100MB)
4. ✅ Verificar se está na branch correta (`main`)
5. ✅ Fazer `git pull` antes de `git push`
6. ✅ Verificar se a autenticação está configurada
7. ✅ Verificar se o repositório remoto está correto

---

## 🚀 Fluxo Correto de Push

```bash
# 1. Verificar status
git status

# 2. Adicionar alterações
git add .

# 3. Commitar
git commit -m "Descrição clara das mudanças"

# 4. Puxar últimas alterações
git pull origin main

# 5. Push
git push origin main
```

---

## 📞 Se Nada Funcionar

**Mensagem de erro específica?** Copie e cole aqui para análise detalhada.

**Possíveis erros comuns:**
- `error: failed to push some refs to...` → Fazer `git pull` antes
- `error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly` → Arquivo muito grande
- `Permission denied (publickey)` → Problema de autenticação SSH
- `fatal: unable to access...` → Problema de rede ou URL errada
- `rejected ... non-fast-forward` → Branch desatualizada, fazer `git pull`

---

*Atualizado em 2026*
