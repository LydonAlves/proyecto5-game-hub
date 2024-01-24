import { createGrid } from '../CreateBoard/CreateBoard'
import { addXandO } from '../addXandO/AddXandO'

export const resetGame = (resetButton) => {
  resetButton.addEventListener('click', () => {
    createGrid()
    addXandO()
  })
}
