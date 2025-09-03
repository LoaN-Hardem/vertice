import { initRouter, navigateTo } from './utils/Router.js';
import './style.css'; // Estilos globais e do Tailwind

// Importe as "páginas" do seu site
import { renderHome } from './pages/Home/Home.js';
// import { renderProjects } from './pages/Projects/Projects.js';
// import { renderAbout } from './pages/Sobre/Sobre.js';
// import { renderContact } from './pages/Contato/Contato.js';

// A função que vai decidir qual página renderizar
const router = () => {
    const path = window.location.pathname;
    
    switch (path) {
        case '/':
            renderHome();
            break;
        // case '/projects':
        //     renderProjects();
        //     break;
        // case '/sobre':
        //     renderAbout();
        //     break;
        // case '/contato':
        //     renderContact();
        //     break;
        default:
            renderHome(); // Ou uma página 404
            break;
    }
};

// Intercepta cliques nos links para usar a navegação SPA
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    initRouter();
    router();
});

// Executa a função de roteamento quando a rota muda
window.addEventListener('routeChange', router);