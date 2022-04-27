let pokemonList = [
  { name: 'Charizard', height: 5.58, types: ['Fire', 'Flying'] },
  { name: 'Bulbasaur', height: 2.33, types: ['Grass', 'Poison'] },
  { name: 'Wartortle', height: 3.25, types: ['Water'] },
  { name: 'Metapod', height: 2.33, types: ['Bug'] },
  { name: 'Butterfree', height: 3.58, types: ['Bug', 'Flying'] },
];
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' Height: ' + pokemonList[i].height);
}
