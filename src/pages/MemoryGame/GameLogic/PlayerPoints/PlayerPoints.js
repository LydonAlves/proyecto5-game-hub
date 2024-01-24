export const playerPoints = () => {
  const trainerContainers = document.querySelectorAll('.trainerContainer')
  trainerContainers.forEach((container) => {
    const score = container.querySelector('.score')
    if (container.classList.contains('playingNow')) {
      score.innerText++
    }
  })
}
