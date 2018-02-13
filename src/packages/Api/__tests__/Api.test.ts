import Api from '../Api'
import { api } from '../index'

describe('Api Tests', () => {
  test('init', () => {
    // case: new
    expect(
      new Api() instanceof Api
    ).toBeTruthy()
  })
  test('usage', async () => {
    // prep: load api
    api.load({
      test: {
        go: {
          url: 'https://reqres.in/api/users',
          method: 'GET',
        }
      }
    })
    // case: success
    await expect(
      api('test.go')
    ).resolves.toBeInstanceOf(Object)
    // case: correct data
    await expect(
      api('test.go')
    ).resolves.toHaveProperty('page')
  })
})