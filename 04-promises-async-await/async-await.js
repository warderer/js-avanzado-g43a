// RESOLVER PROMESAS 1: THEN Y CATCH - Pokéapi

function getPokemonThen(name = 'ditto') {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(pokemon => {
            console.log('Nombre:', pokemon.name);
            console.log('ID:', pokemon.id);
            console.log('Peso:', pokemon.weight);
            console.log('Altura:', pokemon.height);
            console.log('Habilidades'), pokemon.abilities.forEach(ability => {
                console.log(' -', ability.ability.name);
            });
            return pokemon;
        })
        .catch(error => {
            console.error('Error al obtener el Pokémon:', error.message);
            throw error;
        })
}

getPokemonThen()