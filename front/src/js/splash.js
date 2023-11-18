var _splashSelectedMenu = null

const createContainer = (elements = []) => {
  var container = document.createElement('div')
  container.classList.add('container')
  container.style.cssText += 'max-height: 75px;'
  elements.forEach(e => {
    e.classList.add('containerChildren')
    container.appendChild(e)
  })

  return container
}

const selectedMenu = (index) => {
  _splashSelectedMenu = index
  const splashOptions = document.querySelector('.splashOptions')
  if (splashOptions && splashOptions.children.length > 0) {
    Object.entries(splashOptions.children).forEach((e, i) => {
      e[1].classList.remove('splashOptionSelected')
      if (index - 1 == i)
        e[1].classList.add('splashOptionSelected')
    })
  }
}

const splashBody = () => {
  const splashBody = document.createElement('div')
  splashBody.classList.add('splashBody')

  splashBody.appendChild(splashMenu())
  splashBody.appendChild(splashDetail())

  const body = document.querySelector('body')
  body.innerHTML = null
  body.appendChild(splashBody)
}


const splashLogo = () => {
  const splashLogo = document.createElement('div')
  splashLogo.classList.add('splashLogo')
  splashLogo.addEventListener('click', slogan)
  return splashLogo
}

const splashMenu = () => {
  const splashOptions = document.createElement('div')
  splashOptions.classList.add('splashOptions')

  const splashMenu = document.createElement('div')
  splashMenu.classList.add('splashMenu')
  splashMenu.appendChild(splashLogo())
  splashMenu.appendChild(splashOptions)

  splashOptions.appendChild(createButton('Sobre Nós', splashAbout))
  splashOptions.appendChild(createButton('Contato', splashContact))
  splashOptions.appendChild(createButton('Cadastro', splashRegister))
  splashOptions.appendChild(createButton('Login', splashLogin))

  return splashMenu
}

const splashDetail = () => {
  const splashDetail = document.createElement('div')
  splashDetail.classList.add('splashDetail')

  return splashDetail
}

const splashSlogan = () => {
  selectedMenu(null)

  const sloganTitle = document.createElement('p')
  sloganTitle.classList.add('sloganTitle')
  sloganTitle.innerHTML = 'CONEXÃO SAUDÁVEL:'

  const sloganText = document.createElement('p')
  sloganText.classList.add('sloganText')
  sloganText.innerHTML = 'Seu Parceiro na busca pelo Bem-Estar'

  const splashSlogan = document.createElement('div')
  splashSlogan.classList.add('splashSlogan')
  splashSlogan.appendChild(sloganTitle)
  splashSlogan.appendChild(sloganText)
  splashSlogan.appendChild(createButton('CADASTRE-SE', () => splashRegister(), 'sloganButton'))

  return splashSlogan
}

const splashAbout = () => {
  selectedMenu(1)

  const footerTitle1 = document.createElement('p')
  footerTitle1.classList.add('footerTitle')
  footerTitle1.innerHTML = `<img src="./src/images/calc.png" alt="">
                            <p>CALCULADORA IMC COM HISTÓRICO</p>`

  const footerText1 = document.createElement('p')
  footerText1.classList.add('footerText')
  footerText1.innerHTML = `Oferecemos uma calculadora de IMC fácil de usar com histórico para rastrear seu progresso em direção ao peso ideal ao longo do tempo.`

  const aboutFooterLeft = document.createElement('div')
  aboutFooterLeft.classList.add('aboutFooterDiv')
  aboutFooterLeft.appendChild(footerTitle1)
  aboutFooterLeft.appendChild(footerText1)

  const footerTitle2 = document.createElement('p')
  footerTitle2.classList.add('footerTitle')
  footerTitle2.innerHTML = `<img src="./src/images/profissional.png" alt="">
                            <p>ACESSO A PROFISSIONAIS DE SAÚDE</p>`

  const footerText2 = document.createElement('p')
  footerText2.classList.add('footerText')
  footerText2.innerHTML = `Conexão direta a uma equipe diversificada de profissionais de saúde, incluindo médicos especializados, nutricionistas e personal trainers.`

  const aboutFooterRight = document.createElement('div')
  aboutFooterRight.classList.add('aboutFooterDiv')
  aboutFooterRight.style.cssText += 'background-color: #236678';
  aboutFooterRight.appendChild(footerTitle2)
  aboutFooterRight.appendChild(footerText2)

  const aboutFooter = document.createElement('div')
  aboutFooter.classList.add('aboutFooter')
  aboutFooter.appendChild(aboutFooterLeft)
  aboutFooter.appendChild(aboutFooterRight)

  const aboutName = document.createElement('p')
  aboutName.classList.add('aboutDetailName')
  aboutName.innerHTML = 'Fit Bem'

  const aboutTitle = document.createElement('p')
  aboutTitle.classList.add('aboutDetailTitle')
  aboutTitle.innerHTML = 'SUA JORNADA PARA UMA VIDA MAIS SAUDÁVEL'

  const aboutText = document.createElement('p')
  aboutText.classList.add('aboutDetailText')
  aboutText.innerHTML = 'Nossa missão é te ajudar a transformar seus objetivos de bem-estar em realidade.'

  const about1 = document.createElement('div')
  about1.classList.add('about1')
  about1.appendChild(aboutName)
  about1.appendChild(aboutTitle)
  about1.appendChild(aboutText)

  const about2 = document.createElement('div')
  about2.classList.add('about2')

  const aboutDetail = document.createElement('div')
  aboutDetail.classList.add('aboutDetail')
  aboutDetail.appendChild(about1)
  aboutDetail.appendChild(about2)

  const aboutBody = document.createElement('div')
  aboutBody.classList.add('aboutBody')
  aboutBody.appendChild(aboutDetail)
  aboutBody.appendChild(aboutFooter)

  const splashDetail = document.querySelector('.splashDetail')
  splashDetail.style.cssText += "background-image: unset;"
  splashDetail.innerHTML = null
  splashDetail.appendChild(aboutBody)
}

