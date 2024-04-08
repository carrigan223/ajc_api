/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'

//??????? Test route ?????????//////
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    ///////USER ROUTES////////
    router.get('users', [UsersController, 'index'])
    router.get('users/:id', [UsersController, 'show'])
    router.post('users', [UsersController, 'store'])
    router.put('users/:id', [UsersController, 'update'])
    router.delete('users/:id', [UsersController, 'destroy'])
  })
  .prefix('api/v1')
