import { defineConfig } from "vite";

export default defineConfig({
  // Raiz do projeto
  root: ".",

  // Configurações do servidor de desenvolvimento
  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  // Configurações do build
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
        produtos: "./produtos.html",
        contato: "./contato.html",
      },
    },
  },

  // Configurações de preview (após build)
  preview: {
    port: 4173,
    open: true,
  },
});
