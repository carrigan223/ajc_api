import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

//? Controller to handle User CRUD operations
export default class UsersController {
  /**
   * Index method to list all users
   * @param ctx HttpContext
   * @returns Promise<void>
   */
  async index({}: HttpContext): Promise<User[]> {
    //? Fetch all users
    const users = await User.all()
    //? Return all users and http status code
    return users
  }

  /**
   * Show method to get a single user
   * @param ctx HttpContext
   * @returns Promise<void>
   */
  async show({ params }: HttpContext): Promise<User> {
    //? Fetch user by ID
    const user = await User.findOrFail(params.id)
    //? Return user
    return user
  }

  /**
   * Store method to create a new user
   * @param ctx HttpContext
   * @returns Promise<void>
   */
  async store({ request }: HttpContext): Promise<User> {
    const payload = await request.validateUsing(createUserValidator)
    //? Create user
    const user = await User.create(payload)
    //? Return user
    return user
  }

  /**
   * Update method to update a user
   * @param ctx HttpContext
   * @returns Promise<void>
   */
  async update({ request, params }: HttpContext): Promise<User> {
    //? Fetch user by ID
    const user = await User.findOrFail(params.id)
    //? Update user
    user.merge(await request.validateUsing(createUserValidator))
    await user.save()
    //? Return user
    return user
  }

  /**
   * Destroy method to delete a user
   * @param ctx HttpContext
   * @returns Promise<void>
   */
  async destroy({ params }: HttpContext): Promise<void> {
    //? Fetch user by ID
    const user = await User.findOrFail(params.id)
    //? Delete user
    await user.delete()
  }
}
