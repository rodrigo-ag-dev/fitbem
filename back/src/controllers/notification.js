const connection = require('../database/connection.js')

module.exports = {
  async count(req, res) {
    const { iduser } = req.params
    const data = await connection('notification').count('*').where('status', 0)
      .where(`iduserto`, iduser)
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Sem dados.' })

    return res.status(200).json({ count: data[0].count })
  },
  async index(req, res) {
    const { iduser } = req.params
    const data = await connection('notification').select('*')
      .where(`iduserto`, iduser)
      .orderBy('status', 'asc')
      .orderBy('day', 'desc')
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
  async insert(req, res) {
    const { iduserto, iduserfrom, type, status, message, day } = req.body
    const resp = await connection('notification').insert({ iduserto, iduserfrom, type, status, message, day })
    if (!resp || resp.length == 0)
      return res.status(203).json({ error: 'Sem dados.' })
    return res.status(201).json(req.body)
  },
}