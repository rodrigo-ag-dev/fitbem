
const _filter2 = (self) => {


  const headerFitness = document.querySelector('.headerFitness')

  const filterFitness = document.createElement('div')
  filterFitness.classList.add('filterFitness')
  headerFitness.appendChild(filterFitness)

  const filterFitnessSearch = document.createElement('div')
  filterFitnessSearch.classList.add('filterFitnessSearch')
  filterFitness.appendChild(filterFitnessSearch)

  const searchIcon = document.createElement('span')
  searchIcon.classList.add('searchIconImg')
  filterFitnessSearch.appendChild(searchIcon)

  const inputSearchFitness = document.createElement('input')
  inputSearchFitness.classList.add('inputSearchFitness')
  inputSearchFitness.placeholder = 'Pesquisar por...'
  filterFitnessSearch.appendChild(inputSearchFitness)

  const buttonSearch = document.createElement('button')
  buttonSearch.classList.add('buttonSearch')
  buttonSearch.textContent = 'Buscar'
  filterFitnessSearch.appendChild(buttonSearch)

  // Especialidades
  const selectTipoServico = document.createElement('select')
  selectTipoServico.classList.add('selectTipoServico')
  filterFitness.appendChild(selectTipoServico)

  const optionTipoServico = document.createElement('option')
  optionTipoServico.value = -1
  optionTipoServico.textContent = 'Tipo de serviço'
  selectTipoServico.appendChild(optionTipoServico)

  fetch(_addressAPI + 'kindservice', { method: 'GET', headers: { "Authorization": "Bearer " + _token } })
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
  filterFitness.appendChild(selectCidade)

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
  filterFitness.appendChild(selectEstado)

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

const baseFitness = (self) => {
  notifyHealthCheck()

  const divCenter = document.createElement('div')
  divCenter.classList.add('appCenter')
  divCenter.style.cssText += 'justify-content: unset; flex: .98; flex-direction: row; flex-wrap: wrap;'

  const appBase = document.querySelector('.appBase')
  appBase.innerHTML = null
  appBase.appendChild(divCenter)

  const headerFitness = document.createElement('div')
  headerFitness.classList.add('headerFitness')
  divCenter.appendChild(headerFitness)

  const headerFitnessMain = document.createElement('div')
  headerFitnessMain.classList.add('headerFitnessMain')
  headerFitness.appendChild(headerFitnessMain)

  const headerFitnessTitulo = document.createElement('h1')
  headerFitnessTitulo.textContent = 'Preparadores Físicos'
  headerFitnessMain.appendChild(headerFitnessTitulo)

  const userInfo = document.createElement('div')
  userInfo.classList.add('userInfo')
  headerFitnessMain.appendChild(userInfo)

  const triangle = document.createElement('span')
  triangle.innerHTML = '&#x25bc;'
  userInfo.appendChild(triangle)

  const headerFitnessUsername = document.createElement('h2')
  headerFitnessUsername.innerHTML = _name
  userInfo.appendChild(headerFitnessUsername)

  const imgUser = document.createElement('img')
  imgUser.classList.add('imgUser')
  userInfo.appendChild(imgUser)

  _filter2()

  const spinner = document.createElement('div')
  spinner.classList.add('spinner')
  divCenter.appendChild(spinner)

  fetch(_addressAPI + 'trainer', { method: 'GET', headers: { "Authorization": "Bearer " + _token } })
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