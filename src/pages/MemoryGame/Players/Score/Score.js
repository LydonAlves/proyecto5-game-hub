import './Score.css'

export const scoreCounter = (pokeballContainer) => {
  const scoreCounterDiv = document.createElement('div')
  const score = document.createElement('p')

  scoreCounterDiv.classList.add('scoreCounterDiv')
  score.classList.add('score')
  score.innerText = '0'

  scoreCounterDiv.append(score)
  pokeballContainer.append(scoreCounterDiv)

  const updateScore = (points) => {
    let currentScore = parseInt(score.innerText)
    currentScore += points
    score.innerText = currentScore.toString
  }

  return { score, updateScore }
}
