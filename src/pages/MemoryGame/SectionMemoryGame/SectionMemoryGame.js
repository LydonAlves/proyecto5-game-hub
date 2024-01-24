import { createCards } from '../Cards/Cards'
import { createAsh, createBrock } from '../Players/PokeTrainers/PokeTrainers'
import { createInitialScreen } from '../StartGame/createInitialScreen/CreateInitialScreen'
import './SectionMemoryGame.css'

export const sectionMemoryGame = () => {
  const sectionMemoryGame = document.createElement('section')
  const sectionDiv = document.createElement('div')

  sectionMemoryGame.append(sectionDiv)
  return sectionMemoryGame
}

export const CreateSectionMemoryGame = (main) => {
  const section = sectionMemoryGame()
  const sectionDiv = section.querySelector('div')

  main.innerHTML = ''

  section.classList.add('sectionMemoryGame', 'standardBackground')
  sectionDiv.classList.add('sectionDiv')

  section.append(sectionDiv)
  main.append(section)

  createAsh(sectionDiv)
  createCards(sectionDiv)
  createBrock(sectionDiv)
  createInitialScreen()
}
