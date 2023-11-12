const _filter = (self) => {
  const headerHealth = document.querySelector('.headerHealth')

  const filterHealth = document.createElement('div')
  filterHealth.classList.add('filterHealth')
  headerHealth.appendChild(filterHealth)

  const filterHealthSearch = document.createElement('div')
  filterHealthSearch.classList.add('filterHealthSearch')
  filterHealth.appendChild(filterHealthSearch)

  const searchIcon = document.createElement('span')
  searchIcon.classList.add('searchIconImg')
  filterHealthSearch.appendChild(searchIcon)

  const inputSearchHealth = document.createElement('input')
  inputSearchHealth.classList.add('inputSearchHealth')
  inputSearchHealth.placeholder = 'Pesquisar por...'
  filterHealthSearch.appendChild(inputSearchHealth)

  const buttonSearch = document.createElement('button')
  buttonSearch.classList.add('buttonSearch')
  buttonSearch.textContent = 'Buscar'
  filterHealthSearch.appendChild(buttonSearch)

  // Especialidades
  const selectEspecialidade = document.createElement('select')
  selectEspecialidade.classList.add('selectEspecialidade')
  filterHealth.appendChild(selectEspecialidade)

  const optionEspecialidade = document.createElement('option')
  optionEspecialidade.value = -1
  optionEspecialidade.textContent = 'Especialidade'
  selectEspecialidade.appendChild(optionEspecialidade)

  fetch(_addressAPI + 'specialty', { method: 'GET', headers: { "Authorization": "Bearer " + _token } })
    .then(resp => {
      resp.json()
        .then(json => {
          if (json.data) {
            for (i in json.data) {
              const option = document.createElement('option')
              option.value = json.data[i].id
              option.textContent = json.data[i].description
              selectEspecialidade.appendChild(option)
            }
          }
        })
    })

  // Cidades
  const selectCidade = document.createElement('select')
  selectCidade.classList.add('selectCidade')
  filterHealth.appendChild(selectCidade)

  const optionCidade = document.createElement('option')
  optionCidade.value = 0
  optionCidade.textContent = 'Cidade'
  selectCidade.appendChild(optionCidade)

  fetch(_addressAPI + 'city', { method: 'GET', headers: { "Authorization": "Bearer " + _token } })
    .then(resp => {
      resp.json()
        .then(json => {
          if (json.data) {
            for (i in json.data) {
              const option = document.createElement('option')
              option.value = json.data[i].id
              option.textContent = json.data[i].description
              selectCidade.appendChild(option)
            }
          }
        })
    })

  // Estados
  const selectEstado = document.createElement('select')
  selectEstado.classList.add('selectEstado')
  filterHealth.appendChild(selectEstado)

  const optionEstado = document.createElement('option')
  optionEstado.textContent = 'Estado'
  optionEstado.value = 'Estado'
  selectEstado.appendChild(optionEstado)

  fetch(_addressAPI + 'state', { method: 'GET', headers: { "Authorization": "Bearer " + _token } })
    .then(resp => {
      resp.json()
        .then(json => {
          if (json.data) {
            for (i in json.data) {
              const option = document.createElement('option')
              option.value = json.data[i].state
              option.textContent = json.data[i].state
              selectEstado.appendChild(option)
            }
          }
        })
    })
}

const baseHealth = (self) => {
  notifyHealthCheck()

  const divCenter = document.createElement('div')
  divCenter.classList.add('appCenter')
  divCenter.style.cssText += 'justify-content: unset; flex: .98; flex-direction: row; flex-wrap: wrap;'

  const appBase = document.querySelector('.appBase')
  appBase.innerHTML = null
  appBase.appendChild(divCenter)

  const headerHealth = document.createElement('div')
  headerHealth.classList.add('headerHealth')
  divCenter.appendChild(headerHealth)

  const headerHealthMain = document.createElement('div')
  headerHealthMain.classList.add('headerHealthMain')
  headerHealth.appendChild(headerHealthMain)

  const headerHealthTitulo = document.createElement('h1')
  headerHealthTitulo.textContent = 'Profissionais da Saúde'
  headerHealthMain.appendChild(headerHealthTitulo)

  const userInfo = document.createElement('div')
  userInfo.classList.add('userInfo')
  headerHealthMain.appendChild(userInfo)

  const triangle = document.createElement('span')
  triangle.innerHTML = '&#x25bc;'
  userInfo.appendChild(triangle)

  const headerHealthUsername = document.createElement('h2')
  headerHealthUsername.innerHTML = _name
  userInfo.appendChild(headerHealthUsername)

  const imgUser = document.createElement('img')
  imgUser.classList.add('imgUser')
  userInfo.appendChild(imgUser)

  const spinner = document.createElement('div')
  spinner.classList.add('spinner')
  divCenter.appendChild(spinner)

  _filter()

  fetch(_addressAPI + 'health', { method: 'GET', headers: { "Authorization": "Bearer " + _token } })
    .then(resp => {
      resp.json()
        .then(json => {
          if (json.data) {
            json.data.forEach(e => {
              divCenter.appendChild(
                createCardProfessional({
                  image: '',
                  name: e.description,
                  city: e.city,
                  phone: e.whatsapp,
                  specialty: e.specialty,
                  category: e.category
                })
              )
            })
          }
          appBase.innerHTML = null
          appBase.appendChild(divCenter)
        })
    })
    .finally(() => {
      spinner.remove()
    })
}