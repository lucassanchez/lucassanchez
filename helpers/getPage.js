
import fs from 'fs'
import matter from 'gray-matter'
import marked from 'marked'

const getPage = (path, folder = 'contents') => {
  const filePath = `${process.cwd()}/${folder}/${path}.md`
  const file = fs.readFileSync(filePath, 'utf8')
  const { content: rawContent, data } = matter(file)
  const content = marked(rawContent)

  return {
    content,
    data
  }
}

export default getPage