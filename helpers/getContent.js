
import fs from 'fs'
import matter from 'gray-matter'
import isContent from '../helpers/isContent'

const getContent = file => {
  const content = fs.readFileSync(file, 'utf8')
  return matter(content)
}

const getContentFolder = (path, folder = 'contents') => {
  const query = `${process.cwd()}/${folder}/${path}`
  const cwd = fs.readdirSync(query)
  const content = cwd.map(path => {
    const isMarkdownFile = isContent(path)

    if (isMarkdownFile) {
      const content = getContent(`${query}/${path}`)

      if (path === 'index.md') {
        return {
          type: 'content',
          fileName: path,
          data: content,
        }
      }
      return {
        type: 'content',
        fileName: path,
        title: content.data.title,
        slug: path.split('.md')[0],
      }
    } else {
      return {
        type: 'folder',
        folderName: path
      }
    }
  })

  return content.sort(function (a, b) {
    if (a.type > b.type) {
      return 1;
    }
    if (a.type < b.type) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
}

export default getContentFolder