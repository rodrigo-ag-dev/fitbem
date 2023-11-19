const _dados = (self) => {
  const personMain = document.querySelector('.personMain')

  const foto = document.createElement('div')
  foto.classList.add('foto')
  personMain.appendChild(foto)

  const camera = document.createElement('span')
  camera.classList.add('camera')
  foto.appendChild(camera)

  const editIcon = document.createElement('span')
  editIcon.classList.add('editIcon')
  personMain.appendChild(editIcon)

  const linha1 = document.createElement('div')
  linha1.classList.add('linha')
  personMain.appendChild(linha1)

  const campo1 = document.createElement('div')
  campo1.classList.add('campo')
  linha1.appendChild(campo1)

  const labelNome = document.createElement('label')
  labelNome.textContent = 'Nome:'
  labelNome.classList.add('label')
  campo1.appendChild(labelNome)

  const inputNome = document.createElement('input')
  inputNome.classList.add('inputNome')
  inputNome.placeholder = _name
  campo1.appendChild(inputNome)

  const campo2 = document.createElement('div')
  campo2.classList.add('campo')
  linha1.appendChild(campo2)

  const labelSobrenome = document.createElement('label')
  labelSobrenome.textContent = 'Sobrenome:'
  labelSobrenome.classList.add('label')
  campo2.appendChild(labelSobrenome)

  const inputSobrenome = document.createElement('input')
  inputSobrenome.classList.add('inputNome')
  //inputSobrenome.placeholder = _lastname
  campo2.appendChild(inputSobrenome)

  const linha2 = document.createElement('div')
  linha2.classList.add('linha')
  linha2.style.cssText += 'margin-bottom: 30px'
  personMain.appendChild(linha2)

  const campo3 = document.createElement('div')
  campo3.classList.add('campo')
  linha2.appendChild(campo3)

  const labelEmail = document.createElement('label')
  labelEmail.textContent = 'E-mail:'
  labelEmail.classList.add('label')
  campo3.appendChild(labelEmail)

  const inputEmail = document.createElement('input')
  inputEmail.classList.add('inputEmail')
  inputEmail.placeholder = _email
  campo3.appendChild(inputEmail)

  const campo4 = document.createElement('div')
  campo4.classList.add('campo')
  linha2.appendChild(campo4)

  const labelTelefone = document.createElement('label')
  labelTelefone.textContent = 'Telefone:'
  labelTelefone.classList.add('label')
  campo4.appendChild(labelTelefone)

  const inputTelefone = document.createElement('input')
  inputTelefone.classList.add('inputTelefone')
  //inputTelefone.placeholder = _phone
  campo4.appendChild(inputTelefone)

  const linha3 = document.createElement('div')
  linha3.classList.add('linha')
  personMain.appendChild(linha3)

  const campo5 = document.createElement('div')
  campo5.classList.add('campo')
  linha3.appendChild(campo5)

  const labelLogradouro = document.createElement('label')
  labelLogradouro.textContent = 'Logradouro:'
  labelLogradouro.classList.add('label')
  campo5.appendChild(labelLogradouro)

  const inputLogradouro = document.createElement('input')
  inputLogradouro.classList.add('inputLogradouro')
  campo5.appendChild(inputLogradouro)

  const campo6 = document.createElement('div')
  campo6.classList.add('campo')
  linha3.appendChild(campo6)

  const labelNumero = document.createElement('label')
  labelNumero.textContent = 'Número:'
  labelNumero.classList.add('label')
  campo6.appendChild(labelNumero)

  const inputNumero = document.createElement('input')
  inputNumero.classList.add('inputNumero')
  inputNumero.style.cssText += 'width: 100px'
  campo6.appendChild(inputNumero)

  const campo7 = document.createElement('div')
  campo7.classList.add('campo')
  linha3.appendChild(campo7)

  const labelCep = document.createElement('label')
  labelCep.textContent = 'Cep:'
  labelCep.classList.add('label')
  campo7.appendChild(labelCep)

  const inputCep = document.createElement('input')
  inputCep.classList.add('inputCep')
  inputCep.style.cssText += 'width: 100px'
  campo7.appendChild(inputCep)

  const linha4 = document.createElement('div')
  linha4.classList.add('linha')
  linha4.style.cssText += 'margin-bottom: 30px'
  personMain.appendChild(linha4)

  const campo8 = document.createElement('div')
  campo8.classList.add('campo')
  linha4.appendChild(campo8)

  const labelBairro = document.createElement('label')
  labelBairro.textContent = 'Bairro:'
  labelBairro.classList.add('label')
  campo8.appendChild(labelBairro)

  const inputBairro = document.createElement('input')
  inputBairro.classList.add('inputBairro')
  inputBairro.style.cssText += 'width: 200px'
  campo8.appendChild(inputBairro)

  const campo9 = document.createElement('div')
  campo9.classList.add('campo')
  linha4.appendChild(campo9)

  const labelCidade = document.createElement('label')
  labelCidade.textContent = 'Cidade:'
  labelCidade.classList.add('label')
  campo9.appendChild(labelCidade)

  const inputCidade = document.createElement('input')
  inputCidade.classList.add('inputCidade')
  inputCidade.style.cssText += 'width: 200px'
  campo9.appendChild(inputCidade)

  const campo10 = document.createElement('div')
  campo10.classList.add('campo')
  linha4.appendChild(campo10)

  const labelEstado = document.createElement('label')
  labelEstado.textContent = 'Estado:'
  labelEstado.classList.add('label')
  campo10.appendChild(labelEstado)

  const inputEstado = document.createElement('input')
  inputEstado.classList.add('inputEstado')
  inputEstado.style.cssText += 'width: 100px'
  campo10.appendChild(inputEstado)

  const linha5 = document.createElement('div')
  linha5.classList.add('linha')
  personMain.appendChild(linha5)

  const campo11 = document.createElement('div')
  campo11.classList.add('campo')
  linha5.appendChild(campo11)

  const labelPeso = document.createElement('label')
  labelPeso.textContent = 'Peso:'
  labelPeso.classList.add('label')
  campo11.appendChild(labelPeso)

  const inputPeso = document.createElement('input')
  inputPeso.classList.add('inputPeso')
  inputPeso.placeholder = _weight
  inputPeso.style.cssText += 'width: 100px'
  campo11.appendChild(inputPeso)

  const campo12 = document.createElement('div')
  campo12.classList.add('campo')
  linha5.appendChild(campo12)

  const labelAltura = document.createElement('label')
  labelAltura.textContent = 'Altura:'
  labelAltura.classList.add('label')
  campo12.appendChild(labelAltura)

  const inputAltura = document.createElement('input')
  inputAltura.classList.add('inputAltura')
  inputAltura.placeholder = _height
  inputAltura.style.cssText += 'width: 100px'
  campo12.appendChild(inputAltura)

  const campo13 = document.createElement('div')
  campo13.classList.add('campo')
  linha5.appendChild(campo13)

  const labelSexo = document.createElement('label')
  labelSexo.textContent = 'Sexo:'
  labelSexo.classList.add('label')
  campo13.appendChild(labelSexo)

  const selectSexo = document.createElement('select')
  selectSexo.classList.add('selectSexo')
  campo13.appendChild(selectSexo)

  const option1Sexo = document.createElement('option')
  option1Sexo.value = 0
  option1Sexo.textContent = 'Selecione'
  selectSexo.appendChild(option1Sexo)

  const option2Sexo = document.createElement('option')
  option2Sexo.value = 1
  option2Sexo.textContent = 'Feminino'
  selectSexo.appendChild(option2Sexo)
  
  const option3Sexo = document.createElement('option')
  option3Sexo.value = 2
  option3Sexo.textContent = 'Masculino'
  selectSexo.appendChild(option3Sexo)

  const campo14 = document.createElement('div')
  campo14.classList.add('campo')
  linha5.appendChild(campo14)

  const labelDataNascimento = document.createElement('label')
  labelDataNascimento.textContent = 'Data de Nascimento:'
  labelDataNascimento.classList.add('label')
  campo14.appendChild(labelDataNascimento)

  const inputDataNascimento = document.createElement('input')
  inputDataNascimento.classList.add('inputDataNascimento')
  //inputDataNascimento.placeholder = _
  inputDataNascimento.style.cssText += 'width: 150px'
  campo14.appendChild(inputDataNascimento)

}

