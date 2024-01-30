import './RoundOver.css'
import { evolvePokemon } from '../EvolvePokemon/EvolvePokemon'
import { main } from '../../../../../main'

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
    playerScore(ashScoreNumber, brockScoreNumber)

    setTimeout(() => {
      if (ashScoreNumber > brockScoreNumber) {
        evolvePokemon(ashDiv)
      } else {
        evolvePokemon(brockDiv)
      }
    }, 1500)
  }
}

const playerScore = (ashScoreNumber, brockScoreNumber) => {
  const section = main.querySelector('.sectionMemoryGame')
  const showScoreAfterRound = document.createElement('div')
  const playerScoreTitle = document.createElement('h3')
  const playerScoresDiv = document.createElement('div')
  const playerOneScore = document.createElement('p')
  const playerTwoScore = document.createElement('p')

  showScoreAfterRound.classList.add('showScoreAfterRound')
  playerScoreTitle.classList.add('playerScoreTitle')
  playerScoresDiv.classList.add('playerScoresDiv')
  playerOneScore.classList.add('playerOneScore')
  playerTwoScore.classList.add('playerTwoScore')

  playerScoreTitle.innerText = 'Player scores'
  playerOneScore.innerText = `Player 1: ${ashScoreNumber}`
  playerTwoScore.innerText = `Player 2: ${brockScoreNumber}`

  playerScoresDiv.append(playerOneScore)
  playerScoresDiv.append(playerTwoScore)
  showScoreAfterRound.append(playerScoreTitle)
  showScoreAfterRound.append(playerScoresDiv)
  section.append(showScoreAfterRound)

  setTimeout(() => {
    showScoreAfterRound.innerHTML = ''
    showScoreAfterRound.classList.add('hide')
  }, 3000)
}
