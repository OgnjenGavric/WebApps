const url = 'https://rickandmortyapi.com/api';

export async function fetchCharacters() {
  const response = await fetch(`${url}/character/?page=1`);
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  const data = await response.json();
  return data.results;
}
