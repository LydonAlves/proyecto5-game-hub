import { createPokeball } from '../Pokeball/Pokeball'
import { scoreCounter } from '../Score/Score'
import './PokeTrainers.css'

const createTrainer = () => {
  const trainerContainer = document.createElement('div')
  const trainerAndPokemonDiv = document.createElement('div')
  const trainerImg = document.createElement('img')
  const pokeballContainer = document.createElement('div')
  const pokeballScoreDiv = document.createElement('div')
  const playerTitle = document.createElement('p')

  pokeballContainer.classList.add('pokeballContainer')
  pokeballScoreDiv.classList.add('pokeballScoreDiv')
  trainerContainer.classList.add('trainerContainer')
  trainerAndPokemonDiv.classList.add('trainerAndPokemonDiv')
  trainerImg.classList.add('trainerImg')
  playerTitle.classList.add('playerTitle')

  createPokeball(pokeballScoreDiv)
  scoreCounter(pokeballScoreDiv)
  pokeballContainer.append(playerTitle)
  pokeballContainer.append(pokeballScoreDiv)
  trainerAndPokemonDiv.append(trainerImg)
  trainerContainer.append(pokeballContainer)
  trainerContainer.append(trainerAndPokemonDiv)

  return trainerContainer
}

export const createAsh = (sectionDiv) => {
  const trainerContainer = createTrainer()
  const trainerAndPokemonDiv = trainerContainer.querySelector(
    '.trainerAndPokemonDiv'
  )
  const trainerImg = trainerContainer.querySelector('.trainerImg')
  const ashTitle = trainerContainer.querySelector('p')
  const trainerImage = '/assets/pokemon/ash.png'

  trainerContainer.classList.add('ashContainer', 'playingNow')
  trainerAndPokemonDiv.classList.add('ashTrainerDiv')
  trainerImg.src = trainerImage
  ashTitle.innerText = 'Player 1'

  sectionDiv.append(trainerContainer)
}

export const createBrock = (sectionDiv) => {
  const trainerContainer = createTrainer()
  const playerTitle = trainerContainer.querySelector('.playerTitle')
  const trainerAndPokemonDiv = trainerContainer.querySelector(
    '.trainerAndPokemonDiv'
  )
  const trainerImg = trainerContainer.querySelector('.trainerImg')
  const brockTitle = trainerContainer.querySelector('p')
  const trainerImage = '/assets/pokemon/brock.png'

  trainerContainer.classList.add('brockContainer')
  playerTitle.classList.add('notPlayingNow')
  trainerAndPokemonDiv.classList.add('brockTrainerDiv')
  trainerImg.src = trainerImage
  brockTitle.innerText = 'Player 2'

  sectionDiv.append(trainerContainer)
}
