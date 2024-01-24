import './Pokeball.css'

export const createPokeball = (pokeballContainer) => {
  const pokeballDiv = document.createElement('div')
  const pokeballImg = document.createElement('img')

  pokeballImg.src = './assets/pokemon/pokeball.png'
  pokeballDiv.classList.add('pokeballDiv')
  pokeballImg.classList.add('pokeballImg')

  pokeballDiv.append(pokeballImg)
  pokeballContainer.append(pokeballDiv)
}
