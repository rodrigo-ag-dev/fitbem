const connection = require('../database/connection.js')

module.exports = {
  async index(req, res) {
    const { id } = req.query
    let data = null
    if (id)
      data = await connection('user').select('*').where('id', id).orderBy('name')
    else
      data = await connection('user').select('*').orderBy('name')
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
    const { name, lastname, phone, gender, weight, height, email, password } = req.body
    const resp = await connection('user').insert({ name, lastname, phone, gender, weight, height, email, password }).returning('id')
    const calc = (weight / (height ? ((height / 100) * (height / 100)) : 1)).toFixed(0)
    const hist = await connection('history').insert({ iduser: resp[0].id, day: new Date().toISOString(), height, weight, bmi: calc })
    return res.status(200).json({ id: resp[0] })
  }
}