import getPage from '../../../helpers/getPage'

const file = (req, res) => {
  const { section, page } = req.query
  const path = `${section}/${page}`
  const content = getPage(path)

  res.statusCode = 200

  res.json({
    type: 'page',
    content
  })
}

export default file 