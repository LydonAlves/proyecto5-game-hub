import { gameInstructions } from '../../Data/GameInstructions/GameInstructions'
import { chooseType } from '../../Types/Types/Types'
import { seeInstructions } from '../SeeInstructions/SeeInstructions'
import { selectGameTypeButtons } from '../SelectGameButtons/SelectGameButtons'
import './CreateInitialScreen.css'

export const createInitialScreen = () => {
  const cardsContainer = document.querySelector('.cardsContainer')
  const brockContainer = document.querySelector('.brockContainer')
  const brockTitle = brockContainer.querySelector('.playerTitle')
  const instructionsDiv = document.createElement('div')
  const instructionsDivTitle = document.createElement('h1')
  const buttonsDiv = document.createElement('div')
  const nextButton = document.createElement('button')
  const startGameButton = document.createElement('button')

  instructionsDivTitle.innerText = 'Instructions'
  nextButton.innerText = 'Next >>'
  startGameButton.innerText = 'Start Game'

  brockTitle.classList.remove('notPlayingNow')
  instructionsDivTitle.classList.add('instructionsDivTitle')
  buttonsDiv.classList.add('buttonsDiv')
  nextButton.classList.add('nextButton', 'initialScreenButtons')
  startGameButton.classList.add('startGameButton', 'initialScreenButtons')
  instructionsDiv.classList.add('instructionsDiv')

  instructionsDiv.append(instructionsDivTitle)

  gameInstructions.forEach((instructions) => {
    const instructionsParts = document.createElement('div')
    const instructionTitle = document.createElement('h2')
    const instructionsText = document.createElement('p')

    instructionTitle.innerText = instructions.title
    instructionsText.innerText = instructions.instructions

    instructionTitle.classList.add('instructionTitle')
    instructionsText.classList.add('instructionsText')
    instructionsParts.classList.add('instructionsParts', 'hide')
    instructionsParts.id = instructions.id

    instructionsParts.append(instructionTitle)
    instructionsParts.append(instructionsText)
    instructionsDiv.append(instructionsParts)
  })

  buttonsDiv.append(startGameButton)
  buttonsDiv.append(nextButton)
  instructionsDiv.append(buttonsDiv)
  cardsContainer.append(instructionsDiv)
  seeInstructions(nextButton)
  startGame(startGameButton, instructionsDiv, cardsContainer)
}

const startGame = (startGameButton, instructionsDiv, cardsContainer) => {
  const chooseTypeText = document.createElement('h2')

  chooseTypeText.classList.add('chooseTypeText')
  chooseTypeText.innerText = 'Choose the type of pokemon you want to play with'

  startGameButton.addEventListener('click', () => {
    instructionsDiv.classList.add('hide')
    cardsContainer.append(chooseTypeText)
    selectGameTypeButtons(cardsContainer)
    chooseType()
  })
}
