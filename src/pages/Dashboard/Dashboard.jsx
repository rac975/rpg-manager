import React from 'react'
import { useState, useEffect } from 'react';
import CharacterCard from '../Characters/CharacterCard/CharacterCard';
import "./Dashboard.css";

function Dashboard() {
  const [personagens, setPersonagens] = useState(()=> {
    const salvo = localStorage.getItem('taverna_personagens')
    return salvo ? JSON.parse(salvo) : [];
  });

  const [novoPersonagem] = useState({
    nome: '',
    classe: 'Guerreiro',
    nivel: 1,
    imagemUrl: '',
    editando: true
  });

  const adicionarPersonagens = () => {
    const personagemPronto = { ...novoPersonagem, id: Date.now() };
    setPersonagens([...personagens, personagemPronto])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setPersonagens(prevPersonagens =>
      prevPersonagens.map(p => {
        if (p.id === id) {
          return { ...p, [name]: value };
        }
        return p;
      })
    );
  };

  const handleDelete = (id) => {
    setPersonagens(personagens.filter(p => p.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('taverna_personagens', JSON.stringify(personagens));
  }, [personagens]);

  return (
    <div className="dashboard-container">
      <main className='main-container'>
        <div className='main-header'>
          <h3>Seus Personagens</h3>
          <button className="add-button" onClick={adicionarPersonagens}>+ Adicionar Personagem</button>
        </div>
        {personagens.length > 0 ? (
          <div className='lista-characters'>
            {personagens.map((p) => (
              <CharacterCard
                key={p.id}
                personagem={p}
                onSubmitHandler={handleSubmit}
                onChangeHandler={handleChange}
                onDeleteHandle={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="card">
            <p>Nenhum herói encontrado na taverna...</p>
          </div>)}
      </main>
    </div>
  );
}

export default Dashboard