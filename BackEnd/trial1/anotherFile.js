const express= require('express')
const multer = require('multer')
const router = express.Router();

const upload = multer({
    dest: 'images'
})

router.get('/something', (req, res)=> {
    res.send('This is a router file you learner!')
})

router.post('/upload',upload.single('upload'),(req, res)=>{
    res.send()
})

// module.exports = router;
module.exports = router;