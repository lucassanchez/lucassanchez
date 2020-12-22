import http from 'http'
import fetch from 'isomorphic-unfetch'
import listen from 'test-listen'
import { apiResolver } from 'next/dist/next-server/server/api-utils'

describe('Retorna rota se existir arquivo ou pasta', () => {
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

  test('return folder content', async () => {
    const response = await fetch('http://localhost:3000/api/blog')
    const result = await response.json()

    expect(response.status).toBe(200)
    expect(result.type).toBe('list')
    expect(result.content).toEqual(
      [
        {
          link: '2020.02.20-hello-world',
          title: 'Hello World!',
        },
        {
          link: '2020.04.20-second-post',
          title: 'Second Post!',
        }
      ]
    )
  })

  test('return page content', async () => {
    const response = await fetch('http://localhost:3000/api/blog/2020.02.20-hello-world')
    const result = await response.json()

    expect(response.status).toBe(200)
    expect(result.type).toBe('page')
    expect(result).toHaveProperty('content.content', '<h1>Hello World!</h1>')
  })
})