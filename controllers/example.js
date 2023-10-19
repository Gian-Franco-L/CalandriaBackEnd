import { ExampleModel } from '../models/example'
import { validateExample, validatePartialExample } from '../schemas/example.js'

export class ExampleController {
  static async getAll (req, res) {
    const { filter } = req.query
    const examples = await ExampleModel.getAll({ filter })
    res.json(examples)
  }

  static async getById (req, res) {
    const { id } = req.params
    const example = await ExampleModel.getById({ id })
    if (example) return res.json(example)
    res.status(404).json({ message: 'X not found' })
  }

  static async create (req, res) {
    const result = validateExample(req.body)

    if (!result.succes) {
      return res.status(400).json({ error: JSON.parse(result.error.messaje) })
    }

    const newExample = await ExampleModel.create({ input: result.data })

    res.status(201).json(newExample)
  }

  static async delete (req, res) {
    const { id } = req.params

    const result = await ExampleModel.delete({ id })

    if (result === false) return res.status(404).json({ messaje: 'X not found' })

    return res.json({ message: 'X deleted' })
  }

  static async update (req, res) {
    const result = validatePartialExample(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedExample = await ExampleModel.update({ id, input: result.data })

    return res.json(updatedExample)
  }
}
