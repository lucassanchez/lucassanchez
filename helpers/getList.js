
import fs from 'fs'
import matter from 'gray-matter'
import getLink from './getLink'

const getContent = path => {
  const content = fs.readFileSync(path, 'utf8')
  return matter(content)
}

const getList = (path, folder = 'contents') => {
  const query = `${process.cwd()}/${folder}/${path}`
  const cwd = fs.readdirSync(query)
  const content = cwd.map(fileName => {
    const path = `${query}/${fileName}`
    const { data: { title } } = getContent(path)
    const link = getLink(fileName)

    return {
      link,
      title
    }
  })

  return content
}

export default getList