import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    first_name: vine.string(),
    last_name: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    first_name: vine.string(),
    last_name: vine.string(),
    email: vine.string().email(),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)

export const changePasswordValidator = vine.compile(
  vine.object({
    password: vine.string().minLength(8),
    new_password: vine.string().minLength(8),
  })
)
