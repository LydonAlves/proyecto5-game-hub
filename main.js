import { createMain } from './src/pages/CreateMain/CreateMain'
import { createSection } from './src/pages/HangMan/SectionHangman/SectionHangman'
import { createHeader } from './src/pages/Header/Header'
import { CreateSectionMemoryGame } from './src/pages/MemoryGame/SectionMemoryGame/SectionMemoryGame'
import { createGrid } from './src/pages/TicTacToe/CreateBoard/CreateBoard'
import './style.css'

export const main = createMain()

document.body.append(createHeader())
document.body.append(main)

const selectTicTacToe = () => {
  const ticTacToeButton = document.querySelector('.ticTacToeButton')

  ticTacToeButton.addEventListener('click', () => {
    main.innerHTML = ''
    createGrid(main)
  })
}

const selectHangman = () => {
  const hangmanButton = document.querySelector('.hangmanButton')

  hangmanButton.addEventListener('click', () => {
    main.innerHTML = ''
    createSection()
  })
}

const selectMemoryGame = () => {
  const memoryGameButton = document.querySelector('.memoryGameButton')

  memoryGameButton.addEventListener('click', () => {
    main.innerHTML = ''
    CreateSectionMemoryGame(main)
  })
}

const initailScreen = () => {
  CreateSectionMemoryGame(main)
}

selectTicTacToe()
selectHangman()
selectMemoryGame()
window.onload = initailScreen()
