import { showWinner } from '../ShowWinner/ShowWinner'

export const endGame = () => {
  const gameDiv = document.querySelector('.gameDiv')
  const divA1 = document.querySelector('.A1')
  const divA2 = document.querySelector('.A2')
  const divA3 = document.querySelector('.A3')
  const divB1 = document.querySelector('.B1')
  const divB2 = document.querySelector('.B2')
  const divB3 = document.querySelector('.B3')
  const divC1 = document.querySelector('.C1')
  const divC2 = document.querySelector('.C2')
  const divC3 = document.querySelector('.C3')

  const combinationsToWin = [
    [divA1, divB1, divC1],
    [divA2, divB2, divC2],
    [divA3, divB3, divC3],

    [divA1, divA2, divA3],
    [divB1, divB2, divB3],
    [divC1, divC2, divC3],

    [divA1, divB2, divC3],
    [divC1, divB2, divA3]
  ]
  const tieCombination = [
    divA1,
    divA2,
    divA3,
    divB1,
    divB2,
    divB3,
    divC1,
    divC2,
    divC3
  ]

  OWins(gameDiv, combinationsToWin)
  XWins(gameDiv, combinationsToWin)
  tie(gameDiv, tieCombination)
}

const OWins = (gameDiv, combinationsToWin) => {
  gameDiv.addEventListener('click', () => {
    combinationsToWin.forEach((combo) => {
      if (combo.every((div) => div.classList.contains('OChosen'))) {
        disableAllDivs()
        setTimeout(() => {
          const titleContent = 'The winner is O'
          showWinner(titleContent)
        }, 500)
      }
    })
  })
}

const XWins = (gameDiv, combinationsToWin) => {
  gameDiv.addEventListener('click', () => {
    combinationsToWin.forEach((combo) => {
      if (combo.every((div) => div.classList.contains('XChosen'))) {
        disableAllDivs()
        setTimeout(() => {
          const titleContent = 'The winner is X'
          showWinner(titleContent)
        }, 500)
      }
    })
  })
}

const tie = (gameDiv, tieCombination) => {
  gameDiv.addEventListener('click', () => {
    if (tieCombination.every((div) => div.classList.contains('selected'))) {
      disableAllDivs()
      setTimeout(() => {
        const titleContent = 'It is a tie'
        showWinner(titleContent)
      }, 500)
    }
  })
}

const disableAllDivs = () => {
  const allDivs = document.querySelectorAll('.elementDiv')
  const playerButton = document.querySelectorAll('.playerButton')
  allDivs.forEach((div) => {
    div.classList.remove('elementDiv')
    div.classList.add('gameOver')
  })
  playerButton.forEach((button) => {
    button.classList.remove('play')
  })
}
