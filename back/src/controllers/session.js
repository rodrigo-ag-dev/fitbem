const jwt = require('jsonwebtoken')
const connection = require('../database/connection.js')
const authConfig = require('../config/auth.json')

module.exports = {
  async create(req, res) {
    const { email, password } = req.headers
    if (!email)
      return res.status(401).json({ error: 'Informe um e-mail.' })
    if (!password)
      return res.status(401).json({ error: 'Informe a senha.' })
    const reg = await connection('user')
      .select(['id', 'name', 'lastname', 'email', 'height', 'weight', 'password'])
      .where('email', email)
      .first()
    if (!reg)
      return res.status(401).json({ error: 'Usuário não encontrado!' })
    if (password != reg.password)
      return res.status(401).json({ error: 'Não autorizado, verifique o usuário e a senha.' })
    reg.password = undefined
    const token = jwt.sign({ id: res.id }, authConfig.secret, { expiresIn: '9999 years' })
    return res.send({ reg, token })
  },
  async recordcount(req, res) {
    const { table } = req.params
    if (table) {
      try {
        const data = await connection(table).count('id as count').where({ "hidden": false }).orWhere({ "hidden": null }).first()
        if (data)
          return res.status(200).json({ recordCount: data.count })
      } catch (error) {
        console.log('error', error)
        return res.status(500).json({ recordCount: 0 })
      }
    }
    return res.status(200).json({ recordCount: 0 })
  },
}