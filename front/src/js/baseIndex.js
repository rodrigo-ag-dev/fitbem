var proximaImagem = 0
var imagens = null
var IdAvancarImagem = null
var idResetarImagens = null
const timerInterval = 3500

const avancarImagem = () => {
  if (!imagens) {
    imagens = document.querySelector(".divCampaign")
    if (imagens)
      imagens = imagens.children
  }

  if (imagens) {
    if (proximaImagem == 0)
      imagens[imagens.length - 1].style.marginLeft = "100%"

    const imagem = imagens[proximaImagem]
    imagem.style.marginLeft = "0%"

    for (let i = 0; i < imagens.length; i++) {
      if (i < proximaImagem)
        imagens[i].style.marginLeft = "100%"
    }

    proximaImagem++

    if (proximaImagem >= imagens.length)
      proximaImagem = 0
  }
}

const baseIndex = (self) => {
  IdAvancarImagem = setInterval(() => avancarImagem(), timerInterval)

  const divTop = document.createElement('div')
  divTop.classList.add('appIndexTop')
  divTop.innerHTML = 'Indices'

  const divRow1 = document.createElement('div')
  divRow1.classList.add('divRow')
  divRow1.classList.add('divRow1')

  const divRow2 = document.createElement('div')
  divRow2.classList.add('divRow')
  divRow2.classList.add('divRow2')

  const divDash = document.createElement('div')
  divDash.classList.add('appIndexDash')
  divDash.appendChild(divRow1)
  divDash.appendChild(divRow2)

  createIndex(divDash)

  const divMiddle = document.createElement('div')
  divMiddle.classList.add('appIndexMiddle')
  divMiddle.appendChild(divDash)

  const divWeight = createTips(
    'Peso ideal:',
    '*Valor médio para adultos',
    './src/images/scale.png',
    () => {
      const pText = document.createElement('p')
      pText.innerHTML = idealWeight(_height) + ' Kg'

      const child = document.createElement('div')
      child.classList.add('appTipsChild')
      child.appendChild(pText)

      return child
    }
  )

  const divWater = createTips(
    'Água por dia:',
    '*Valor médio para adultos',
    './src/images/water_drop.png',
    () => {
      const pText = document.createElement('p')
      pText.innerHTML = (_weight * 3.5 / 100).toFixed(1) + ' Litros'

      const child = document.createElement('div')
      child.classList.add('appTipsChild')
      child.appendChild(pText)

      return child
    }
  )

  const divBottom = document.createElement('div')
  divBottom.classList.add('appIndexBottom')
  divBottom.appendChild(divWeight)
  divBottom.appendChild(divWater)

  const divCenter = document.createElement('div')
  divCenter.classList.add('appCenter')
  divCenter.appendChild(divTop)
  divCenter.appendChild(divMiddle)
  divCenter.appendChild(divBottom)

  const pRightTop = document.createElement('p')
  pRightTop.classList.add('appIndexTop')
  pRightTop.style.cssText += 'font-size: 16pt; display: flex; justify-content: end; font-weight: 300;'
  pRightTop.innerHTML = _name

  const divRightTop = document.createElement('div')
  divRightTop.classList.add('appIndexTop')
  divRightTop.appendChild(pRightTop)

  const rightGrid = document.createElement('div')
  rightGrid.classList.add('appIndexDash')
  rightGrid.style.cssText += 'overflow: auto; background-color: var(--splashMenu-bgcolor); margin-inline: 0;'

  const pTitle = document.createElement('p')
  pTitle.style.cssText += 'width: calc(100% - 20pt); margin-block: 15pt; padding-left: 20pt; color: var(--primary-color); font-weight: bold;'
  pTitle.innerHTML = 'Resultados Anteriores'
  rightGrid.appendChild(pTitle)

  fetch(_addressAPI + 'history/' + _userId, { method: 'GET', headers: { "Authorization": "Bearer " + _token } })
    .then(resp => resp.json()
      .then(json => {
        json.forEach(e => {
          rightGrid.appendChild(createHistory(e))
        })
      })
    )

  const divRightGrid = document.createElement('div')
  divRightGrid.classList.add('appIndexMiddle')
  divRightGrid.style.cssText += 'min-height: 380.969px;'
  divRightGrid.appendChild(rightGrid)

  const divCampaign = document.createElement('div')
  divCampaign.classList.add('divCampaign')
  divCampaign.innerHTML = `
      <img src="./src/images/anuncios/image1.jpg" alt="imagem um" />
      <img src="./src/images/anuncios/image2.jpg" alt="imagem dois" />
      <img src="./src/images/anuncios/image3.jpg" alt="imagem três" />
      `
  const divRight = document.createElement('div')
  divRight.classList.add('appRight')
  divRight.appendChild(divRightTop)
  divRight.appendChild(divRightGrid)
  divRight.appendChild(divCampaign)

  const appBase = document.querySelector('.appBase')
  appBase.innerHTML = null
  appBase.appendChild(divCenter)
  appBase.appendChild(divRight)
}

