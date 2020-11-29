import isContent from '../helpers/isContent'

describe('Retorna conteudo da pasta', () => {
  test('Its a markdown file', async () => {
    const item = '2020.index.md'
    const content = isContent(item)

    expect(content).toBe(true)
  })

  test('Its not a markdown file', async () => {
    const item = 'md.index'
    const content = isContent(item)

    expect(content).toBe(false)
  })

  test('Its a markdown file', async () => {
    const item = 'index.md'
    const content = isContent(item)

    expect(content).toBe(true)
  })

  test('Its a folder', async () => {
    const item = 'blog'
    const content = isContent(item)

    expect(content).toBe(false)
  })
})