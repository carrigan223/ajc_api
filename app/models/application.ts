import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

// table.increments('id')
// table.string('name').notNullable()
// table.string('email')
// table.string('phone')
// table.string('ulid').unique().notNullable()
// table.string('url')
// table.text('cover_letter')
// table.string('listing_url')
// table.string('status')
// table.timestamp('created_at')
// table.timestamp('updated_at')

export default class Application extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare phone: string

  @column()
  declare ulid: string

  @column()
  declare url: string

  @column()
  declare coverLetter: string

  @column()
  declare listingUrl: string

  @column()
  declare status: 'interested' | 'applied' | 'interviewing' | 'hired' | 'rejected' | 'ghosted'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
