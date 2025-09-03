import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Meu Aplicativo</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projetos</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;