import vine from '@vinejs/vine'

export const createApplicationValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().email().optional(),
    phone: vine.string().optional(),
    url: vine.string().optional(),
    cover_letter: vine.string().optional(),
    listing_url: vine.string().optional(),
    status: vine.string().optional(),
  })
)

export const updateApplicationValidator = vine.compile(
  vine.object({
    name: vine.string().optional(),
    email: vine.string().email().optional(),
    phone: vine.string().optional(),
    url: vine.string().optional(),
    cover_letter: vine.string().optional(),
    listing_url: vine.string().optional(),
    status: vine.string().optional(),
  })
)
