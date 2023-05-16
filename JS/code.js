// const pokemonImage = document.querySelector('.pokemon_image');
// const pesquisa = document.querySelector('.input-pesquisa');
// const form = document.querySelector('.form');

// let pesquisaPokemon = 1;


// const fetchPokemon = async (pokemon) => {
//     const APIResnponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

//     if(APIResnponse.status == 200){
//         const data = await APIResnponse.json();
//         return data;
//     }
// }

// const renderPokemon = async (pokemon) => { 

//     const data = await fetchPokemon(pokemon);
    
//     if(data){
//         pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
//         pesquisa.value = '';
//         pesquisaPokemon = data.id;
//     }
// }

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     renderPokemon(pesquisa.value.toLowerCase());
// });

// renderPokemon(pesquisaPokemon);



// ======================================================================

const nomePokemon = document.querySelector('.nomePokemon');
const idPokemon = document.querySelector('.idPokemon');
const pokemonImage = document.querySelector('.pokemon_image');
const pesquisa = document.querySelector('.input-pesquisa');
const form = document.querySelector('.form');
let tipoPokemon = document.querySelector('.tipoPokemon')


tipoPokemon.innerHTML = '...';

let pesquisaPokemon = 1;


const fetchPokemon = async (pokemon) => {
    const APIResnponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResnponse.status == 200) {
        const data = await APIResnponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    nomePokemon.innerHTML = 'Loading...';

    const data = await fetchPokemon(pokemon);

    if (data) {
        tipoPokemon.innerHTML = data['types']['0']['type']['name'];
        nomePokemon.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        idPokemon.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pesquisa.value = '';
        pesquisaPokemon = data.id;


        if (data.id == 25) {
            const evolucaoPokemon1 = document.querySelector('.evolucaoPokemon1');
            const evolucaoid1 = document.querySelector('.evolucaoid1');

            pesquisa = 172;
            const pokemon172 = await fetchPokemon(pesquisa);
            evolucaoPokemon1.innerHTML = pokemon172.name;

            const evolucaoPokemon2 = document.querySelector('.evolucaoPokemon2');
            const evolucaoid2 = document.querySelector('.evolucaoid2');

            const pokemon26 = await fetchNextPokemon(pokemon172.id);
            evolucaoPokemon2.innerHTML = pokemon26.name;
        }


    } else {
        nomePokemon.innerHTML = 'Not foud :c';
        idPokemon.innerHTML = '';
        pokemonImage.src = 'https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswerscdn.microsoft.com%2Fstatic%2Fimages%2Fimage-not-found.jpg';
        tipoPokemon.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(pesquisa.value.toLowerCase());
});

renderPokemon(pesquisaPokemon);
