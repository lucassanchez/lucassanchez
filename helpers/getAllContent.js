
import fs from 'fs'

const getAllContent = (folder = 'contents', orderNatural) => {
  const query = `${process.cwd()}/${folder}`

  const cwd = fs.readdirSync(query, { withFileTypes: true })
  const content = cwd.map(({ name }) => {
    return {
      params: {
        section: name
      }
    }
  })

  return orderNatural ? content : content.reverse()
}

export default getAllContent