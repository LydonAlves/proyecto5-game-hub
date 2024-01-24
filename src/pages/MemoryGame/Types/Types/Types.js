import {
  fetchFireTypes,
  fetchGrassTypes,
  fetchWaterTypes
} from '../FetchByType/FetchByType'

import { sendSelectedImagesToCards } from '../../Cards/Cards'
import { getPokemonChampions } from '../../Players/PokemonToEvolve/PokemonToEvolve'

export const chooseType = () => {
  const section = document.querySelector('.sectionMemoryGame')
  const grassButton = document.querySelector('.plantButton')
  const waterButton = document.querySelector('.waterButton')
  const fireButton = document.querySelector('.fireButton')

  grassButton.addEventListener('click', () => {
    section.classList.remove('waterBackground', 'fireBackground')
    section.classList.add('grassBackground')
    grassButton.classList.add('green')
    sendSelectedImagesToCards(fetchGrassTypes)
    getPokemonChampions()
  })

  waterButton.addEventListener('click', () => {
    section.classList.remove('grassBackground', 'fireBackground')
    section.classList.add('waterBackground')
    waterButton.classList.add('blue')
    sendSelectedImagesToCards(fetchWaterTypes)
    getPokemonChampions()
  })

  fireButton.addEventListener('click', () => {
    section.classList.remove('grassBackground', 'waterBackground')
    section.classList.add('fireBackground')
    fireButton.classList.add('red')
    sendSelectedImagesToCards(fetchFireTypes)
    getPokemonChampions()
  })
}
