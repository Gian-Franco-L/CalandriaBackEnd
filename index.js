import express, { json } from 'express'
import { corsRouter } from './middlewares/cors.js'
import { exampleRouter } from './routes/example.js'

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(json())
app.use('/', corsRouter)
app.use('/example', exampleRouter)

app.listen(PORT, () => {
  console.log(`server listening on port https://localhost:${PORT}`)
})
