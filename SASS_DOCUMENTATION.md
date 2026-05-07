# Documentação - SASS no Projeto Tech Store

## 📋 Sumário

- [Instalação](#instalação)
- [Estrutura de Arquivos SCSS](#estrutura-de-arquivos-scss)
- [Variáveis de Tipografia](#variáveis-de-tipografia)
- [Temas de Cores](#temas-de-cores)
- [Layout Responsivo](#layout-responsivo)
- [Como Executar](#como-executar)

---

## 🚀 Instalação

Sass foi adicionado ao projeto e já foi instalado via npm. Para usar:

```bash
npm install
npm run dev
```

---

## 📁 Estrutura de Arquivos SCSS

A estrutura segue o padrão SCSS bem organizado:

```
scss/
├── style.scss              # Arquivo principal (importa todos)
├── _variables.scss         # Variáveis do projeto
├── _typography.scss        # Estilos de tipografia
├── _themes.scss            # Temas de cores (Light, Dark, Modern)
├── _components.scss        # Componentes e utilitários
└── _responsive.scss        # Media queries e estilos responsivos
```

### Qual arquivo editar?

- **_variables.scss**: Variáveis de fontes, tamanhos, breakpoints
- **_typography.scss**: Estilos de texto e títulos
- **_themes.scss**: Cores de cada tema
- **_components.scss**: Buttons, cards, navbar, etc.
- **_responsive.scss**: Estilos para mobile, tablet, desktop
- **style.scss**: Apenas importações (não editar!)

---

## 🔤 Variáveis de Tipografia

As variáveis estão em `_variables.scss`:

### Font Weights (Pesos)
```scss
$font-weight-light: 300;        // Leve
$font-weight-regular: 400;      // Normal
$font-weight-medium: 500;       // Médio
$font-weight-semibold: 600;     // Semi-bold
$font-weight-bold: 700;         // Negrito
$font-weight-extra-bold: 800;   // Extra negrito
```

### Font Styles (Estilos)
```scss
$font-style-normal: normal;
$font-style-italic: italic;
```

### Font Sizes (Tamanhos)
```scss
$font-size-h1: 2.5rem;          // Títulos principais
$font-size-h2: 2rem;            // Títulos secundários
$font-size-h3: 1.75rem;
$font-size-h4: 1.5rem;
$font-size-h5: 1.25rem;
$font-size-h6: 1rem;
$font-size-base: 1rem;          // Texto padrão
$font-size-sm: 0.875rem;        // Pequeno
$font-size-xs: 0.75rem;         // Muito pequeno
```

### Exemplos de Uso

```scss
// Em um arquivo SCSS
h1 {
  font-size: $font-size-h1;
  font-weight: $font-weight-bold;
  font-style: $font-style-normal;
  color: var(--color-font-heading);
}

p {
  font-size: $font-size-base;
  font-weight: $font-weight-regular;
  line-height: $line-height-body;
}
```

---

## 🎨 Temas de Cores

### 3 Temas Disponíveis

#### 1. **Light** (Claro)
- Cores claras e agradáveis
- Fundo branco
- Texto escuro
- Ideal para uso diurno

#### 2. **Dark** (Escuro)
- Cores escuras e confortáveis
- Fundo preto/cinzento escuro
- Texto claro
- Ideal para uso noturno

#### 3. **Modern** (Moderno/Vibrante)
- Cores vibrantes e modernas
- Gradiente sutil de fundo
- Paleta primária: Indigo/Violeta
- Ideal para design contemporâneo

### Como Alternar Temas

Clique no botão "Tema: Light" na navegação para alternar entre:
- Light → Dark → Modern → Light (ciclo)

Os temas são salvos no localStorage do navegador!

### Variáveis de Cor por Tema

Cada tema define:

```scss
// Cores principais
--color-primary: #0d6efd;
--color-secondary: #6c757d;
--color-success: #198754;
--color-danger: #dc3545;

// Cores de fundo
--color-bg-primary: #ffffff;
--color-bg-secondary: #f8f9fa;

// Cores de texto
--color-text-primary: #212529;
--color-text-secondary: #6c757d;
```

### Usando Cores nos Componentes

```scss
// Seus estilos SCSS
.card {
  background-color: var(--card-bg);
  color: var(--card-text);
  border-color: var(--card-border);
}

a {
  color: var(--color-primary);
  
  &:hover {
    color: var(--color-primary-dark);
  }
}
```

---

## 📱 Layout Responsivo

O projeto tem **5 breakpoints**:

```scss
$breakpoint-sm: 576px;      // Smartphones
$breakpoint-md: 768px;      // Tablets
$breakpoint-lg: 992px;      // Desktops pequenos
$breakpoint-xl: 1200px;     // Desktops
$breakpoint-2xl: 1400px;    // Telas grandes
```

### Exemplo de Media Query

```scss
// Desktop (padrão)
h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

// Tablet
@media (max-width: $breakpoint-md) {
  h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
}

// Smartphone
@media (max-width: $breakpoint-sm) {
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
}
```

### Componentes Responsivos Já Implementados

✅ **Navbar** - Se adapta a telas pequenas  
✅ **Carousel** - Altura ajustável  
✅ **Cards** - Grid responsivo (3 colunas → 2 → 1)  
✅ **Inputs** - Se reorganizam em mobile  
✅ **Espaçamento** - Padding/margin adaptável  
✅ **Tipografia** - Tamanhos de fonte ajustáveis  

---

## ⚙️ Como Executar

### Desenvolvimento (com Sass compilando automaticamente)

```bash
npm run dev
```

Abre em `http://localhost:3000` com hot-reload automático!

### Build para Produção

```bash
npm run build
```

Gera pasta `dist/` com CSS minificado.

### Visualizar Build

```bash
npm run preview
```

---

## 💡 Dicas Importantes

1. **Sempre use variáveis** em vez de valores fixos:
   ```scss
   // ❌ Errado
   margin: 16px;
   
   // ✅ Correto
   margin: $spacing-lg;
   ```

2. **Organize seus estilos** por arquivo:
   - Componentes novos → `_components.scss`
   - Estilos responsivos → `_responsive.scss`
   - Variáveis novas → `_variables.scss`

3. **Use transições suaves**:
   ```scss
   transition: color $transition-base;
   ```

4. **Reutilize as cores dos temas**:
   ```scss
   color: var(--color-primary);    // Em vez de #0d6efd
   ```

---

## 📝 Estrutura de Exemplo (Novo Componente)

Se você quiser adicionar um novo componente, siga este padrão:

```scss
// Em _components.scss

// ============ NOVO COMPONENTE ============
.meu-componente {
  padding: $spacing-lg;
  border-radius: $border-radius-lg;
  background-color: var(--card-bg);
  color: var(--color-text-primary);
  box-shadow: $shadow-md;
  transition: all $transition-base;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-lg;
  }
}

// Versão responsiva em _responsive.scss
@media (max-width: $breakpoint-md) {
  .meu-componente {
    padding: $spacing-md;
  }
}
```

---

## 🎯 Checklist do Projeto

- ✅ Sass instalado e configurado
- ✅ 3 temas implementados (Light, Dark, Modern)
- ✅ Variáveis de tipografia completas
- ✅ Layout totalmente responsivo
- ✅ 5 breakpoints configurados
- ✅ Hot-reload com Vite
- ✅ Build otimizado para produção

---

## 🔗 Referências

- [Documentação Sass](https://sass-lang.com/documentation)
- [Vite com Sass](https://vitejs.dev/guide/features.html#css-pre-processors)
- [Bootstrap 5](https://getbootstrap.com/)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

**Projeto criado em**: April 2026  
**Última atualização**: Sass implementado com 3 temas e layout responsivo completo
