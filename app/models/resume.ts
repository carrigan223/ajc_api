import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'

import type UserType from './user.js'
import User from './user.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
// table.increments('id')
// table.string('title').notNullable()
// table.integer('user_id').unsigned().references('id').inTable('users')
// table.text('description')
// table.string('file_path')
// table.timestamp('created_at')
// table.timestamp('updated_at')

export default class Resume extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare userId: number

  @column()
  declare description: string

  @column()
  declare filePath: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => User)
  user!: HasOne<typeof UserType>
}
