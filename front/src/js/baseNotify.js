const _createRecord = ({ id, type, message, day, status }) => {
  // Left Element
  const iIcon = document.createElement('img')
  iIcon.classList.add('notifyIcon')
  iIcon.src = './src/images/message.png'

  const pUser = document.createElement('p')
  pUser.classList.add('notifyUser')
  pUser.innerHTML = 'Fit Bem'

  const pDay = document.createElement('p')
  pDay.classList.add('notifyDay')
  pDay.innerHTML = FormatDate(day).substring(0, 5)

  const leftRegister = document.createElement('div')
  leftRegister.classList.add('notifyLeftRegister')
  leftRegister.appendChild(iIcon)
  leftRegister.appendChild(pUser)
  leftRegister.appendChild(pDay)

  // Right Element
  const pType = document.createElement('p')
  pType.classList.add('notifyType')
  if (type == 1)
    pType.innerHTML = 'Dica do dia'
  else if (type == 2)
    pType.innerHTML = 'Lembrete'
  else if (type == 3)
    pType.innerHTML = 'Aviso'
  else
    pType.innerHTML = ''

  const pMessage = document.createElement('p')
  pMessage.classList.add('notifyMessage')
  pMessage.innerHTML = message

  const rightRegister = document.createElement('div')
  rightRegister.classList.add('notifyRightRegister')
  rightRegister.appendChild(pType)
  rightRegister.appendChild(pMessage)

  // Register
  const divRegister = document.createElement('div')
  divRegister.classList.add('notifyRegister')
  if (status == 1) {
    divRegister.classList.add('notifyRegisterNoRead')
    divRegister.tag = status
  }
  divRegister.appendChild(leftRegister)
  divRegister.appendChild(rightRegister)

  divRegister.id = 'r' + id

  divRegister.addEventListener('click', () => {
    const divCenter = document.querySelector('.appCenter')
    for (const child of divCenter.children) {
      child.classList.remove('notifyRegisterNoRead')
      if (child.id == 'r' + id)
        child.classList.add('notifyRegisterSelected')
      else {
        child.classList.remove('notifyRegisterSelected')
        if (child.tag == 1)
          child.classList.add('notifyRegisterNoRead')
      }
    }
  })

  return divRegister
}

const baseNotify = (self) => {
  const divCenter = document.createElement('div')
  divCenter.classList.add('appCenter')

  const spinner = document.createElement('div')
  spinner.classList.add('spinner')
  divCenter.appendChild(spinner)

  const appBase = document.querySelector('.appBase')
  appBase.innerHTML = null
  appBase.appendChild(divCenter)

  fetch(_addressAPI + 'notification/' + _userId, { method: 'GET', headers: { "Authorization": "Bearer " + _token } })
    .then(resp => {
      resp.json()
        .then(json => {
          if (json.data) {
            json.data.forEach(e => divCenter.appendChild(_createRecord(e)))
          }
          appBase.innerHTML = null
          appBase.appendChild(divCenter)
        })
    })
    .finally(() => {
      divCenter.style.cssText += `justify-content: start; flex: .98;overflow: scroll;`
      spinner.remove()
    })
}