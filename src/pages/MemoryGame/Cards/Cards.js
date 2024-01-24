import { flipCards } from '../GameLogic/FlipCards/FlipCards'
import './Cards.css'

export const createCards = (section) => {
  const cardsContainer = document.createElement('div')

  cardsContainer.classList.add('cardsContainer')
  section.append(cardsContainer)
}

export const addCardsToContainer = (pokemonArray) => {
  const cardsContainer = document.querySelector('.cardsContainer')
  const randomIndexes = new Set()

  cardsContainer.innerHTML = ''

  while (randomIndexes.size < 5) {
    const randomIndex = Math.floor(Math.random() * pokemonArray.length)
    if (pokemonArray[randomIndex].image) {
      randomIndexes.add(randomIndex)
    }
  }

  const allCards = []

  randomIndexes.forEach((index) => {
    const pokemon = pokemonArray[index]

    const cardDiv = document.createElement('div')
    const cardDivInner = document.createElement('div')
    const cardFront = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardBack = document.createElement('div')

    cardDiv.classList.add('cardDiv')
    cardDivInner.classList.add('cardDivInner')
    cardFront.classList.add('cardFront')
    cardImg.classList.add('cardImg')
    cardBack.classList.add('cardBack')

    cardImg.alt = pokemon.name
    cardImg.src = pokemon.image

    cardFront.append(cardImg)
    cardDivInner.append(cardBack)
    cardDivInner.append(cardFront)
    cardDiv.append(cardDivInner)
    allCards.push(cardDiv)

    const cardDivCopy = cardDiv.cloneNode(true)
    allCards.push(cardDivCopy)
  })

  allCards.sort(() => Math.random() - 0.5)

  allCards.forEach((card) => {
    cardsContainer.append(card)
  })
}

export async function sendSelectedImagesToCards(fetchTypesFunction) {
  const types = await fetchTypesFunction()
  const pokemonArray = []

  for (const key in types) {
    if (types.hasOwnProperty.call(types, key)) {
      const pokemon = types[key]
      pokemonArray.push({ name: key, image: pokemon.image })
    }
  }
  addCardsToContainer(pokemonArray)
  flipCards()
  giveBrockTitleClass()
}

const giveBrockTitleClass = () => {
  const brockContainer = document.querySelector('.brockContainer')
  const brockTitle = brockContainer.querySelector('.playerTitle')
  brockTitle.classList.add('notPlayingNow')
}
