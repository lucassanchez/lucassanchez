import getAllContent from '../helpers/getAllContent'

describe('Retorna conteudo da pasta .seeds', () => {
  const folder = '.seeds';

  test('retorna listagem de conteúdo', async () => {
    const content = getAllContent(folder)

    expect(content).toMatchObject([
      { params: { section: 'pages' } },
      { params: { section: 'blog' } }
    ])
  })
})