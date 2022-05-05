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
  return {
    getAll: getAll,
    add: add,
  };

})();


pokemonRepository.getAll().forEach(function (getAll) {
    if (getAll.height > 3) {
      // Anything over a height of the 3 is considered big
      document.write(getAll.name + ' (height: ' + getAll.height + ')' + ' - Wow that\'s big!');
    } else {
      // Applies to Pokemon who are under 3
      document.write(getAll.name + ' (height: ' + getAll.height + ')');
    }
  });
