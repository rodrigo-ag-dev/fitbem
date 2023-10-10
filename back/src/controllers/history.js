const pagination = require('./pagination.js')
const connection = require('../database/connection.js')
const { insert, update, get, remove } = require('./default.js')

module.exports = {
  async insert(req, res) {
    return insert('history', req, res, ['iduser', 'day', 'height', 'weight', 'bmi'])
  },
  async update(req, res) {
    return update('history', req, res, [])
  },
  async get(req, res) {
    return get('history', req, res, null, false, 'iduser', 'day')
  },
  async remove(req, res) {
    return remove('history', req, res)
  },
  async chart(req, res) {
    const { id } = req.params
    const sql = async () => connection.raw(`
      select extract('month' from day) as month, extract('year' from day) as year, bmi from history h where idhistory  in (
        select max(idhistory) as id
        from HISTORY 
        where iduser = ${id} and
              extract('year' from day) = extract('year' from current_date) and 
              extract('month' from day) = extract('month' from current_date)
        union all 
        select max(idhistory)
        from HISTORY 
        where iduser = ${id} and
              extract('year' from day) = extract('year' from current_date) and 
              extract('month' from day) = extract('month' from current_date) - 1
        union all 
        select max(idhistory)
        from HISTORY 
        where iduser = ${id} and
              extract('year' from day) = extract('year' from current_date) and 
              extract('month' from day) = extract('month' from current_date) - 2
        union all 
        select max(idhistory)
        from HISTORY 
        where iduser = ${id} and
              extract('year' from day) = extract('year' from current_date) and 
              extract('month' from day) = extract('month' from current_date) - 3
        union all 
        select max(idhistory)
        from HISTORY 
        where iduser = ${id} and
              extract('year' from day) = extract('year' from current_date) and 
              extract('month' from day) = extract('month' from current_date) - 4
        union all 
        select max(idhistory)
        from HISTORY 
        where iduser = ${id} and
              extract('year' from day) = extract('year' from current_date) and 
              extract('month' from day) = extract('month' from current_date) - 5
        union all 
        select max(idhistory)
        from HISTORY 
        where iduser = ${id} and
              extract('year' from day) = extract('year' from current_date) and 
              extract('month' from day) = extract('month' from current_date) - 6
        )
        order by extract('month' from day)    
    `)

    return await pagination((await sql()).rows, req, res)
  }
}