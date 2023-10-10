const _createDetailCard = ({ text, image, textBold }) => {
  const img = document.createElement('img')
  img.src = image

  const divImg = document.createElement('div')
  divImg.style.cssText = 'display: flex; justify-content: center; align-items: center; width: 23px; height: 23px;'
  divImg.appendChild(img)

  const pText = document.createElement('p')
  if (textBold)
    pText.style.cssText += 'font-size: 16px; font-weight: bold; color: #0d2c34;'
  else
    pText.style.cssText += 'font-size: 12px; color: #236678;'
  pText.innerHTML = text

  const detailCard = document.createElement('div')
  detailCard.style.cssText = 'display: flex; flex-direction: row;'
  detailCard.appendChild(divImg)
  detailCard.appendChild(pText)

  return detailCard
}

const createCardProfessional = ({ image, name, city, phone, specialty, category }, props) => {
  const img = document.createElement('img')
  img.src = image
  const divImage = document.createElement('div')
  divImage.appendChild(img)

  const divSub1 = document.createElement('div')
  divSub1.appendChild(_createDetailCard({ image: './src/images/fav.png', text: name, textBold: true }))
  divSub1.appendChild(_createDetailCard({ image: './src/images/city.png', text: city }))
  divSub1.appendChild(_createDetailCard({ image: './src/images/whatsapp.png', text: phone }))
  divSub1.style.cssText += `display: flex; flex-direction: column; height: 90px; justify-content: space-evenly; space-between;`

  const pTitleSpecialty = document.createElement('p')
  pTitleSpecialty.style.cssText += 'font-size: 14px; color: #0d2c34;'
  pTitleSpecialty.innerHTML = 'Especialidade:'

  const pSpecialty = document.createElement('p')
  pSpecialty.style.cssText += 'font-size: 12px; color: #236678; line-height: 1.2rem; text-align: justify; text-justify: inter-word;'
  pSpecialty.innerHTML = specialty

  const divSub2 = document.createElement('div')
  divSub2.style.cssText += `margin-top: 15px; overflow: hidden; max-height: 97px;`
  divSub2.appendChild(pTitleSpecialty)
  divSub2.appendChild(pSpecialty)

  const cat = document.createElement('p')
  cat.style.cssText += 'color: #ffffff;'
  cat.innerHTML = category

  const divCat = document.createElement('div')
  divCat.style.cssText += `
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 174px;
    height: 37px;
    border-radius: 10px;
    text-align: center;
    margin-top: -17px;
    background-color: #4f808d;
    margin-left: calc( calc( calc(343px + 30px)  / 2 ) - calc(174px /2));
    -webkit-box-shadow: 5px 5px 16px -8px rgba(0,0,0,1);
    -moz-box-shadow: 5px 5px 16px -8px rgba(0,0,0,1);
    box-shadow: 5px 5px 16px -8px rgba(0,0,0,1);
  `
  divCat.appendChild(cat)

  const cardInternal = document.createElement('div')
  cardInternal.style.cssText += `
    padding: 15px;
    padding-top: 27px;
    width : 343px;
    height: 210px;
    max-height: 210px;
    border-radius: 20px;
    background-color: #ffffff;
    -webkit-box-shadow: 5px 5px 16px -8px rgba(0,0,0,1);
    -moz-box-shadow: 5px 5px 16px -8px rgba(0,0,0,1);
    box-shadow: 5px 5px 16px -8px rgba(0,0,0,1);
    overflow: hidden;
  `

  cardInternal.appendChild(divSub1)
  cardInternal.appendChild(divSub2)

  const card = document.createElement('div')
  card.style.cssText += 'margin-left: 15px; margin-top: 30px;'
  card.appendChild(divCat)
  card.appendChild(cardInternal)

  return card
}