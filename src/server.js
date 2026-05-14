import express from 'express'
import cors from 'cors'
import yt from './routes/yt.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {
  res.json({
    creator: 'TuNombre',
    status: true
  })
})

app.use('/api', yt)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Online ' + PORT)
})
