export const PlayerTurns = (currentPlayer) => {
  const elementDivs = document.querySelectorAll('.elementDiv')
  const playerX = document.querySelector('.playerX')
  const playerO = document.querySelector('.playerO')

  const handleDivClick = (div) => {
    if (currentPlayer === 'X') {
      div.querySelector('.XImg').classList.remove('hide')
      div.classList.add('XChosen', 'selected')
      div.classList.remove('elementDiv')
      playerX.classList.remove('play')
      playerO.classList.add('play')
      currentPlayer = 'O'
    } else {
      div.querySelector('.OImg').classList.remove('hide')
      div.classList.add('OChosen', 'selected')
      div.classList.remove('elementDiv')
      playerX.classList.add('play')
      playerO.classList.remove('play')
      currentPlayer = 'X'
    }
    div.removeEventListener('click', () => handleDivClick(div))
  }

  elementDivs.forEach((div) => {
    div.addEventListener('click', () => handleDivClick(div), { once: true })
  })
}
