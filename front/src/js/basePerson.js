const basePerson = (self) => {
  const divCenter = document.createElement('div')
  divCenter.classList.add('appCenter')

  const appBase = document.querySelector('.appBase')
  appBase.innerHTML = null
  appBase.appendChild(divCenter)
}