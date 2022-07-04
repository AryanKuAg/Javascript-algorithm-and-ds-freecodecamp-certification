const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const anotherFileRouter = require('./anotherFile')

const publicDirectory = path.join(__dirname,'/public')

// middlewares
app.use(express.static(publicDirectory))
app.use(anotherFileRouter)
app.use(cors())
const port = process.env.PORT || 5555;

app.use((req, res, next) => {
    console.log('middleware')
next()
})


app.get('/poop', (req, res)=> {
    const just = {t:'aryanaaa'}
    console.log(req.url)
    res.send(undefined)

})



app.listen(port, () => {
    console.log('The Server is up and running on port:',port)
})