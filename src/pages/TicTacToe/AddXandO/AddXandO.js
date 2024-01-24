import './AddXandO.css'

export const addXandO = () => {
  const elementDiv = document.querySelectorAll('.elementDiv')
  elementDiv.forEach((div) => {
    const XImg = document.createElement('img')
    const OImg = document.createElement('img')
    XImg.src = '/assets/ticTacToe/cross.png'
    OImg.src = '/assets/ticTacToe/o.png'
    XImg.classList.add('hide', 'XImg')
    OImg.classList.add('hide', 'OImg')

    div.append(XImg)
    div.append(OImg)
  })
}
