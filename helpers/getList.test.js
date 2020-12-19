import getList from '../helpers/getList'

describe('Retorna conteudo da pasta .seeds', () => {
  const folder = '.seeds';

  test('conteúdo da pasta /blog', async () => {
    const path = 'blog'
    const content = getList(path, folder)

    expect(content).toMatchObject([
      {
        link: '2020.02.20-hello-world',
        title: 'Hello World!',
      },
      {
        link: '2020.04.20-second-post',
        title: 'Second Post!',
      }
    ])
  })
})