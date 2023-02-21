const joker = document.querySelector('#trigger');
const url = "https://api.chucknorris.io/jokes/random";
const output = document.querySelector('#output');
joker.addEventListener('click', loadJoke);

function loadJoke() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {

      output.innerHTML = `
          <p>${data.value}</p>
      `;
      console.log(data.icon_url);
    })
    .catch((error) => {
      console.log(error);
    });


  /* function resJSON(response) {
    return response.json();
  } */
}