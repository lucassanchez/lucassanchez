
import fs from 'fs'
import matter from 'gray-matter'

const getPage = (path, folder = 'contents') => {
  const file = `${process.cwd()}/${folder}/${path}.md`
  const content = fs.readFileSync(file, 'utf8')

  return matter(content)
}

export default getPage