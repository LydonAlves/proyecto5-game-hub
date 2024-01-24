import './CreateHangmanImg.css'

export const createHangmanImg = (section) => {
  const hangmanImgDiv = document.createElement('div')
  const hangmanImg = document.createElement('img')

  hangmanImgDiv.classList.add('hangmanImgDiv')
  hangmanImg.classList.add('hangmanImg')
  hangmanImg.id = 'hangmanImage'
  hangmanImg.src = '../../../../assets/hangman/hangman-0.svg'

  hangmanImgDiv.append(hangmanImg)
  section.append(hangmanImgDiv)
}

export const updateHangmanImage = (step) => {
  if (step < 0 || step > 6) {
    console.error('Invalid step: ', step)
    return
  }

  let imageElement = document.getElementById('hangmanImage')
  imageElement.src = `../../../../assets/hangman/hangman-${step}.svg?${new Date().getTime()}`
}
