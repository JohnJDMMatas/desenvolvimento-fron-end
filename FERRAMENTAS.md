# Configuração das Ferramentas de Desenvolvimento

Documentação dos passos realizados na branch `feature-ferramentas-desenvolvimento`.

---

## Passo 1 — Criar branch

```bash
git checkout main
git checkout -b feature-ferramentas-desenvolvimento
```

---

## Passo 2 — Adicionar npm

```bash
npm init -y
```

Cria o `package.json` com as configurações iniciais do projeto.

---

## Passo 3 — .gitignore

Criado o arquivo `.gitignore` para ignorar `node_modules/` e outros arquivos gerados:

```
node_modules/
dist/
.env
```

Após criar:
```bash
git add .gitignore
git commit -m "chore: adiciona .gitignore"
```

---

## Passo 4 e 5 — ESLint

```bash
npm install --save-dev eslint @eslint/js globals
```

Arquivo de configuração: `eslint.config.js`

Comando no `package.json`:
```json
"lint": "eslint js/**/*.js",
"lint:fix": "eslint js/**/*.js --fix"
```

Uso:
```bash
npm run lint       # verifica erros
npm run lint:fix   # corrige automaticamente
```

---

## Passo 6 e 7 — Prettier

```bash
npm install --save-dev prettier
```

Arquivo de configuração: `.prettierrc`

Comando no `package.json`:
```json
"format": "prettier --write \"**/*.{js,html,css,json}\"",
"format:check": "prettier --check \"**/*.{js,html,css,json}\""
```

Uso:
```bash
npm run format         # formata todos os arquivos
npm run format:check   # verifica sem modificar
```

---

## Passo 8 e 9 — Husky + lint-staged

```bash
npm install --save-dev husky lint-staged
npx husky init
```

Hooks criados em `.husky/`:
- `pre-commit` → executa `lint-staged` antes de cada commit
- `commit-msg` → valida o padrão da mensagem de commit

`lint-staged` no `package.json`:
```json
"lint-staged": {
  "*.js": ["eslint --fix", "prettier --write"],
  "*.{html,css,json}": ["prettier --write"]
}
```

---

## Passo 10 — Teste de Falha (commit inválido)

Para demonstrar o funcionamento do Husky, faça um commit com código intencionalmente errado:

```js
// arquivo de teste com erro intencional
var x = 1   // usa var (proibido) e falta ponto e vírgula
```

Ao tentar commitar:
```bash
git add .
git commit -m "teste"
# ❌ ESLint vai bloquear o commit!
# ❌ Mensagem de commit também inválida (não segue padrão)
```

Saída esperada:
```
✗ eslint: 'var' declarations are not allowed. Use 'let' or 'const'.
✗ commit-msg: Mensagem de commit inválida!
```

---

## Passo 11 — Vite

```bash
npm install --save-dev vite
```

Arquivo de configuração: `vite.config.js`

Comandos no `package.json`:
```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
```

Uso:
```bash
npm run dev      # servidor de desenvolvimento em localhost:3000
npm run build    # gera build em /dist
npm run preview  # visualiza o build
```

---

## Resumo dos arquivos criados/modificados

| Arquivo | Descrição |
|---|---|
| `package.json` | Configuração npm com todos os scripts |
| `.gitignore` | Ignora node_modules e dist |
| `eslint.config.js` | Regras do ESLint |
| `.prettierrc` | Regras do Prettier |
| `.prettierignore` | Arquivos ignorados pelo Prettier |
| `vite.config.js` | Configuração do Vite |
| `.husky/pre-commit` | Hook: roda lint-staged antes do commit |
| `.husky/commit-msg` | Hook: valida padrão da mensagem |
