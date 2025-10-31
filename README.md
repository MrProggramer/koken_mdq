# 🧁 E-commerce de Pastelería

E-commerce moderna de pastelería construida con React, TypeScript, Vite y Tailwind CSS.

## ✨ Características

### 🍰 Funcionalidades
- **Catálogo de Productos** - Productos de pastelería organizados por categorías
- **Carrito de Compras** - Añadir, eliminar y modificar cantidades
- **Filtrado por Categorías** - Tortas, Postres, Bombones, Galletas y Desayunos
- **Diseño Responsive** - Totalmente adaptable a dispositivos móviles y tablets
- **Animaciones Suaves** - Interacciones fluidas con Tailwind CSS

### 🛠️ Tecnologías
- ⚡ **Vite** - Build tool rápido
- ⚛️ **React 19.1** - Framework UI moderno
- 🔷 **TypeScript** - Tipado estático
- 🎨 **Tailwind CSS 3.4** - Framework CSS utility-first
- 🔧 **PostCSS + Autoprefixer** - Procesamiento CSS
- ✨ **HMR** - Hot Module Replacement

## 📦 Instalación

```bash
npm install
```

## 🎯 Scripts disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 🎨 Productos Incluidos

- 🎂 Tortas (Red Velvet, Chocolate, etc.)
- 🧁 Postres (Cheesecake, Tiramisú, etc.)
- 🍫 Bombones Premium
- 🍪 Galletas y Alfajores
- 🥐 Desayunos Completos

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
