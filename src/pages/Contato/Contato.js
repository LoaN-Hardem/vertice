import React from 'react';
import './Contato.css';

const Contato = () => {
    return (
        <div className="contato">
            <h1>Contato</h1>
            <p>Entre em contato conosco através do formulário abaixo:</p>
            <form>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contato;