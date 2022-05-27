let pokemonRepository = (function () {
  //array for pokemon list
  let pokemonList = [];
  // Data from the pokemon api
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
  let input = $('input');
  input.on('input', filterList);
  //return all items of pokemonList from outside IIFE
  function getAll() {
    return pokemonList;
  }

  // Function to add single pokemon to the pokemonList from outside IIFE
  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  // Shows pokemon list in browswer
  function addListItem(pokemon) {

    //let ul = document.querySelector('.pokemon-List');
    let ul = document.querySelector('ul');
    let listItem = document.createElement('li');
    listItem.classList.add('col-sm-8');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.addEventListener('click', (event) => {
      showDetails(pokemon);
      event.target.blur();
    });

    //bootstrap styling for closeButtonElement
    button.classList.add('btn', 'btn-lg', 'btn-primary');
    button.classList.add('m-3', 'bg-blue', 'text-capitalize');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '.modal');
    listItem.appendChild(button);
    ul.appendChild(listItem);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      showModal(pokemon);
    });
  }

    function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    // Clear pokemon info
    modalTitle.empty();
    modalBody.empty();

    // Get Pokemoninfo
    let pokemonName = $(`<h1>${pokemon.name}</h1>`);
    let pokemonImage = $(`<img class="modal-img mx-auto" src="${pokemon.svgUrl}" alt="Image of Pokemon ${pokemon.name}">`);
    let pokemonHeight = $(`<p class="ml-4 mt-3 mb-0">Height: ${pokemon.height}</p>`);
    let pokemonWeight = $(`<p class="ml-4 mb-0">Weight: ${pokemon.weight}</p>`);
    let pokemonTypes = $(`<p class="ml-4">Types: ${pokemon.types.join(', ')}</p>`);

    // Appends elements to modal
    modalTitle.append(pokemonName);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonWeight);
    modalBody.append(pokemonTypes);
}

  // Fetchs pokemon names from API
  function loadList() {
    return fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      json.results.forEach((item) => {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    })
    .catch((err) => console.log(err));
  }

  function filterList() {
    let inputValue = $('input').val();
    let list = $('li');
    list.each(function () {
      let item = $(this);
      let name = item.text();
      if (name.startsWith(inputValue)) {
        item.show();
      } else {
        item.hide();
      }
    });
  }

  //Fetchs details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then((res) => res.json())
      .then((details) => {
        //add details to item
        item.weight = details.weight;
        item.imageUrl = details.sprites.front_default;
        item.svgUrl = details.sprites.other.dream_world.front_default;
        item.height = details.height;
        let types = [];
        details.types.forEach((item) => types.push(item.type.name));
        item.types = types;
      })
      .catch((err) => console.log(err));
  }

  return {
    getAll,
    add,
    loadList,
    loadDetails,
    addListItem,
    filterList,
  };
})();

/* pokemonRepository.loadList().then(function () {
  //Data is loaded here
  pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
}); */

pokemonRepository.loadList().then(() => {
  pokemonRepository
    .getAll()
    .sort((a, b) => a.name > b.name)
    .forEach((pokemon) => {
      pokemonRepository.addListItem(pokemon);
    });
});
