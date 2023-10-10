const pagination = async (data, req, res) => {
  let size = 1000000
  let response = []
  if (data.length <= size)
    return await res.json(data)
  else {
    if (req.headers && req.headers.current_page && req.headers.current_page > 0) {
      const page = req.headers.current_page
      let start = 0
      if (page > 1)
        start = ((page - 1) * size)
      const end = start + size
      response = data.slice(start, end)
    }
  }
  res.setHeader('last_page', Math.trunc(data.length / size))
  return res.status(200).json(response)
}

module.exports = pagination