/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

//??????? Test route ?????????//////
router.get('/', async () => {
  return { hello: 'world' }
})
router.post('login', [AuthController, 'login'])

router
  .group(() => {
    /////<ME ROUTES///////

    ///////USER ROUTES////////
    router.get('users', [UsersController, 'index'])
    router.get('users/:id', [UsersController, 'show'])
    router.post('users', [UsersController, 'store'])
    router.put('users/:id', [UsersController, 'update'])
    router.delete('users/:id', [UsersController, 'destroy'])

    ///////AUTH ROUTES////////
    router.post('logout', [AuthController, 'logout'])
    router.get('check', async ({ auth }) => {
      return auth.isAuthenticated
    })
  })
  .prefix('api/v1')
  .use(middleware.auth({ guards: ['api'] }))