const createIndex = (divDash) => {
  const divCircleWeight = document.createElement('div')
  divCircleWeight.classList.add('divCircle')

  const pWeigth = document.createElement('p')
  pWeigth.style.cssText += 'position: absolute; top: 30px'
  pWeigth.innerHTML = 'PESO'
  divCircleWeight.appendChild(pWeigth)

  const pValueWeigth = document.createElement('p')
  pValueWeigth.style.cssText += 'margin-top: 20px;'
  pValueWeigth.innerHTML = '0 kg'
  divCircleWeight.appendChild(pValueWeigth)

  const divCircleMainWeight = document.createElement('div')
  divCircleMainWeight.classList.add('divMainCircle')
  divCircleMainWeight.appendChild(divCircleWeight)

  const divCircleBMI = document.createElement('div')
  divCircleBMI.classList.add('divCircle')

  const pBMI = document.createElement('p')
  pBMI.style.cssText += 'position: absolute; top: 30px'
  pBMI.classList.add('p2')
  pBMI.innerHTML = 'IMC'
  divCircleBMI.appendChild(pBMI)

  const pValueBMI = document.createElement('p')
  pValueBMI.classList.add('p2')
  pValueBMI.style.cssText += 'margin-top: 20px;'
  pValueBMI.innerHTML = '0,0'
  divCircleBMI.appendChild(pValueBMI)

  const divCircleMainBMI = document.createElement('div')
  divCircleMainBMI.classList.add('divMainCircle')
  divCircleMainBMI.appendChild(divCircleBMI)
  divCircleMainBMI.style.cssText += 'border: 14px solid var(--secundary-color-sel); border-top: 0;'

  const divCircleHeight = document.createElement('div')
  divCircleHeight.classList.add('divCircle')

  const pHeigth = document.createElement('p')
  pHeigth.style.cssText += 'position: absolute; top: 30px;'
  pHeigth.innerHTML = 'ALTURA'
  divCircleHeight.appendChild(pHeigth)

  const pValueHeight = document.createElement('p')
  pValueHeight.innerHTML = '0 cm'
  pValueHeight.style.cssText += 'margin-top: 20px;'
  divCircleHeight.appendChild(pValueHeight)

  const divCircleMainHeight = document.createElement('div')
  divCircleMainHeight.classList.add('divMainCircle')
  divCircleMainHeight.appendChild(divCircleHeight)

  const divLast = document.createElement('div')
  divLast.classList.add('divLast')
  divLast.appendChild(divCircleMainWeight)
  divLast.appendChild(divCircleMainBMI)
  divLast.appendChild(divCircleMainHeight)

  const divTitle = document.createElement('div')
  divTitle.classList.add('divTitle')
  divTitle.innerHTML = 'Indice de massa corporal'

  const divState = document.createElement('div')
  divState.classList.add('divState')
  divState.innerHTML = ' '

  const divRow1 = divDash.querySelector('.divRow1')
  divRow1.appendChild(divTitle)
  divRow1.appendChild(divLast)

  const divRow2 = divDash.querySelector('.divRow2')
  divRow2.appendChild(divState)

  pValueWeigth.innerHTML = _weight.split('.')[0] + ' kg'
  pValueBMI.innerHTML = _bmi
  pValueHeight.innerHTML = _height / 100 + ' m'
  divState.innerHTML = BMIStatus(_bmi)
}

const createHistory = (e) => {
  const bmi = BMICalc(e.weight, e.height)

  const pClass = document.createElement('p')
  pClass.style.cssText += 'color: var(--secondary-color); font-size: 16px'
  pClass.innerHTML = BMIStatus(bmi)

  const pDate = document.createElement('p')
  pDate.style.cssText += 'color: var(--primary-color); font-size: 16px'
  pDate.innerHTML = FormatDate(e.day)

  const divText = document.createElement('div')
  divText.style.cssText += 'margin-inline: 20px; display: flex; flex-direction:column;'
  divText.appendChild(pClass)
  divText.appendChild(pDate)

  const pBmi = document.createElement('p')
  pBmi.style.cssText += 'color: var(--input-color); font-size: 16px'
  pBmi.innerHTML = bmi

  const divBmi = document.createElement('div')
  divBmi.style.cssText += `
    width: 60px;
    height: 60px;
    margin-left: 20pt;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secundary-color-sel);
  `
  divBmi.appendChild(pBmi)

  const div = document.createElement('div')
  div.style.cssText += 'width: 100%; height: 65px; margin-block: 12pt; display: flex; align-items: center;'
  div.appendChild(divBmi)
  div.appendChild(divText)
  return div
}

const createTips = (title, info, icon, children) => {
  const imgIcon = document.createElement('img')
  imgIcon.style.cssText += 'width: 2em; height: 2em;'
  imgIcon.src = icon

  const pTitle = document.createElement('div')
  pTitle.classList.add('appTipsTitle')
  pTitle.innerHTML = title

  const divIcon = document.createElement('div')
  divIcon.classList.add('appTipsIcon')
  divIcon.appendChild(imgIcon)

  const divTips = document.createElement('div')
  divTips.classList.add('appTips')
  divTips.appendChild(pTitle)
  divTips.appendChild(divIcon)

  if (info) {
    const pInfo = document.createElement('p')
    pInfo.classList.add('appTipsInfo')
    pInfo.innerHTML = info
    divTips.appendChild(pInfo)
  }

  if (children)
    divTips.appendChild(children())

  return divTips
}