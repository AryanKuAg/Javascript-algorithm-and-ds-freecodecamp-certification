const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const port = 5000;

app.get('/', (req,res) => {
    res.send("Hey there! We're in love!!!!")
})

app.get("/something", (req, res) =>{
    res.json({name: 'aryan cooper', age: '20 saal ka berojgar launda'})
})

app.listen(port, () => {
    console.log('This app is listening on port:', port);
})