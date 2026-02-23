import React from 'react'

function Dashboard({nomeUsuario, aoSair}) {
return (
    <div className="dashboard-container">
      <header>
        <h1>Painel do Mestre</h1>
        <p>Bem-vindo, <strong>{nomeUsuario}</strong>!</p>
      </header>

      <main>
        <div className="card">
          <h3>Seus Personagens</h3>
          <p>Nenhum herói encontrado na taverna...</p>
          <button className="add-button">+ Criar Novo Personagem</button>
        </div>
      </main>

      <button className="logout-button" onClick={aoSair}>
        Sair do Sistema
      </button>
    </div>
  );
}

export default Dashboard