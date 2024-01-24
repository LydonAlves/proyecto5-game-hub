import './Instructions.css'

export const hangmanInstructions = (section) => {
  const divHangmanInstructions = document.createElement('div')
  const textHangmanInstructions = document.createElement('p')
  const startButton = document.createElement('button')

  divHangmanInstructions.classList.add('divHangmanInstructions')
  textHangmanInstructions.classList.add('textHangmanInstructions')
  startButton.classList.add('startButtonHangman')

  textHangmanInstructions.innerText =
    'Guess the word by clicking on the letters.'
  startButton.innerText = 'Start game'

  startButton.addEventListener('click', () => {
    divHangmanInstructions.classList.add('hide')
  })

  divHangmanInstructions.append(textHangmanInstructions)
  divHangmanInstructions.append(startButton)
  section.append(divHangmanInstructions)
}
