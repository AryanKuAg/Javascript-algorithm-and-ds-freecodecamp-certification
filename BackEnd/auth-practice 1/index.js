const express = require('express')
const bcrypt = require('bcryptjs')
const app = express()
const path = require('path')

const port = process.env.PORT || 4000;
const publicDirectory = path.join(__dirname, 'public')

// middleware
app.use(express.static(publicDirectory))

app.get('/password/:password', async (req, res) => {
    const password = req.params?.password
    console.log(typeof password)
    const pass = await bcrypt.hash(password, 8)
    console.log(pass)

    res.send()
})


app.listen(port, () => {
    console.log("The server is up and running on port:", port)
})