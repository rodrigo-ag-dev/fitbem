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
    const { text } = req.query
    var data = null
    if (text) {
      data = await connection('category')
        .select(['professional.*', connection.raw(`city.description ||' / '|| city.state as city`), connection.raw('category.description as category')])
        .join('professional', 'category.id', 'professional.idcategory')
        .join('city', 'professional.idcity', 'city.id')
        .where('category.type', '0')
        .where((wb) =>
          wb.where(connection.raw(`LOWER(description)`), `like`, `%${text.toLowerCase()}%`)
            .orWhere(connection.raw(`LOWER(specialty)`), `like`, `%${text.toLowerCase()}%`)
        )
    } else {
      data = await connection('category')
        .select(['professional.*', connection.raw(`city.description ||' / '|| city.state as city`), connection.raw('category.description as category')])
        .join('professional', 'category.id', 'professional.idcategory')
        .join('city', 'professional.idcity', 'city.id')
        .where('category.type', '0')
    }
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })
    return res.status(200).json({ data })
  }
}