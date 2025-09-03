// src/components/Header/Header.js
export const Header = () => {
    return `
        <header class="w-full flex justify-between items-center py-4 px-6 md:px-12 bg-background border-b border-accent fixed top-0 left-0 z-50">
            <a href="/" class="text-xl font-primary font-bold text-primary">Vértice</a>
            <nav class="hidden md:block">
                <ul class="flex gap-8">
                    <li><a href="/" data-link class="text-secondary hover:text-primary transition-colors duration-300">Home</a></li>
                    <li><a href="/projects" data-link class="text-secondary hover:text-primary transition-colors duration-300">Projetos</a></li>
                    <li><a href="/sobre" data-link class="text-secondary hover:text-primary transition-colors duration-300">Sobre</a></li>
                    <li><a href="/contato" data-link class="text-secondary hover:text-primary transition-colors duration-300">Contato</a></li>
                </ul>
            </nav>
            <button class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </header>
    `;
};