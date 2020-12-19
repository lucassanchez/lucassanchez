import getList from '../../../helpers/getList'

const section = (req, res) => {
  const { section } = req.query
  const content = getList(section)

  console.log('section', section)
  console.log('content', content)

  res.json({
    type: 'list',
    content
   })
}

export default section 