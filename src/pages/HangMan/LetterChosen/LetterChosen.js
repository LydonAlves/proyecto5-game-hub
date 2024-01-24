import { compareChosenLetterAndRandomWord } from '../CompareLetterAndWord/CompareLetterAndWord'
import { showCorrectLetters } from '../ShowCorrectLetters/ShowCorrectLetters'

export let chosenLetterArray = []

export const letterChosen = (letterBoxDiv) => {
  const letterChosen = letterBoxDiv.querySelectorAll('.individualLetterButton')

  letterChosen.forEach((letterButton) => {
    const chooseLetter = () => {
      const letter = letterButton
        .querySelector('.letterToChoose')
        .innerText.toLowerCase()
      console.log(chosenLetterArray)
      letterButton.classList.add('letterChosen')
      chosenLetterArray.push(letter)

      compareChosenLetterAndRandomWord()
      chosenLetterArray = []
    }
    letterButton.addEventListener('click', chooseLetter, { once: true })
  })

  letterBoxDiv.addEventListener('click', showCorrectLetters)
}
