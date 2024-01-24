import { PlayerTurns } from '../PlayerClickTurn/PlayerClickTurn'
export const startGame = (playerO, playerX) => {
  const removeEventListeners = () => {
    playerO.removeEventListener('click', playerOStarts)
    playerX.removeEventListener('click', playerXStarts)
  }

  const playerOStarts = () => {
    playerX.classList.remove('play')
    removeEventListeners()
    let currentPlayer = 'O'
    PlayerTurns(currentPlayer)
  }

  const playerXStarts = () => {
    playerO.classList.remove('play')
    removeEventListeners()
    let currentPlayer = 'X'
    PlayerTurns(currentPlayer)
  }

  playerO.addEventListener('click', playerOStarts)
  playerX.addEventListener('click', playerXStarts)
}
