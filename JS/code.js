const pokemonImage = document.querySelector('.pokemon_image');
const pesquisa = document.querySelector('.input-pesquisa');
const form = document.querySelector('.form');


let pesquisaPokemon = 1;


const fetchPokemon = async (pokemon) => {
    const APIResnponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResnponse.status == 200){
        const data = await APIResnponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => { 

    const data = await fetchPokemon(pokemon);
    
    if(data){
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pesquisa.value = '';
        pesquisaPokemon = data.id;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(pesquisa.value.toLowerCase());
});



renderPokemon(pesquisaPokemon);