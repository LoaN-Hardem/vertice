// src/pages/Home/Home.js
import { Header } from '../../components/Header/Header.js';

export const renderHome = () => {
    document.querySelector('#app').innerHTML = `
        ${Header()}
        <section class="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-primary relative z-10">
            <div id="background-image" class="absolute inset-0 z-0 opacity-10" style="background-image: url('/assets/images/home-bg.jpeg');"></div>

            <div class="relative z-10 flex flex-col items-center">
                <div class="relative w-full text-center">
                    <h1 class="text-8xl md:text-[15rem] font-primary font-bold tracking-tighter leading-none mb-4">
                        Vértice
                    </h1>
                    <div class="absolute inset-y-0 w-full flex items-center justify-center">
                        <div class="h-0.5 w-1/4 bg-accent left-0 transform -translate-x-full"></div>
                        <div class="h-0.5 w-1/4 bg-accent right-0 transform translate-x-full"></div>
                    </div>
                </div>

                <p class="text-2xl md:text-3xl font-secondary text-secondary mt-8 mb-12 max-w-2xl text-center">
                    Subtítulo com uma frase de impacto sobre seu trabalho ou visão.
                </p>

                <div class="flex flex-col md:flex-row gap-4">
                    <button data-link href="/projects" class="bg-primary text-background font-secondary px-8 py-4 rounded-full font-semibold hover:bg-opacity-80 transition-colors duration-300">
                        Ver Projetos
                    </button>
                    <button data-link href="/contato" class="bg-transparent text-primary font-secondary px-8 py-4 rounded-full font-semibold border border-primary hover:bg-primary hover:text-background transition-colors duration-300">
                        Entrar em Contato
                    </button>
                </div>
            </div>
        </section>
    `;

    // Lógica para o efeito Parallax
    document.addEventListener('mousemove', (e) => {
        const bg = document.getElementById('background-image');
        if (bg) {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            bg.style.backgroundPosition = `${x}px ${y}px`;
        }
    });
};