import { gridElements } from '../BoardData/BoardData'
import { createPlayerButtons } from '../PlayerButtons/PlayerButtons'
import { endGame } from '../EndGame/EndGame'
import { addXandO } from '../addXandO/AddXandO'
import './CreateBoard.css'
import { main } from '../../../../main'

export const createGrid = () => {
  const ticTacToeSection = document.createElement('section')
  const gameDiv = document.createElement('div')

  main.innerHTML = ''

  ticTacToeSection.className = 'ticTacToeSection'
  gameDiv.className = 'gameDiv'

  gridElements.forEach((element) => {
    const elementDiv = document.createElement('div')
    elementDiv.classList.add('elementDiv', element.number, 'active')
    elementDiv.id = element.id
    gameDiv.append(elementDiv)
  })

  ticTacToeSection.append(createPlayerButtons())
  ticTacToeSection.append(gameDiv)
  main.append(ticTacToeSection)
  addXandO()
  endGame()
  startInstructions(ticTacToeSection)
}

const startInstructions = (section) => {
  const playerButtonDiv = section.querySelector('.playerButtonDiv')
  const instructionsDiv = document.createElement('div')
  const instructionsText = document.createElement('p')

  instructionsDiv.classList.add('divTicTacToeInstructions')
  instructionsText.classList.add('ticTacToeInstructionsText')

  playerButtonDiv.addEventListener('click', () => {
    instructionsDiv.classList.add('hide')
  })

  instructionsText.innerText = 'Click on X or O to decide who starts first'
  instructionsDiv.append(instructionsText)
  section.append(instructionsDiv)
}
