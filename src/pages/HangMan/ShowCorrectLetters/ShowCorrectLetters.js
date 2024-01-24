import './ShowCorrectLetters.css'

export const showCorrectLetters = (correctLetters) => {
  const gapLetters = document.querySelectorAll('.gapDiv')

  gapLetters.forEach((element) => {
    const item = element.querySelector('.letterP')
    const letter = item.innerText
    if (letter === correctLetters[0]) {
      item.classList.remove('hide')
      item.classList.add('capitalize')
    }
  })
}
