const connectToDB = require("./db")
const express = require('express')

connectToDB();
const app = express()
const port = 3000

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})