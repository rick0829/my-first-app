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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-List');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    // Event handler to console log info
    button.addEventListener('click', function (event) {
      console.log(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };

})();


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
