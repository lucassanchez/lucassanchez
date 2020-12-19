import getPage from '../helpers/getPage'

describe('Retorna conteudo da pasta', () => {
  const folder = '.seeds';
  
  test('Se conter index.md, retornar conteúdo', async () => {
    const path = 'blog/2020.02.20-hello-world'
    const content = getPage(path, folder)

    expect(content).toHaveProperty('content', '<h1>Hello World!</h1>')
    expect(content).toHaveProperty('data.title', 'Hello World!')
  })
})