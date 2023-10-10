const connection = require('../database/connection.js')

module.exports = {
  async index(req, res) {
    const { id } = req.params
    const data = await connection('professional')
      .select('*')
      .where(`id`, id)

    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })
    return res.status(200).json({ data })
  },
  async get(req, res) {
    const { text, category, city, state } = req.query
    var data = null
    var where = ''
    if (text)
      where = connection.raw(`(LOWER(professional.description) like '%${text.toLowerCase()}%' or LOWER(professional.specialty) like '%${text.toLowerCase()}%')`)

    if (category) {
      if (where)
        where += ' and '
      where += connection.raw(`professional.idcategory = ${category}`)
    }

    if (city) {
      if (where)
        where += ' and '
      where += connection.raw(`professional.idcity = ${city}`)
    }

    if (state) {
      if (where)
        where += ' and '
      where += connection.raw(`LOWER(city.state) = '${state.toLowerCase()}'`)
    }

    if (where) {
      data = await connection('category')
        .select(['professional.*', connection.raw(`city.description ||' / '|| city.state as city`), connection.raw('category.description as category')])
        .join('professional', 'category.id', 'professional.idcategory')
        .join('city', 'professional.idcity', 'city.id')
        .where('category.type', '1')
        .whereRaw(where)
    } else {
      data = await connection('category')
        .select(['professional.*', connection.raw(`city.description ||' / '|| city.state as city`), connection.raw('category.description as category')])
        .join('professional', 'category.id', 'professional.idcategory')
        .join('city', 'professional.idcity', 'city.id')
        .where('category.type', '1')
    }
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })
    return res.status(200).json({ data })
  }
}