const express = require('express')
const router = express.Router()

router.get('/', (_, res) => {
    res.json({ name: 'Alik' })
})

module.exports = router