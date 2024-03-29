import { main } from '../../../../../main'
import { sendSelectedImagesToCards } from '../../Cards/Cards'
import {
  fetchFireTypes,
  fetchGrassTypes,
  fetchWaterTypes
} from '../../Types/FetchByType/FetchByType'
import { winScreen } from '../WinScreen/WinScreen'

export const evolvePokemon = (trainerDiv) => {
  const section = main.querySelector('.sectionMemoryGame')
  const playerScores = document.querySelectorAll('.score')
  const pokemonOne = trainerDiv.querySelector('.pokemonOneImg')
  const pokemonTwo = trainerDiv.querySelector('.pokemonTwoImg')
  const pokemonThree = trainerDiv.querySelector('.pokemonThreeImg')

  if (!pokemonOne.classList.contains('hide')) {
    pokemonOne.classList.add('hide')
    pokemonTwo.classList.remove('hide')
    trainerDiv.classList.add('round-two')

    if (section.classList.contains('waterBackground')) {
      sendSelectedImagesToCards(fetchWaterTypes)
    } else if (section.classList.contains('fireBackground')) {
      sendSelectedImagesToCards(fetchFireTypes)
    } else if (section.classList.contains('grassBackground')) {
      sendSelectedImagesToCards(fetchGrassTypes)
    }
  } else if (!pokemonTwo.classList.contains('hide')) {
    pokemonTwo.classList.add('hide')
    pokemonThree.classList.remove('hide')
    trainerDiv.classList.add('round-three')
    setTimeout(() => {
      winScreen(trainerDiv)
    }, 1200)
  }

  playerScores.forEach((score) => {
    score.innerText = 0
  })
}
