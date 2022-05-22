let pokemonRepository = (function () {
  //array for pokemon list
  let pokemonList = [];
  // Data from the pokemon api
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
  //return all items of pokemonList from outside IIFE
  function getAll() {
    return pokemonList;
  }

  // NOT MY CODE function to add single pokemon to the pokemonList from outside IIFE
    function add(pokemon) {
      // added condition if true
      if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon ) {
        return pokemonList.push(pokemon);
      } else {
        return alert('To add a pokémon, pokemon type should be object + keys should be {name: , height: , types:[]}')
      }
    }

  /* MY CODE function add(pokemon) {
    return pokemonList.push(pokemon);
  }
  */

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }







  //Opens or closes Modal
  let modalContainer = document.querySelector('#modal-container');

  function showModal(pokemon) {

    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

// Model content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    // Title
    let titleElement = document.createElement('h1');
    titleElement.classList.add('pokemon-title-name');
    titleElement.innerText = pokemon.name.toUpperCase();
    // Heightinfo
    let contentElement = document.createElement('p');
    contentElement.classList.add('pokemon-content-height');
    contentElement.innerText = `Height: ${pokemon.height}`;
    // Picture
    let imageElement = document.createElement('img');
    imageElement.classList.add('pokemon-front-image');
    imageElement.setAttribute('src', pokemon.imageUrl);

    // Appends elements to modal
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');

  }

//Hides modal when esc key is pressed or click outside the modal
// DOES THE VARIABLE NEED TO BE REMOVED??????????????????????
  function hideModal() {

    modalContainer.classList.remove('is-visible');
  }

  // Escape key I KNOW THIS WORKS DOES IT NEED TO BE CHANGED???????
  window.addEventListener('keydown', (e) => {

    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  // Click outside modal I KNOW THIS WORKS DOES IT NEED TO BE CHANGED???????

  modalContainer.addEventListener('click', (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modalContainer) {
      hideModal();
    }
  });

//   WHAT IS THIS??? call function to get name and height goes here
  function clickHandlerPokemonButton(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon);
    })
}

  // Shows pokemon list in browswer
  function addListItem(pokemon) {
    let ul = document.querySelector('.pokemon-List');
    let listItem = document.createElement('li');
    listItem.classList.add('pokemon-list-item');
    ul.appendChild(listItem);
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-list-button');
    listItem.appendChild(button);
// button for?
    clickHandlerPokemonButton(button, pokemon);

  }

  // Fetchs pokemon names from API
  function loadList() {
    return fetch(apiUrl).then(function (repsonse) {
      return repsonse.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  //Fetchs details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Add item details
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    })
  }





/// OK O K OK O K
  // Returning getAll add, add functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  }
})();

pokemonRepository.loadList().then(function () {
  //Data is loaded here
  pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
});
