const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', (req, res) => {
    const user = User(req.body)
    user.save()
    res.send('Saved Successfully');
})

module.exports = router