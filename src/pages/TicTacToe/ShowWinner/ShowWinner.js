import { resetGame } from '../ResetGame/ResetGame'
import './ShowWinner.css'

export const showWinner = (titleContent) => {
  const section = document.querySelector('.ticTacToeSection')
  const winnerDivTicTacToe = document.createElement('div')
  const winnerTitleTicTacToe = document.createElement('h2')
  const resetButton = document.createElement('button')

  section.innerHTML = ''
  resetButton.innerText = 'Reset'

  resetButton.classList.add('active', 'resetButton')
  winnerDivTicTacToe.classList.add('winnerDivTicTacToe')
  winnerTitleTicTacToe.classList.add('winnerTitleTicTacToe')
  winnerTitleTicTacToe.innerText = titleContent

  winnerDivTicTacToe.append(winnerTitleTicTacToe)
  winnerDivTicTacToe.append(resetButton)
  section.append(winnerDivTicTacToe)
  resetGame(resetButton)
}
