import { evolvePokemon } from '../EvolvePokemon/EvolvePokemon'

export const roundOver = (allCards) => {
  const ashContainer = document.querySelector('.ashContainer')
  const ashDiv = document.querySelector('.ashTrainerDiv')
  const ashScore = ashContainer.querySelector('.score').innerText
  const ashScoreNumber = parseInt(ashScore)
  const brockContainer = document.querySelector('.brockContainer')
  const brockDiv = document.querySelector('.brockTrainerDiv')
  const brockScore = brockContainer.querySelector('.score').innerText
  const brockScoreNumber = parseInt(brockScore)

  let sum = ashScoreNumber + brockScoreNumber

  if (sum === 5) {
    setTimeout(() => {
      if (ashScoreNumber > brockScoreNumber) {
        evolvePokemon(ashDiv)
      } else {
        evolvePokemon(brockDiv)
      }
    }, 1000)
  }
}
