const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const app = express()
const path = require('path')

const port = process.env.PORT || 4000;
const publicDirectory = path.join(__dirname, 'public')
const secretKey = 'thealemantrixisgreat';

// middleware
app.use(express.static(publicDirectory))

app.get('/password/:password', async (req, res) => {
    const password = req.params?.password
    console.log(typeof password)
    const pass = await bcrypt.hash(password, 8)
    console.log(pass)

    const isMatch = await bcrypt.compare(password + 's', pass)
    console.log('isMatch:', isMatch)

    res.send()
})

app.get('/jwt', (req, res) => {

    const token = jwt.sign({name:'aryan agrawal'},secretKey)

    console.log(jwt.verify(token, secretKey))

    res.json({token: token})
})

app.get('/verify/:token', (req, res) => {
    const token = req.params.token;

    console.log('token', jwt.verify(token, secretKey))

    try{
        const isGood = jwt.verify(token, secretKey )

        res.json({isCorrectToken: isGood})

    } catch(e) {
        res.json({error: 'Your token seems incorrect!'})
    }

})


app.listen(port, () => {
    console.log("The server is up and running on port:", port)
})