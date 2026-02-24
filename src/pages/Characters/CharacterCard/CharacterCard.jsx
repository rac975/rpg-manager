import React from 'react'
import { useState } from 'react'
import "./CharacterCard.css"

function CharacterCard({ personagem, onSubmitHandler, onChangeHandler, onDeleteHandle }) {

    const [isEditing, setIsEdinting] = useState(personagem.editando);

    const toggleEditing = () => {
        setIsEdinting(!isEditing);
    };

    return (
        <div className="lista-characters">
            <div className='card-personagem'>
                <div className='button-group'>
                    <button className='button-card' onClick={toggleEditing}>🖋️</button>
                    <button className='button-card' onClick={() => onDeleteHandle(personagem.id)}>🗑️</button>
                </div>
                {isEditing ? (
                    <form onSubmit={(e) => {
                        onSubmitHandler(e);
                        toggleEditing();
                    }}>
                        <div className='input-group'>
                            <p>Nome:</p>
                            <input name='nome' type='text' placeholder='Nome' value={personagem.nome} onChange={(e) => onChangeHandler(e, personagem.id)} />
                        </div>

                        <div className='input-group'>
                            <p>Classe:</p>
                            <input name='classe' type='text' placeholder='Classe' value={personagem.classe} onChange={(e) => onChangeHandler(e, personagem.id)} />
                        </div>

                        <div className='input-group'>
                            <p>Nível:</p>
                            <input name='nivel' type='number' placeholder='Nível' value={personagem.nivel} onChange={(e) => onChangeHandler(e, personagem.id)} />
                        </div>

                        <button className='save-button' type='submit'>Salvar</button>
                    </form>
                ) : (
                    <div>
                        <div className='read-group'>
                            <p>Nome:</p>
                            <p className='input-value'>{personagem.nome}</p>
                        </div>
                        <div className='read-group'>
                            <p>Classe:</p>
                            <p className='input-value'>{personagem.classe}</p>
                        </div>
                        <div className='read-group'>
                            <p>Nível:</p>
                            <p className='input-value'>{personagem.nivel}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CharacterCard