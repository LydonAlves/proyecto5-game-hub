import './GapsToFill.css'

export const createGapsToFill = (gameLogicDiv) => {
  const guessedWordContainer = document.createElement('div')

  guessedWordContainer.classList.add('guessedWordContainer')
  gameLogicDiv.append(guessedWordContainer)
}

export const fillGaps = (randomWord) => {
  const guessedWordContainer = document.querySelector('.guessedWordContainer')
  guessedWordContainer.innerHTML = ''

  for (let i = 0; i < randomWord.length; i++) {
    const gapDiv = document.createElement('div')
    const letterP = document.createElement('p')

    gapDiv.classList.add('gapDiv')
    letterP.classList.add('letterP', 'hide')
    letterP.innerText = randomWord[i]

    gapDiv.append(letterP)
    guessedWordContainer.append(gapDiv)
  }
}
