import { resetValues } from '../CompareLetterAndWord/CompareLetterAndWord'
import { chosenLetterArray } from '../LetterChosen/LetterChosen'
import { createSection } from '../SectionHangman/SectionHangman'
import { randomWord } from '../SelectRandomWord/SelectRandomWord'
import './EndGame.css'

export const endGameLogic = (incorrectLettersContainer, gameLogicDiv) => {
  gameLogicDiv.addEventListener('click', () => {
    const incorrectLetters = incorrectLettersContainer.querySelectorAll('p')
    const guessWordDivs = gameLogicDiv.querySelectorAll('.gapDiv')
    const guessedWordLetters = gameLogicDiv.querySelectorAll('.letterP')
    const wordDivsArray = Object.values(guessWordDivs)
    let foundLetters = 0

    guessedWordLetters.forEach((letter) => {
      if (!letter.classList.contains('hide')) {
        foundLetters++
      }
    })

    if (incorrectLetters.length == 6) {
      const looseGame = 'You have lost, try again!'
      endGameDiv(looseGame)
    } else {
      if (wordDivsArray.length === foundLetters) {
        const winGame = 'Well done you have won!'
        endGameDiv(winGame)
      }
    }
  })
}

const endGameDiv = (gameMessage) => {
  const section = document.querySelector('section')
  const endGameDiv = document.createElement('div')
  const endGameText = document.createElement('p')
  const correctWord = document.createElement('p')
  const resetButtonHangman = document.createElement('button')

  endGameDiv.classList.add('endGameDiv')
  endGameText.classList.add('endGameText')
  correctWord.classList.add('correctWord')
  resetButtonHangman.classList.add('resetButtonHangman')

  endGameText.innerText = gameMessage
  resetButtonHangman.innerText = 'Play again'
  correctWord.innerText = `The correct word was:` + ' ' + randomWord

  resetButtonHangman.addEventListener('click', () => {
    console.log('clicked')
    endGameDiv.classList.add('hide')
    createSection()
    resetValues()
    chosenLetterArray.length = 0
  })

  endGameDiv.append(endGameText)
  endGameDiv.append(correctWord)
  endGameDiv.append(resetButtonHangman)
  section.append(endGameDiv)
}
