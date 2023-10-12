const _addressAPI = 'http://localhost:3333/api/'
//const _addressAPI = 'https://serverfitbem.vercel.app/api/'
var _token = null
var _name = null
var _email = null
var _userId = null
var _bmi = 0
var _height = 0
var _weight = 0

const BMICalc = (weight, height) => {
  const calc = (weight / (height ? ((height / 100) * (height / 100)) : 1))
  return calc.toFixed(2)
}

const BMIStatus = (bmi) => {
  if (bmi <= 18.5)
    return "Magreza"
  if (bmi <= 24.9)
    return "Saudável"
  if (bmi <= 29.9)
    return "Sobrepeso"
  if (bmi <= 34.9)
    return "Obesidade Grau I"
  if (bmi <= 39.9)
    return "Obesidade Grau II"
  else
    return "Obesidade Grau III"
}

const idealWeight = (height) => {
  if (height <= 155) return '44-58'
  if (height >= 156 && height <= 160) return '47 - 61'
  if (height >= 161 && height <= 165) return '50 - 65'
  if (height >= 166 && height <= 170) return '54 - 69'
  if (height >= 171 && height <= 175) return '57 - 74'
  if (height >= 176 && height <= 180) return '60 - 78'
  if (height >= 181 && height <= 185) return '64 - 83'
  if (height >= 186 && height <= 190) return '67 - 87'
  if (height >= 191) return '	71 - 89'
}

const MonthFrom = (index) => {
  return _month[_lang][index - 1]
}

const pad = (num, size) => {
  num = num.toString()
  while (num.length < size) num = "0" + num
  return num
}

const FormatDate = (date) => {
  const dt = new Date(date)
  if (dt)
    return `${pad(dt.getDate(), 2)}/${pad(dt.getMonth(), 2)}/${dt.getFullYear()}`
}

const fetchWithTimeout = async (resource, options = {}) => {
  var id = null
  var response = null
  try {
    try {
      const { timeout = 8000 } = options
      const controller = new AbortController()
      id = setTimeout(() => controller.abort(), timeout)
      response = await fetch(resource, { ...options, signal: controller.signal })
    } catch (e) {
      return e
    }
  } finally {
    if (id)
      clearTimeout(id)
    return response
  }
}

const createMessage = (text, type) => {
  var idTimer = null
  try {
    const alert = document.createElement('div')
    alert.classList.add(type)

    const span = document.createElement('span')
    span.classList.add('closebtn')
    span.addEventListener('click', () => { alert.remove() })
    span.innerHTML = 'X'

    const strong = document.createElement('strong')
    strong.innerHTML = 'Aviso!'

    const p = document.createElement('p')
    p.innerHTML = text

    alert.appendChild(strong)
    alert.appendChild(p)
    alert.appendChild(span)

    const body = document.querySelector('body')
    body.appendChild(alert)

    idTimer = setTimeout(() => alert.remove(), 3500)
  } catch {
    if (idTimer) clearTimeout(idTimer)
  }
}