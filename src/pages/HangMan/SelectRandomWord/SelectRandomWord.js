import { fillGaps } from '../GapsToFill/GapsToFill'
import { hangmanWords } from '../WordListToGuess/WordListToGuess'

export let randomWord = ''

export const selectRandomWord = () => {
  const findRandomWord = Math.floor(Math.random() * hangmanWords.length)
  const randomWordFound = hangmanWords[findRandomWord]

  randomWord = randomWordFound
  fillGaps(randomWordFound)
}
