import { UserFactory } from '#database/factories/user_factory'
import User from '#models/user'
import { test } from '@japa/runner'

test.group('Users controller test', () => {
  test('example test', async ({ assert }) => {
    assert.isTrue(true)
  })

  test('get all users', async ({ client }) => {
    const response = await client.get('http://localhost:3333/api/v1/users')
    response.assertStatus(200)
  })

  test('get single user', async ({ client }) => {
    const response = await client.get('http://localhost:3333/api/v1/users/2')
    response.assertStatus(200)
  })
})
