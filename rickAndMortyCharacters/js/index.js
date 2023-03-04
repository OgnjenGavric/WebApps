import { fetchCharacters } from './api.js';
import { createCharacterCard } from './components.js';

const charactersGrid = document.getElementById('characters-grid');

async function displayCharacters() {
  try {
    const characters = await fetchCharacters();
    characters.forEach((character) => {
      const characterCard = createCharacterCard(character);
      charactersGrid.appendChild(characterCard);
    });
  } catch (error) {
    console.error(error);
    alert('Failed to load characters. Please try again later.');
  }
}

displayCharacters();