const slogan = () => {
  const splashDetail = document.querySelector('.splashDetail')
  splashDetail.style.cssText += `background-image: url('./src/images/wallpaper.jpg'); 
                                 background-repeat: no-repeat;
                                 background-size: cover;');
                                `
  splashDetail.innerHTML = null
  splashDetail.appendChild(splashSlogan())
}

const formCreate = (title, text = [], children = null) => {
  const logo = document.createElement('div')
  logo.classList.add('logo')

  const pTitle = document.createElement('p')
  pTitle.classList.add('title')
  pTitle.innerHTML = title

  const screenTop = document.createElement('div')
  screenTop.classList.add('screenTop')
  screenTop.appendChild(logo)
  screenTop.appendChild(pTitle)

  text.forEach(e => {
    const pText = document.createElement('p')
    pText.classList.add('text')
    pText.innerHTML = e
    screenTop.appendChild(pText)
  })

  const screenBottom = document.createElement('div')
  screenBottom.classList.add('screenBottom')

  const screen = document.createElement('div')
  screen.appendChild(screenTop)
  screen.appendChild(screenBottom)

  if (children)
    children(screen)

  return screen
}

const screenCreate = () => {
  const screenLeft = document.createElement('div')
  screenLeft.classList.add('screenLeft')

  const screenRight = document.createElement('div')
  screenRight.classList.add('screenRight')

  const screen = document.createElement('div')
  screen.classList.add('screen')
  screen.appendChild(screenLeft)
  screen.appendChild(screenRight)

  const splashDetail = document.querySelector('.splashDetail')
  splashDetail.style.cssText += "background-image: unset;"
  splashDetail.innerHTML = null
  splashDetail.appendChild(screen)
}

const splashContact = () => {
  selectedMenu(2)
  screenCreate()

  formCreate('Fale com a gente',
    [],
    (form) => {
      const name = createInput('Nome', null, null, 'margin-bottom-minimal')
      const email = createInput('E-mail', 'email', null, 'margin-bottom-minimal')
      const phone = createInput('Telefone', null, null, 'margin-bottom-minimal')
      const message = createText('Mensagem', null, 'margin-bottom-minimal', 'height: 170px')

      const send = createButton('Enviar', null, 'formButton')

      const screenBottom = form.querySelector('.screenBottom')
      screenBottom.appendChild(name)
      screenBottom.appendChild(email)
      screenBottom.appendChild(phone)
      screenBottom.appendChild(message)
      screenBottom.appendChild(send)

      const screenLeft = document.querySelector('.screenLeft')
      screenLeft.classList.add('contato')

      const screenRight = document.querySelector('.screenRight')
      screenRight.classList.add('screen')
      screenRight.appendChild(form)

      name.focus()
    })

}

const register = async (name, lastname, phone, gender, weight, height, email, pass1, pass2) => {
  const _body = JSON.stringify({
    name: name.value,
    lastname: lastname.value,
    phone: phone.value,
    gender: gender.value,
    weight: weight.value,
    height: height.value,
    email: email.value,
    password: pass1.value
  })

  if (pass1.value != pass2.value)
    throw 'As senhas estão diferentes!'
  try {
    const resp = await fetchWithTimeout(_addressAPI + 'user', { method: 'POST', headers: { body: _body } })
    if (resp && resp.status == 200) {
      name.value = ''
      lastname.value = ''
      phone.value = ''
      gender.value = 'M'
      weight.value = ''
      height.value = ''
      email.value = ''
      pass1.value = ''
      pass2.value = ''
      splashLogin()
    } else {
      console.log(resp)
      createMessage('Ocorreu um erro ao cadastrar esse usuário, tente novamente mais tarde!', 'error')
    }
  }
  catch (e) {
    createMessage(e, 'error')
  }
}

