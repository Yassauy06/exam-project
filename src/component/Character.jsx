import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import axios from 'axios';

function Character() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [addModalCharacter, setAddCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(); 

  const [newCharacter, setNewCharacter] = useState({
    name: '',
    affiliation: '',
    grade: '',
    abilities: '',
    image: ''
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://669a76c39ba098ed61ffbc89.mockapi.io/characters');
        setCharacters(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };
 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCharacter = currentPage * itemsPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - itemsPerPage;
  const currentCharacters = searchCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const nextPage = () => {
    if (currentPage < Math.ceil(searchCharacters.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const addCharacter = () => {
    if (newCharacter.name && newCharacter.affiliation && newCharacter.grade && newCharacter.abilities) {
      const newId = Date.now();
      const characterToAdd = { ...newCharacter, id: newId };

      setCharacters([characterToAdd, ...characters]);
      setNewCharacter({
        name: '',
        affiliation: '',
        grade: '',
        abilities: '',
        image: ''
      }); 
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  };

  const deleteCharacter = (id) => {
    const updatedCharacters = characters.filter((character) => character.id !== id);
    setCharacters(updatedCharacters);
  };

  return (
    <div style={{ width: '100%' }}>
      <h1 className='title-character' style={{ marginTop: '80px', marginBottom: '20px' }}>{t("characters")}</h1>

      <div>
        <input
          type="text"
          placeholder={t("Search")}
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-characters"
        />
      </div>

      {loading ? (
        <p style={{ color: 'white' }}>Загрузка персонажей...</p>
      ) : (
        <div className="character-cards">
          {currentCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => openModal(character)}
              onDelete={() => deleteCharacter(character.id)} 
            />
          ))}
        </div>
      )}

      <div className="pagination-controls">
        <button 
        className='pagin-btn'
        onClick={prevPage} 
        disabled={currentPage === 1}>Назад</button>
        <button
        className='pagin-btn'
          onClick={nextPage}
          disabled={currentPage === Math.ceil(searchCharacters.length / itemsPerPage)}>Вперед</button>
      </div>

      <div className='add-content'>
        <h2 className='add-character-title'>{t("add-character")}</h2>
        <form onSubmit={(e) => { e.preventDefault(); addCharacter(); }}>
          <div>
            <input 
              className='add-card'
              type="text"
              name="name"
              placeholder={t("input-character_name")  }
              value={newCharacter.name}
              onChange={(e) => setNewCharacter({ ...newCharacter, name: e.target.value })}
            />
          </div>
          <div>
            <input 
              className='add-card'
              type="text"
              name="affiliation"
              placeholder=  {t("input-character_role")}
              value={newCharacter.affiliation}
              onChange={(e) => setNewCharacter({ ...newCharacter, affiliation: e.target.value })}
            />
          </div>
          <div>
            <input
              className='add-card'
              type="text"
              name="grade"
              placeholder= {t("input-character_grade")}
              value={newCharacter.grade}
              onChange={(e) => setNewCharacter({ ...newCharacter, grade: e.target.value })}
            />
          </div>
          <div>
            <input 
              className='add-card'
              type="text"
              name="abilities"
              placeholder={t("input-character_ability")}
              value={newCharacter.abilities}
              onChange={(e) => setNewCharacter({ ...newCharacter, abilities: e.target.value })}
            />
          </div>
          <div>
            <input 
              className='add-card'
              type="text"
              name="image"
              placeholder={t("input-character_link")}
              value={newCharacter.image}
              onChange={(e) => setNewCharacter({ ...newCharacter, image: e.target.value })}
            />
          </div>
          <div>
            <button className='add-button' type="submit">{t('add-new_character')}</button>
          </div>
        </form>
      </div>

      {selectedCharacter && (
        <Modal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
}

const CharacterCard = ({ character, onClick, onDelete }) => (
  <div className="character-card" onClick={onClick}>
    <img
      src={character.image || 'https://via.placeholder.com/150'}
      alt={character.name}
    />
    <h2 style={{fontSize:'30px'}}>{character.name}</h2>
    <p>Роль: {character.affiliation}</p>
    <button className='delete-btn' onClick={(e) => { e.stopPropagation(); onDelete(); }}>delete</button>
  </div>
);

const Modal = ({ character, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>
        Закрыть
      </button>
      <div className="modal-img_content">
        <img
          className="modal-img"
          src={character.poster}
          alt={character.name}
        />
      </div>
      <div className="modal-character_info">
        <h2 className="character-modal_name">{character.name}</h2>
        <p className="card-p">
          <strong>Роль:</strong> {character.affiliation}
        </p>
        <p className="card-p">
          <strong>Ранг:</strong> {character.grade}
        </p>
        <p className="card-p">
          <strong>Способности:</strong> {character.abilities}
        </p>
      </div>
    </div>
  </div>
);

export default Character;
