const mongoose = require('mongoose')

const houseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number, 
        required: true
    }
})


module.exports = mongoose.model('house', houseSchema)
