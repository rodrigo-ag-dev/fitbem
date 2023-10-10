const connection = require('../database/connection.js')

module.exports = {
  async index(req, res) {
    const data = await connection('user').select('*').orderBy('name')
    return res.json(data)
  },
  async get(req, res) {
    const { email } = req.params
    const data = await connection('user').select('id').where(`email`, email)
    if (!data || data.length == 0)
      return res.status(401).json({ error: 'Operação não permitida.' })
    return res.status(200).json({ ok: 'ok.' })
  },
  async delete(req, res) {
    const { id } = req.params
    const incident = await connection('user').where('id', id).first()
    if (!incident.id)
      return res.status(401).json({ error: 'Operação não permitida.' })

    await connection('user').where('id', id).delete()

    return res.status(204).send()
  },
  async create(req, res) {
    const { name, lastName, phone, gender, weight, height, email, password } = JSON.parse(req.headers.body)
    const resp = await connection('user').insert({ name, lastName, phone, gender, weight, height, email, password })
    return res.status(200).json({ id: resp.id })
  }
}