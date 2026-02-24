import React from 'react'
import "./Dashboard.css";

function Dashboard() {
return (
    <div className="dashboard-container">
      <main className='main-container'>
        <div className='main-header'>
          <h3>Seus Personagens</h3>
          <button className="add-button">+ Adicionar Personagem</button>
        </div>
        <div className="card">
          <p>Nenhum herói encontrado na taverna...</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard