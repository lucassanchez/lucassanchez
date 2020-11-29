import getContent from '../helpers/getContent'

describe('Retorna conteudo da pasta', () => {
  const folder = '.seeds';
  
  test('Se conter index.md, retornar conteúdo', async () => {
    const path = 'blog'
    const content = getContent(path, folder)

    expect(content).toMatchObject([
      {
        type: 'content',
        fileName: 'index.md',
        data: {
          content: '<h1>Bem vindo ao Blog!</h1>',
          data: {
            title: 'Bem vindo ao Blog!'
          },
          isEmpty: false,
          excerpt: ''
        }
      },
      {
        type: 'folder',
        folderName: 'folder'
      }]
    )
  })

  test('Se não for index, retornar como listagem de posts', async () => {
    const path = 'blog/folder'
    const content = getContent(path, folder)

    expect(content).toMatchObject([
      {
        type: 'content',
        fileName: '2020.02.20-hello-world.md',
        slug: '2020.02.20-hello-world',
        title: 'Hello World!',
      },
      {
        type: 'folder',
        folderName: 'other-folder'
      }]
    )
  })

  test('return folder name', async () => {
    const path = 'blog/folder/other-folder'
    const content = getContent(path, folder)

    expect(content).toMatchObject([
      {
        type: 'content',
        fileName: '2020.10.10-other-post.md',
        slug: '2020.10.10-other-post',
        title: 'Other Post!',
      }]
    )
  })

  test('return folder name', async () => {
    const path = 'blog/folder/other-folder/2020.10.10-other-post'
    const content = getContent(path, folder)

    expect(content).toMatchObject([
      {
        type: 'content',
        fileName: '2020.10.10-other-post.md',
        slug: '2020.10.10-other-post',
        title: 'Other Post!',
      }]
    )
  })
})