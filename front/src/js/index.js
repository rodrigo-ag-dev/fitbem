const load = () => {
  imagens = null
  proximaImagem = 0

  if (IdAvancarImagem)
    clearInterval(IdAvancarImagem)
  if (idResetarImagens)
    clearInterval(idResetarImagens)

  _token = localStorage.getItem('token')
  _name = localStorage.getItem('name')
  _email = localStorage.getItem('mail')
  _userId = localStorage.getItem('userID')
  _weight = localStorage.getItem('weight')
  _height = localStorage.getItem('height')
  _bmi = localStorage.getItem('bmi')
  if (_token)
    appBody()
  else {
    splashBody()
    slogan()
  }
}

window.addEventListener('load', load)

const createIconButton = (icon, onClick, defaultMenu = false, noSelected = false, clearTimer = true) => {
  const imgIcon = document.createElement('img')
  imgIcon.src = icon

  const btnIcon = document.createElement('button')
  btnIcon.classList.add('iconButton')
  btnIcon.appendChild(imgIcon)
  if (onClick)
    btnIcon.addEventListener('click', () => {
      if (clearTimer) {
        imagens = null
        proximaImagem = 0
        if (IdAvancarImagem)
          clearInterval(IdAvancarImagem)
        if (idResetarImagens)
          clearInterval(idResetarImagens)
      }

      if (!noSelected)
        menuSelected(btnIcon.index)
      onClick(btnIcon)
    })

  btnIcon.index = _menuArray.length + 1

  _menuArray.push(btnIcon)

  if (defaultMenu && !noSelected)
    menuSelected(btnIcon.index)

  return btnIcon
}

const createButton = (caption, onClick, classStyle) => {
  const btn = document.createElement('button')
  if (classStyle)
    btn.classList.add(classStyle)
  else
    btn.classList.add('splashOption')

  const splashP = document.createElement('p')
  splashP.innerHTML = caption
  btn.appendChild(splashP)

  if (onClick)
    btn.addEventListener('click', onClick)

  return btn
}

const createInput = (placeholder = null, type = null, icon = null, addClass = null, height = null) => {
  const iInput = document.createElement('input')
  iInput.classList.add('inputField')
  if (addClass)
    iInput.classList.add(addClass)

  if (placeholder)
    iInput.placeholder = placeholder

  if (icon)
    iInput.style.cssText += `padding-right: 15px; 
                             background: url("${icon}") no-repeat scroll right center var(--input-bgcolor); 
                             background-origin: content-box;
                             background-size: 32px;
                             `

  if (type != 'text' || !type) {
    iInput.type = !type ? 'text' : type
    if (type == 'email')
      iInput.pattern = `.+@globex\.com`
    if (height)
      iInput.style.cssText += height
  }

  return iInput
}

const createCombo = (placeholder = null, options = [], addClass = null) => {
  const iCombo = document.createElement('select')
  iCombo.classList.add('comboField')
  if (options || options.length > 0) {
    options.forEach((e) => {
      const option = document.createElement('option')
      option.text = e.text
      option.value = e.value
      iCombo.options.add(option)
    })

  }

  if (addClass)
    iCombo.classList.add(addClass)

  if (placeholder)
    iCombo.placeholder = placeholder

  return iCombo
}

const createText = (placeholder = null, icon = null, addClass = null, height = null) => {
  const iInput = document.createElement('textarea')
  if (placeholder)
    iInput.placeholder = placeholder
  iInput.classList.add('inputField')
  if (addClass)
    iInput.classList.add(addClass)
  if (height)
    iInput.style.cssText += height

  return iInput
}