var _menuArray = []

const menuSelected = (mnSel) => {
  _menuArray.forEach((e, i) => {
    if (e.index == mnSel)
      e.classList.add('iconButtonSel')
    else
      e.classList.remove('iconButtonSel')
  })
}

const appDetail = () => {
  _menuArray = []

  const divisor1 = document.createElement('biv')
  divisor1.classList.add('menuDivisor')

  const divisor2 = document.createElement('biv')
  divisor2.classList.add('menuDivisor')

  const imgLogo = document.createElement('img')
  imgLogo.style.cssText += 'width: 3.2em; height: 2.9em; margin: 1.2rem;'
  imgLogo.src = './src/images/logowhite.png'

  const btnIndex = createIconButton(
    {
      icon: './src/images/index.png',
      onClick: (self) => baseIndex(self),
      defaultMenu: true
    }
  )

  const btnHealth = createIconButton(
    {
      icon: './src/images/health.png',
      onClick: (self) => baseHealth(self)
    }
  )

  const btnFitness = createIconButton(
    {
      icon: './src/images/fitness.png',
      onClick: (self) => baseFitness(self)
    }
  )

  const btnPerson = createIconButton(
    {
      icon: './src/images/person.png',
      onClick: (self) => basePerson(self)
    }
  )

  const btnNotify = createIconButton(
    {
      icon: './src/images/notify.png',
      onClick: (self) => baseNotify(self),
      id: 'btnNotify'
    }
  )

  const btnExit = createIconButton(
    {
      icon: './src/images/exit.png',
      onClick: (self) => {
        Swal.fire({
          title: 'Tem certeza que deseja sair?',
          type: 'question',
          showCancelButton: true,
          customClass: 'customCalss',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não'
        }).then((result) => {
          if (result.value) {
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            localStorage.removeItem('userID')
            localStorage.removeItem('token')
            load()
          }
        })
      },
      noSelected: true
    }
  )

  const divLeft = document.createElement('div')
  divLeft.classList.add('appLeft')
  divLeft.appendChild(imgLogo)
  divLeft.appendChild(divisor1)
  divLeft.appendChild(btnIndex)
  divLeft.appendChild(btnHealth)
  divLeft.appendChild(btnFitness)
  divLeft.appendChild(btnPerson)
  divLeft.appendChild(btnNotify)
  divLeft.appendChild(divisor2)
  divLeft.appendChild(btnExit)

  const divBase = document.createElement('div')
  divBase.classList.add('appBase')

  const appDetail = document.createElement('div')
  appDetail.classList.add('appDetail')
  appDetail.appendChild(divLeft)
  appDetail.appendChild(divBase)

  return appDetail
}

const appBody = () => {
  const appBody = document.createElement('div')
  appBody.classList.add('appBody')
  try {
    appBody.appendChild(appDetail())
  } finally {
    const body = document.querySelector('body')
    body.innerHTML = null
    body.appendChild(appBody)
    baseIndex(_menuArray[0])
  }
}