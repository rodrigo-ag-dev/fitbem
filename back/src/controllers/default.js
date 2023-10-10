const pagination = require('./pagination.js')
const connection = require('../database/connection.js')

const _where = (where, condition) => {
  let whr = ''
  if (where && where != '')
    whr += ' and '
  return whr += condition
}

const insert = async (table, req, res, requiredFields) => {
  if (requiredFields && requiredFields.length > 0) {
    let required = []
    let exists = false
    for (const e in requiredFields) {
      for (const key in req.body)
        exists = exists || (requiredFields[e].toUpperCase() == key.toUpperCase())
      if (!exists)
        required.push(requiredFields[e])
      exists = false
    }
    if (required != '')
      return res.status(406)
        .json({ "message": "Os campos a seguir são obrigatórios: ".concat(required.toString().replaceAll(',', ', ')) })
  }
  return res.status(201).send()
}

const update = async (table, req, res, requiredFields) => {
  return res.status(202).send()
}

const get = async (table, req, res, filter = null, useHiddenFilter = true, idField = null, orderField = null) => {
  const data = async () => {
    const { id } = req.params
    const { name, description, fields, hidden } = req.query
    const keyField = idField ? idField : 'id'

    const sql = () => connection(table)
      .select(fields ? fields : '*')

    let order = '${keyField}'
    if (orderField) {
      order = `${orderField}`
    }
    let where = ''
    if (id)
      where += _where(where, `${keyField} = ${id}`)

    if (name)
      where += _where(where, `name like '%${name}%'`)

    if (description)
      where += _where(where, `description like '%${description}%'`)

    if (filter)
      where += _where(where, filter)

    if (useHiddenFilter) {
      if (!hidden || hidden == 0)
        where += _where(where, 'hidden = false')
      if (hidden == 1)
        where += _where(where, 'hidden = true')
    }

    if (where && where != '')
      return await sql()
        .where(connection.raw(where))
        .orderBy(order, 'desc')
    else
      return await sql()
        .orderBy(order, 'desc')
  }
  return await pagination(await data(), req, res)
}

const remove = async (table, req, res) => {
  const { id } = req.params
  const { restore } = req.headers

  const incident = await connection(table).select('*').where({ id }).first()
  if (!incident || !incident.id)
    return res.status(404).json({ error: 'Código não encontrado.' })
  else if (!Object.keys(incident).includes('hidden'))
    await connection(table).where({ id }).delete()
  else {
    const hidden = { hidden: !restore }
    await connection(table).where({ id }).update(hidden)
  }
  return res.status(204).send()
}

module.exports = { insert, update, get, remove }