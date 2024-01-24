import { incorrectLetters } from '../CompareLetterAndWord/CompareLetterAndWord'
import { endGameLogic } from '../EndGame/EndGame'
import './PrintIncorrectLetters.css'

export const addLettersToDiv = (gameLogicDiv) => {
  const incorrectLettersContainer = document.createElement('div')
  const letterBoxDiv = gameLogicDiv.querySelector('.letterBoxDiv')

  incorrectLettersContainer.classList.add('incorrectLettersContainer')

  const updateIncorrectLetters = () => {
    incorrectLettersContainer.innerHTML = ''

    incorrectLetters.forEach((letter) => {
      const incorrectLetterDiv = document.createElement('div')
      const incorrectLetterP = document.createElement('p')

      incorrectLetterDiv.classList.add('incorrectLetterDiv')
      incorrectLetterP.classList.add('incorrectLetterP')
      incorrectLetterP.innerText = letter

      incorrectLetterDiv.append(incorrectLetterP)
      incorrectLettersContainer.append(incorrectLetterDiv)
    })
  }

  letterBoxDiv.addEventListener('click', updateIncorrectLetters)

  gameLogicDiv.append(incorrectLettersContainer)
  endGameLogic(incorrectLettersContainer, gameLogicDiv)
}
