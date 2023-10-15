const connection = require('../database/connection.js')

module.exports = {
  async index(req, res) {
    const { iduser } = req.params
    const data = await connection('notification').select('*')
    .where(`iduserto`, iduser)
    .orderBy('day', 'desc')
    .orderBy('status', 'desc')
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })
    return res.status(200).json({ data })
  },
  async update(req, res) {
    const { id } = req.params
    const data = await connection('notification').update({ status: 1 }).where(`id`, id)
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })
    return res.status(200).json({ data })
  },
}