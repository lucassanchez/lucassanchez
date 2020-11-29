import http from 'http'
import fetch from 'isomorphic-unfetch'
import listen from 'test-listen'
import { apiResolver } from 'next/dist/next-server/server/api-utils'

import { routes } from './[...routes]'


describe.skip('Retorna rota se existir arquivo ou pasta', () => {
  let server
  let url

  beforeAll(async done => {
    server = http.createServer((req, res) => apiResolver(req, res, undefined, routes))
    url = await listen(server)
    done()
  })

  afterAll(done => {
    server.close(done)
  })

  test('return folder name', async () => {
    const response = await fetch('http://localhost:3000/api/blog')
    const jsonResult = await response.json()

    expect(response.status).toBe(200)
    expect(jsonResult.folder).toBe('blog')
  })

  test('return folder content if have index.md file', async () => {
    const response = await fetch('http://localhost:3000/api/blog')
    const jsonResult = await response.json()

    expect(response.status).toBe(200)
    expect(jsonResult.folder).toBe('blog')
    expect(jsonResult.content).toBe({
      type: 'content',
      title: 'Bem vindo ao Blog!'
    })
  })

//   test('return folder', async () => {
//     const response = await fetch('http://localhost:3000/api/pages')
//     const { path, content } = await response.json()

//     expect(response.status).toBe(200)
//     expect(path).toBe('pages')
//     expect(content).toBe(undefined)
//   })

//   test('return path and content if exist a index.md file at folder', async () => {
//     const response = await fetch('http://localhost:3000/api/about-me')
//     const { path, content } = await response.json()

//     expect(response.status).toBe(200)
//     expect(path).toBe('about-me')
//     expect(content).toMatchObject({
//       title: 'About Me'
//     })
//   })

//   test('return folder and file', async () => {
//     const response = await fetch('http://localhost:3000/api/pages/lorem-ipsum')
//     const jsonResult = await response.json()

//     expect(response.status).toBe(200)
//     expect(jsonResult.path).toBe('pages')
//     expect(jsonResult.slug).toBe('lorem-ipsum')
//   })

//   test('return folder nesting and file', async () => {
//     const response = await fetch('http://localhost:3000/api/pages/lorem-ipsum/some-name')
//     const jsonResult = await response.json()

//     console.log('jsonResult', jsonResult)
//     expect(response.status).toBe(200)
//     expect(jsonResult.path).toBe('pages/lorem-ipsum')
//     expect(jsonResult.slug).toBe('some-name')
//   })

//   test('return folder nesting and file', async () => {
//     const response = await fetch('http://localhost:3000/api/pages/lorem-ipsum/some-name/bigger')
//     const jsonResult = await response.json()

//     console.log('jsonResult', jsonResult)
//     expect(response.status).toBe(200)
//     expect(jsonResult.path).toBe('pages/lorem-ipsum/some-name')
//     expect(jsonResult.slug).toBe('bigger')
//   })
})