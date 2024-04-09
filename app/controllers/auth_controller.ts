import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async login({ request }: HttpContext) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.query().where('email', email).firstOrFail()
    //check if given password is correct
    const verified = await hash.verify(user.password, password)
    if (!verified) {
      throw new Error('Invalid password')
    }

    const token = await User.accessTokens.create(user, ['*'], {
      expiresIn: '1 hour',
      name: 'auth-token',
    })

    //turn the token to a jwt token

    return {
      token,
    }
  }

  async logout({ auth }: HttpContext) {
    //grab user off the auth object
    const user = auth.user
    //if user exists, delete all tokens
    if (user) {
      //this will return all tokens for the user as a list
      const tokens = await User?.accessTokens.all(user)
      //loop through the tokens and delete them
      tokens.forEach(async (token) => {
        await User?.accessTokens?.delete(user, token.identifier)
      })
    }

    const check = auth.isAuthenticated
    console.log(check)

    return {
      message: 'Logged out successfully',
    }
  }
}
