const express = require('express')
require('./mongoose-init.js')
const app = express()

const HouseModel = require('./house-schema.js')

const port = process.env.PORT || 7000;

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/query', (req, res) => {
    let name = req.query?.name;
    let age = req.query?.age;

    if(name && age){
        // res.json({name:name, age: age})
        const genHouse = new HouseModel({name: name, year: age})
        console.log(genHouse)
        genHouse.save().then((d) => {
            res.json({createdData: d})
        }).catch((_) => {
            res.json({e: 'Not able to make your data'})
        })
    }else {
        res.json({error: 'NOthng found here!'})
    }
})

app.listen(port, () => {
    console.log("The server is up and running on port:", port)
})