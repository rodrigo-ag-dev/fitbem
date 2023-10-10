const baseHealth = (self) => {
  const divCenter = document.createElement('div')
  divCenter.classList.add('appCenter')
  divCenter.style.cssText += 'justify-content: unset; flex: .98; flex-direction: row; flex-wrap: wrap;'

  const appBase = document.querySelector('.appBase')
  appBase.innerHTML = null
  appBase.appendChild(divCenter)

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