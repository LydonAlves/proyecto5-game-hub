import './Header.css'

export const createHeader = () => {
  const header = document.createElement('header')
  chooseGameButtons(header)
  return header
}

const chooseGameButtons = (header) => {
  const memoryGameButton = document.createElement('button')
  const hangmanButton = document.createElement('button')
  const ticTacToeButton = document.createElement('button')

  memoryGameButton.innerText = 'Memory'
  hangmanButton.innerText = 'Hangman'
  ticTacToeButton.innerText = 'Tic-Tac-Toe'

  memoryGameButton.classList.add('memoryGameButton')
  hangmanButton.classList.add('hangmanButton')
  ticTacToeButton.classList.add('ticTacToeButton')

  header.append(memoryGameButton)
  header.append(hangmanButton)
  header.append(ticTacToeButton)
}
