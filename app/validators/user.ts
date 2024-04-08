import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    first_name: vine.string(),
    last_name: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)
