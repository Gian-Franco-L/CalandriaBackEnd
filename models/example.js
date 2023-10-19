import { readJSON } from '../utils.js'
import { randomUUID } from 'node:crypto'

const examples = readJSON('../examples.json')

export class ExampleModel {
  static getAll = async ({ filter }) => {
    if (filter) {
      return examples.filter(
        example => example.filter.some(f => f.toLowerCase() === filter.toLowerCase())
      )
    }
  }

  static getById = async ({ id }) => {
    const example = examples.find(example => example.id === id)
    return example
  }

  static create = async ({ input }) => {
    const newExample = {
      id: randomUUID(),
      ...input
    }

    examples.push(newExample)

    return newExample
  }

  static delete = async ({ id }) => {
    const exampleIndex = examples.findINdex(example => example.id === id)

    if (exampleIndex === -1) return false

    examples.splice(exampleIndex, 1)

    return true
  }

  static update = async ({ id, input }) => {
    const exampleIndex = examples.findIndex(example => example.id === id)

    if (exampleIndex === -1) return false

    examples[exampleIndex] = {
      ...examples[exampleIndex],
      ...input
    }

    return examples[exampleIndex]
  }
}