const basePerson = (self) => {
  notifyHealthCheck()
  
  const divCenter = document.createElement('div')
  divCenter.classList.add('appCenter')
  divCenter.style.cssText += 'justify-content: unset; flex: .98; flex-direction: row; flex-wrap: wrap;'

  const appBase = document.querySelector('.appBase')
  appBase.innerHTML = null
  appBase.appendChild(divCenter)

  const headerPerson = document.createElement('div')
  headerPerson.classList.add('headerPerson')
  divCenter.appendChild(headerPerson)

  const headerPersonMain = document.createElement('div')
  headerPersonMain.classList.add('headerPersonMain')
  headerPerson.appendChild(headerPersonMain)

  const headerPersonTitulo = document.createElement('h1')
  headerPersonTitulo.textContent = 'Meus Dados'
  headerPersonMain.appendChild(headerPersonTitulo)

  const userInfo = document.createElement('div')
  userInfo.classList.add('userInfo')
  headerPersonMain.appendChild(userInfo)

  const triangle = document.createElement('span')
  triangle.innerHTML = '&#x25bc;'
  userInfo.appendChild(triangle)

  const headerPersonUsername = document.createElement('h2')
  headerPersonUsername.innerHTML = _name
  userInfo.appendChild(headerPersonUsername)

  const imgUser = document.createElement('img')
  imgUser.classList.add('imgUser')
  userInfo.appendChild(imgUser)

  const personMain = document.createElement('div')
  personMain.classList.add('personMain')
  personMain.style.cssText += 'justify-content: unset; flex: .98;'

  divCenter.appendChild(personMain)

  _dados()

}