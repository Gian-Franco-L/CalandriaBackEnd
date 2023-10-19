import { Router } from 'express'

import { ExampleController } from '../controllers/examples'

export const examplesRouter = Router()

examplesRouter.get('/', ExampleController.getAll)
examplesRouter.get('/:id', ExampleController.getById)
examplesRouter.post('/', ExampleController.create)
examplesRouter.delete('/:id', ExampleController.delete)
examplesRouter.patch('/:id', ExampleController.update)
