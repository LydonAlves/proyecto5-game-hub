import { fetchAllPokemon } from '../../Data/PokemonEvolutionArray/PokemonEvolutionArray'

const grassPokemonChampion = []
const waterPokemonChampion = []
const firePokemonChampion = []

export const getPokemonChampions = () => {
  const sectionMemoryGame = document.querySelector('.sectionMemoryGame')

  fetchAllPokemon().then((data) => {
    data.forEach((point) => {
      if (point.type == 'grass') {
        grassPokemonChampion.push(point)
      } else if (point.type == 'fire') {
        firePokemonChampion.push(point)
      } else if (point.type == 'water') {
        waterPokemonChampion.push(point)
      }
    })

    if (sectionMemoryGame.classList.contains('waterBackground')) {
      pokemonToEvolve(waterPokemonChampion)
    } else if (sectionMemoryGame.classList.contains('fireBackground')) {
      pokemonToEvolve(firePokemonChampion)
    } else if (sectionMemoryGame.classList.contains('grassBackground')) {
      pokemonToEvolve(grassPokemonChampion)
    }
  })
}

const pokemonToEvolve = (pokemonSelected) => {
  const trainerAndPokemonDiv = document.querySelectorAll(
    '.trainerAndPokemonDiv'
  )
  const gameTypeDiv = document.querySelector('.selectGameTypeDiv')

  let pokemonOne = pokemonSelected[0]
  let pokemonTwo = pokemonSelected[1]
  let pokemonThree = pokemonSelected[2]

  trainerAndPokemonDiv.forEach((div) => {
    const pokemonDiv = document.createElement('div')
    const pokemonOneImg = document.createElement('img')
    const pokemonTwoImg = document.createElement('img')
    const pokemonThreeImg = document.createElement('img')

    pokemonDiv.classList.add('pokemonDiv')
    pokemonOneImg.classList.add('pokemonOneImg')
    pokemonTwoImg.classList.add('pokemonTwoImg', 'hide')
    pokemonThreeImg.classList.add('pokemonThreeImg', 'hide')

    pokemonOneImg.src = pokemonOne.image
    pokemonTwoImg.src = pokemonTwo.image
    pokemonThreeImg.src = pokemonThree.image

    gameTypeDiv.addEventListener('click', () => {
      pokemonDiv.innerHTML = ''
    })

    pokemonDiv.append(pokemonOneImg)
    pokemonDiv.append(pokemonTwoImg)
    pokemonDiv.append(pokemonThreeImg)
    div.append(pokemonDiv)
  })
}
