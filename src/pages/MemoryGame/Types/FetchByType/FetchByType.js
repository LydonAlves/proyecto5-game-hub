let pokemonDetailsByType = []

function fetchPokemonDetails(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((pokemonData) => {
      pokemonDetailsByType[pokemonData.name] = {
        id: pokemonData.id,
        image: pokemonData.sprites.front_default,
        type: pokemonData.types.map((typeInfo) => typeInfo.type.name).join(', ')
      }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

function fetchPokemonByType(type) {
  const searchUrl = `https://pokeapi.co/api/v2/type/${type}`
  let fetchPromises = []

  return fetch(searchUrl)
    .then((res) => res.json())
    .then((response) => {
      fetchPromises = response.pokemon.map((pokemonInfo) =>
        fetchPokemonDetails(pokemonInfo.pokemon.url)
      )

      return Promise.all(fetchPromises)
    })
    .then(() => {
      return { ...pokemonDetailsByType }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

export const fetchWaterTypes = () => {
  return fetchPokemonByType('water')
}

export const fetchFireTypes = () => {
  return fetchPokemonByType('fire')
}

export const fetchGrassTypes = () => {
  return fetchPokemonByType('grass')
}
