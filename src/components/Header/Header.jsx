import React from 'react'
import "./Header.css"

function Header({ nomeUsuario, aoSair }) {
    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <h1>RPG</h1>
                </div>
                <div className="header-user">
                    <div className="img-sample"></div>
                    <div className='header-welcome'>
                        <p>Bem-vindo,</p>
                        <p><strong>{nomeUsuario}</strong>!</p>
                    </div>
                    <button className="logout-button" onClick={aoSair}>
                        ❌
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header