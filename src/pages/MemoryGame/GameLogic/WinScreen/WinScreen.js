import { CreateSectionMemoryGame } from '../../SectionMemoryGame/SectionMemoryGame'
import './WinScreen.css'

const resetGame = (newGameButton) => {
  console.log(newGameButton)
  newGameButton.addEventListener('click', () => {
    const main = document.querySelector('main')
    CreateSectionMemoryGame(main)
  })
}

export const winScreen = (trainer) => {
  const sectionMemoryGame = document.querySelector('.sectionMemoryGame')
  const winnerDivPokemon = document.createElement('div')
  const winnerText = document.createElement('h1')
  const clonedTrainer = trainer.cloneNode(true)
  const newGameButton = document.createElement('button')

  winnerDivPokemon.classList.add('winnerDivPokemon')
  winnerText.classList.add('winnerText')
  newGameButton.classList.add('newGameButton')
  newGameButton.innerText = 'New Game'

  if (trainer.classList.contains('ashTrainerDiv')) {
    winnerText.innerText = 'Player 1 wins!!!'
  } else {
    winnerText.innerText = 'Player 2 wins!!!'
  }

  if (sectionMemoryGame.classList.contains('fireBackground')) {
    winnerDivPokemon.classList.add('fireWins')
  } else if (sectionMemoryGame.classList.contains('waterBackground')) {
    winnerDivPokemon.classList.add('waterWins')
  } else if (sectionMemoryGame.classList.contains('grassBackground')) {
    winnerDivPokemon.classList.add('grassWins')
  }

  clonedTrainer.classList.add('clonedTrainer')
  clonedTrainer.classList.remove(
    'trainerAndPokemonDiv',
    'ashTrainerDiv',
    'brockTrainerDiv'
  )

  resetGame(newGameButton)
  winnerDivPokemon.append(winnerText)
  winnerDivPokemon.append(clonedTrainer)
  winnerDivPokemon.append(newGameButton)
  sectionMemoryGame.append(winnerDivPokemon)
}
