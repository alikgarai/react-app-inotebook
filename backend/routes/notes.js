const express = require('express')
const router = express.Router()

router.get('/', (_, res) => {
    res.json(['Alik', 'Ankit'])
})

module.exports = router