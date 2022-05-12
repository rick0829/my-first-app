let pokemonRepository = (function () {

  let pokemonList = [
  {
    name: 'Charizard', height: 5.58, types: ['Fire', 'Flying'],
  },
  {
    name: 'Bulbasaur', height: 2.33, types: ['Grass', 'Poison'],
  },
  {
    name: 'Wartortle', height: 3.25, types: ['Water'],
  },
  {
    name: 'Metapod', height: 2.33, types: ['Bug'],
  },
  {
    name: 'Butterfree', height: 3.58, types: ['Bug', 'Flying'],
  },
];

  function getAll() {
    return pokemonList;
  }
 let pokemonList = [];
  // Data from the pokemon api
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
 let pokemonRepository = (function () {
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    // Event handler to console log info
    button.addEventListener('click', function (event) {
      console.log(pokemon);
      showDetails(pokemon);
    });
  }

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
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    getAll: getAll,
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };

})();


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
pokemonRepository.loadList().then(function () {
  //Data is loaded here
  pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
});
