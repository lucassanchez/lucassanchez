import getList from '../../../helpers/getList'

const section = (req, res) => {
  const { section } = req.query
  const content = getList(section)

  res.json({
    type: 'list',
    content
   })
}

export default section 