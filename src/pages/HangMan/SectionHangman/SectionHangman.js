import { createHangmanImg } from '../CreateHangmanImg/CreateHangmanImg'
import { createGapsToFill } from '../GapsToFill/GapsToFill'
import { hangmanInstructions } from '../Instructions/Instructions'
import { lettersToChoose } from '../LettersToChoose/LettersToChoose'
import { addLettersToDiv } from '../PrintIncorrectLetters/PrintIncorrectLetters'
import { selectRandomWord } from '../SelectRandomWord/SelectRandomWord'
import './SectionHangman.css'

export const gameLogicDiv = (section) => {
  const gameLogicDiv = document.createElement('div')
  gameLogicDiv.classList.add('gameLogicDiv')

  createGapsToFill(gameLogicDiv)
  lettersToChoose(gameLogicDiv)
  addLettersToDiv(gameLogicDiv)
  section.append(gameLogicDiv)
  selectRandomWord()
  hangmanInstructions(section)
}

export const createSection = () => {
  const main = document.querySelector('main')
  const hangManSection = document.createElement('section')

  main.innerHTML = ''

  hangManSection.classList.add('hangManSection')
  main.append(hangManSection)
  createHangmanImg(hangManSection)
  gameLogicDiv(hangManSection)
}
