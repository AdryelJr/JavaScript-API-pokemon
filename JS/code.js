const pokemonImage = document.querySelector('.pokemon_image');

const fetchPokemon = async (pokemon) => {
    const APIResnponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResnponse.status == 200){
        const data = await APIResnponse.json();
        return data;
    }
}

const rennderPokemon = async (pokemon) => { 

    const data = await fetchPokemon(pokemon);
    
    if(data){
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    }
}