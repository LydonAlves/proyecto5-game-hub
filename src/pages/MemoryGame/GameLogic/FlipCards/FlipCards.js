import { roundOver } from '../RoundOver/RoundOver'
import { playerPoints } from '../PlayerPoints/PlayerPoints'
import { playerTurns } from '../PlayerTurns/PlayerTurns'

export const flipCards = () => {
  const allCards = document.querySelectorAll('.cardDiv')
  let cardsToCheck = []
  let clicks = 0

  const resetCards = () => {
    setTimeout(() => {
      allCards.forEach((card) => {
        if (!card.classList.contains('matched')) {
          const innerCard = card.querySelector('.cardDivInner')
          innerCard.classList.remove('cardClicked')
          card.addEventListener('click', compareCards, { once: true })
        }
      })
    }, 1500)
  }

  const compareCards = (e) => {
    const card = e.currentTarget
    const innerCard = card.querySelector('.cardDivInner')
    const cardImage = card.querySelector('img')

    clicks++
    innerCard.classList.add('cardClicked')
    cardsToCheck.push(cardImage)

    if (clicks === 2) {
      allCards.forEach((card) => {
        card.removeEventListener('click', compareCards)
      })

      if (cardsToCheck[0].alt === cardsToCheck[1].alt) {
        playerPoints()
        roundOver(allCards)
        cardsToCheck.forEach((cardImg) => {
          cardImg.closest('.cardDiv').classList.add('matched')
        })

        allCards.forEach((card) => {
          if (!card.classList.contains('matched')) {
            card.addEventListener('click', compareCards)
          }
        })
      } else {
        card.classList.remove('matched')
        resetCards()
      }
      clicks = 0
      cardsToCheck = []
      playerTurns()
    }
  }
  allCards.forEach((card) => {
    card.addEventListener('click', compareCards, { once: true })
  })
}
