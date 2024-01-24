import './SelectGameButtons.css'

export const selectGameTypeButtons = (section) => {
  const selectGameTypeDiv = document.createElement('div')
  const plantButton = document.createElement('button')
  const waterButton = document.createElement('button')
  const fireButton = document.createElement('button')

  selectGameTypeDiv.classList.add('selectGameTypeDiv')
  plantButton.classList.add('plantButton', 'selectGameButton')
  waterButton.classList.add('waterButton', 'selectGameButton')
  fireButton.classList.add('fireButton', 'selectGameButton')

  plantButton.innerText = 'Plant'
  waterButton.innerText = 'Water'
  fireButton.innerText = 'Fire'

  selectGameTypeDiv.append(plantButton)
  selectGameTypeDiv.append(waterButton)
  selectGameTypeDiv.append(fireButton)
  section.append(selectGameTypeDiv)
}
