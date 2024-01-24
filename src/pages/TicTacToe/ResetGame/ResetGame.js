import { createGrid } from '../CreateBoard/CreateBoard'
import { addXandO } from '../AddXandO/AddXandO'

export const resetGame = (resetButton) => {
  resetButton.addEventListener('click', () => {
    createGrid()
    addXandO()
  })
}
