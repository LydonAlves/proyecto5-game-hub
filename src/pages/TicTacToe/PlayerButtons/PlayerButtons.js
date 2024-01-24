import { startGame } from '../StartGame/StartGame'
import './PlayerButtons.css'

export const createPlayerButtons = () => {
  const playerButtonDiv = document.createElement('div')
  const playerX = document.createElement('button')
  const playerO = document.createElement('button')

  const playerXImg = document.createElement('img')
  const playerOImg = document.createElement('img')

  playerButtonDiv.classList.add('playerButtonDiv')
  playerX.classList.add('playerX', 'playerButton', 'play')
  playerO.classList.add('playerO', 'playerButton', 'play')
  playerXImg.src = './assets/ticTacToe/cross.png'
  playerOImg.src = './assets/ticTacToe/o.png'

  playerX.append(playerXImg)
  playerO.append(playerOImg)
  playerButtonDiv.append(playerX)
  playerButtonDiv.append(playerO)

  startGame(playerO, playerX)

  return playerButtonDiv
}
