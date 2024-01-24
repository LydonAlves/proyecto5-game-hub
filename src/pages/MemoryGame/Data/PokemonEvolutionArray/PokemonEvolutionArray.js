const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/'

const pokemonNames = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise'
]

async function fetchPokemonData(name) {
  try {
    const response = await fetch(pokeApiUrl + name)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return {
      name: data.name,
      image: data.sprites.front_default,
      id: data.id,
      type: data.types[0].type.name
    }
  } catch (error) {
    return { name: name, error: 'Data not found' }
  }
}

export async function fetchAllPokemon() {
  const promises = pokemonNames.map((name) => fetchPokemonData(name))
  const pokemonData = await Promise.all(promises)
  return pokemonData
}
