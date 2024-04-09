import vine from '@vinejs/vine'

export const createResumeValidator = vine.compile(
  vine.object({
    title: vine.string(),
    description: vine.string(),
    file: vine.file({
      size: '2mb',
      extnames: ['pdf', 'docx'],
    }),
  })
)

export const updateResumeValidator = vine.compile(
  vine.object({
    title: vine.string(),
    description: vine.string(),
  })
)
