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

// app.get('/', (req, res)=> {

//     res.json(process)
// })


app.listen(port, () => {
    console.log('The Server is up and running on port:',port)
})