const splashRegister = () => {
  selectedMenu(3)
  screenCreate()

  formCreate(
    'Crie sua conta',
    [],
    (form) => {
      const name = createContainer(
        [
          createInput('Nome', null, null, 'margin-bottom-minimal'),
          createInput('Sobrenome', null, null, 'margin-bottom-minimal')
        ]
      )

      const data = createContainer(
        [
          createInput('Telefone', null, null, 'margin-bottom-minimal'),
          createCombo('Sexo', [{ value: '0', text: 'Masculino' }, { value: '1', text: 'Feminino' }])
        ]
      )

      const weightHeight = createContainer(
        [
          createInput('Peso', null, null, 'margin-bottom-minimal'),
          createInput('Altura', null, null, 'margin-bottom-minimal')
        ]
      )

      const user = createInput('E-mail', 'email', null, 'margin-bottom-minimal')
      const pass1 = createInput('Senha', 'password', null, 'margin-bottom-minimal')
      const pass2 = createInput('Repita a senha', 'password', null, 'margin-bottom-minimal')

      const registerButton = createButton('Cadastrar',
        () => {
          try {
            register(
              name.children[0],
              name.children[1],
              data.children[0],
              data.children[1],
              weightHeight.children[0],
              weightHeight.children[1],
              user,
              pass1,
              pass2
            )
          }
          catch (e) {
            createMessage(e, 'error')
          }
        },
        'formButton'
      )

      const screenBottom = form.querySelector('.screenBottom')
      screenBottom.appendChild(name)
      screenBottom.appendChild(data)
      screenBottom.appendChild(weightHeight)
      screenBottom.appendChild(user)
      screenBottom.appendChild(pass1)
      screenBottom.appendChild(pass2)
      screenBottom.appendChild(registerButton)

      const screenLeft = document.querySelector('.screenLeft')
      screenLeft.appendChild(form)

      const screenRight = document.querySelector('.screenRight')
      screenRight.classList.add('cadastro')

      name.children[0].focus()
    }
  )
}

const splashLogin = () => {
  selectedMenu(4)
  screenCreate()

  formCreate(
    'Login',
    [
      'Informe seus dados de acesso',
      'Não possui uma conta? <a href="#" onclick="javascript:return splashRegister()">Cadastre-se</a>'
    ],
    (form) => {
      const user = createInput('E-mail', 'email', './src/images/mail.png')
      const pass = createInput('Senha', 'password', './src/images/lock.png')
      const enter = createButton('Entrar',
        () => {
          const screenBottom = form.querySelector('.screenBottom')
          login({ email: screenBottom.children[0].value, password: screenBottom.children[1].value })
            .then(ok => {
              if (ok) appBody()
            })
        },
        'formButton'
      )

      const pForgot = document.createElement('p')
      pForgot.classList.add('forget')
      pForgot.innerHTML = 'Esqueceu a senha?'

      const screenBottom = form.querySelector('.screenBottom')
      screenBottom.appendChild(user)
      screenBottom.appendChild(pass)
      screenBottom.appendChild(pForgot)
      screenBottom.appendChild(enter)

      const screenLeft = document.querySelector('.screenLeft')
      screenLeft.appendChild(form)

      const screenRight = document.querySelector('.screenRight')
      screenRight.classList.add('login')

      user.focus()
    }
  )
}

const login = async ({ email, password }, prop) => {
  const loading = document.createElement('div')
  loading.classList.add('loading')

  const body = document.querySelector('body')
  body.appendChild(loading)

  var ok = false;

  try {
    const resp = await fetchWithTimeout(_addressAPI + 'session', { method: 'POST', headers: { email, password } })
    if (resp) {
      const data = await resp.json()
      if (resp.status >= 400)
        throw data.error

      if (data && data.token) {
        _name = data.reg.name
        _email = data.reg.email
        _userId = data.reg.id
        _token = data.token
        _weight = data.reg.weight
        _height = data.reg.height
        _bmi = (_weight / ((_height / 100) * (_height / 100))).toFixed(2)

        localStorage.setItem('name', _name)
        localStorage.setItem('email', _email)
        localStorage.setItem('userID', _userId)
        localStorage.setItem('token', _token)
        localStorage.setItem('weight', _weight)
        localStorage.setItem('height', _height)
        localStorage.setItem('bmi', _bmi)
        ok = true
      }
    } else {
      createMessage('Erro de conexão.\nTente novamente mais tarde!', 'error')
    }
  } catch (e) {
    createMessage(e, 'error')
  } finally {
    loading.remove()
  }
  return ok
}