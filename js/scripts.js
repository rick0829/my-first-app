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
for (let i = 0; i < pokemonList.length; i++) {
  // Anything over a height of the 3 is considered big
  if (pokemonList[i].height > 3) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + ' - Wow that\'s big!');
  } else {
    // Applies to Pokemon who are under 3
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
  }
}
