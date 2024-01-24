export const playerTurns = () => {
  const trainerContainers = document.querySelectorAll('.trainerContainer')
  trainerContainers.forEach((container) => {
    container.classList.toggle('playingNow')
    const title = container.querySelector('p')
    title.classList.toggle('notPlayingNow')
  })
}
