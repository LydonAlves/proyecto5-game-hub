export const seeInstructions = (nextButton) => {
  let currentDivIndex = 1

  changePage(currentDivIndex)
  nextButton.addEventListener('click', () => {
    currentDivIndex++

    if (currentDivIndex == 3) {
      nextButton.classList.add('hide')
    }

    changePage(currentDivIndex)
  })
}

const changePage = (currentDivIndex) => {
  const instructionsParts = document.querySelectorAll('.instructionsParts')
  instructionsParts.forEach((part) => {
    if (part.id == currentDivIndex) {
      part.classList.remove('hide')
    } else {
      part.classList.add('hide')
    }
  })
}
