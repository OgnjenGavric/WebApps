export function createCharacterCard(character) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = character.image;
  image.alt = character.name;
  card.appendChild(image);

  const name = document.createElement('h2');
  name.textContent = character.name;
  card.appendChild(name);

  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button');
  likeButton.textContent = 'Like';
  likeButton.addEventListener('click', () => {
    console.log(`Liked ${character.name}`);
  });
  card.appendChild(likeButton);

  card.addEventListener('click', () => {
    displayCharacterDetails(character);
  });

  return card;
}

function displayCharacterDetails(character) {
  // Code to display character details goes here
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modalContent.appendChild(closeBtn);

  const image = document.createElement('img');
  image.src = character.image;
  image.alt = character.name;
  modalContent.appendChild(image);

  const name = document.createElement('h2');
  name.textContent = character.name;
  modalContent.appendChild(name);

  const status = document.createElement('p');
  status.textContent = `Status: ${character.status}`;
  modalContent.appendChild(status);

  const species = document.createElement('p');
  species.textContent = `Species: ${character.species}`;
  modalContent.appendChild(species);

  const gender = document.createElement('p');
  gender.textContent = `Gender: ${character.gender}`;
  modalContent.appendChild(gender);

  const origin = document.createElement('p');
  origin.textContent = `Origin: ${character.origin.name}`;
  modalContent.appendChild(origin);

  const location = document.createElement('p');
  location.textContent = `Last known location: ${character.location.name}`;
  modalContent.appendChild(location);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  modal.style.display = 'block';
}
