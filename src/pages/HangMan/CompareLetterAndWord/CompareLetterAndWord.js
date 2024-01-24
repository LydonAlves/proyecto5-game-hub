import { updateHangmanImage } from '../CreateHangmanImg/CreateHangmanImg'
import { chosenLetterArray } from '../LetterChosen/LetterChosen'
import { randomWord } from '../SelectRandomWord/SelectRandomWord'
import { showCorrectLetters } from '../ShowCorrectLetters/ShowCorrectLetters'

export let incorrectLetters = []
export let wrongGuessCount = 0

export const compareChosenLetterAndRandomWord = () => {
  const correctLetters = []
  let isLetterCorrect = false

  for (let i = 0; i < randomWord.length; i++) {
    if (chosenLetterArray[0] === randomWord[i]) {
      correctLetters.push(chosenLetterArray[0])
      isLetterCorrect = true
      showCorrectLetters(correctLetters)
      break
    }
  }
  if (!isLetterCorrect) {
    incorrectLetters.push(chosenLetterArray[0])
    wrongGuessCount++
  }

  updateHangmanImage(wrongGuessCount)
}

export const resetValues = () => {
  wrongGuessCount = 0
  incorrectLetters.length = 0
}
