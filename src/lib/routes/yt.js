import { Router } from 'express'
import { cobalt } from '../lib/cobalt.js'

const router = Router()

router.get('/ytmp3', async (req, res) => {

  const { url } = req.query

  if (!url)
    return res.json({
      status: false,
      msg: 'Falta url'
    })

  const data = await cobalt(url, true)

  res.json(data)
})

router.get('/ytmp4', async (req, res) => {

  const { url } = req.query

  if (!url)
    return res.json({
      status: false,
      msg: 'Falta url'
    })

  const data = await cobalt(url, false)

  res.json(data)
})

export default router
