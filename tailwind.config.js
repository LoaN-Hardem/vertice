/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF', // O branco puro para o fundo
        text: '#1A1A1A', // Um preto suave para a legibilidade
        primary: '#1A1A1A', // Preto como cor primária
        secondary: '#4A4A4A', // Cinza escuro para detalhes e textos secundários
        accent: '#E0E0E0', // Cinza claro para bordas, linhas e fundos sutis
      },
    },
  },
  plugins: [],
}