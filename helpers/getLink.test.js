import getLink from './getLink'

describe('Retorna conteudo da pasta .seeds', () => {
  test('conteúdo da pasta /blog', async () => {
    const file = '2020.02.20-hello-world.md'
    const link = '2020.02.20-hello-world'

    expect(
      getLink(file)
    ).toBe(link)
  })
})