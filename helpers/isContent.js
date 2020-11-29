
import fs from 'fs'
import matter from 'gray-matter'

const isContent = item => {
  const contents = item.split('.')
  const isMarkdownFile = contents[contents.length - 1] === 'md'

  return isMarkdownFile
}

export default isContent