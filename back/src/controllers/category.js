const connection = require('../database/connection.js')

module.exports = {
  async city(req, res) {
    const data = await connection('city')
      .select(['id', 'description'])
      .distinctOn(['id', 'description'])
      .orderBy('description')
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })
    return res.status(200).json({ data })
  },
  async state(req, res) {
    const data = await connection('city')
      .select(['state'])
      .groupBy('state')
      .orderBy('state')
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })
    return res.status(200).json({ data })
  },
  async specialty(req, res) {
    const data = await connection('category')
      .select('*')
      .where(`type`, 0)
      .orderBy('description')
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })
    return res.status(200).json({ data })
  },
  async kindservice(req, res) {
    const data = await connection('category')
      .select('*')
      .where(`type`, 1)
      .orderBy('description')
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })
    return res.status(200).json({ data })
  },
}