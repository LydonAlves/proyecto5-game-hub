import { letterChosen } from '../LetterChosen/LetterChosen'
import './lettersToChoose.css'

export const lettersToChoose = (gameLogicDiv) => {
  const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('')
  const letterBoxDiv = document.createElement('div')

  letterBoxDiv.classList.add('letterBoxDiv')

  alphabet.forEach((letter) => {
    const individualLetterButton = document.createElement('button')
    const letterToChoose = document.createElement('p')

    individualLetterButton.classList.add('individualLetterButton')
    letterToChoose.classList.add('letterToChoose')
    letterToChoose.innerText = letter

    individualLetterButton.append(letterToChoose)
    letterBoxDiv.append(individualLetterButton)
  })

  gameLogicDiv.append(letterBoxDiv)
  letterChosen(letterBoxDiv)
}
