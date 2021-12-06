const connectToDB = require("./db")
const express = require('express')

connectToDB();
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})