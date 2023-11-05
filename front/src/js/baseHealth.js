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

  const selectEspecialidade = document.createElement('select')
  selectEspecialidade.classList.add('selectEspecialidade')
  filterHealth.appendChild(selectEspecialidade)

  const option1Especialidade = document.createElement('option')
  option1Especialidade.textContent = 'Especialidade'
  option1Especialidade.value = 'Especialidade'
  selectEspecialidade.appendChild(option1Especialidade)

  const option2Especialidade = document.createElement('option')
  option2Especialidade.textContent = 'Cardiologista'
  option2Especialidade.value = 'Cardiologista'
  selectEspecialidade.appendChild(option2Especialidade)

  const option3Especialidade = document.createElement('option')
  option3Especialidade.textContent = 'Dermatologista'
  option3Especialidade.value = 'Dermatologista'
  selectEspecialidade.appendChild(option3Especialidade)

  const option4Especialidade = document.createElement('option')
  option4Especialidade.textContent = 'Endocrinologista'
  option4Especialidade.value = 'Endocrinologista'
  selectEspecialidade.appendChild(option4Especialidade)

  const selectCidade = document.createElement('select')
  selectCidade.classList.add('selectCidade')
  filterHealth.appendChild(selectCidade)

  const option1Cidade = document.createElement('option')
  option1Cidade.textContent = 'Cidade'
  option1Cidade.value = 'Cidade'
  selectCidade.appendChild(option1Cidade)

  const option2Cidade = document.createElement('option')
  option2Cidade.textContent = 'São Paulo'
  option2Cidade.value = 'São Paulo'
  selectCidade.appendChild(option2Cidade)

  const selectEstado = document.createElement('select')
  selectEstado.classList.add('selectEstado')
  filterHealth.appendChild(selectEstado)

  const option1Estado = document.createElement('option')
  option1Estado.textContent = 'Estado'
  option1Estado.value = 'Estado'
  selectEstado.appendChild(option1Estado)

  const option2Estado = document.createElement('option')
  option2Estado.textContent = 'SP'
  option2Estado.value = 'SP'
  selectEstado.appendChild(option2Estado)

  const spinner = document.createElement('div')
  spinner.classList.add('spinner')
  divCenter.appendChild(spinner)

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