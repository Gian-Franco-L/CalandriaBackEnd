const z = require('zod')

const exampleSchema = z.object({
  example1: z.string({
    invalid_type_error: 'X must be a string',
    required_error: 'X is required.'
  }),
  example2: z.number().int().min(0).max(1000),
  example3: z.string(),
  example4: z.string().url({
    message: 'X must be a valid URL'
  }),
  example5: z.array(
    z.enum(['A', 'B', 'C']),
    {
      required_error: 'X is required.',
      invalid_type_error: 'X must be an array'
    }
  )
})

const validateExample = (object) => {
  return exampleSchema.safeParse(object)
}

module.exports = { validateExample }
