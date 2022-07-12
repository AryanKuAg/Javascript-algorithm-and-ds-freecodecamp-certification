const express = require('express')
const app = express()
const request = require('request')
const parser = require('xml2json');
// require('./aws-configuration.js')
// require('./s3_listbuckets.js')

app.use(express.json())

const port = process.env.PORT || 7000;

app.get('/:id', (req, res) => {
    request('http://localhost:9444/' + req.params.id, function (error, response, body) {
  if(error){
    res.json({error: error})
  }else{
    const obj = parser.toJson(body, { object: true });
    res.json({status: response.statusCode, body: obj})
  }
//   console.log('statusCode:', response && response.statusCode); 
//   console.log('body:', body);
});
    // res.send('hello world!')
})


app.put('/:id', (req, res) => {
    request.put('http://localhost:9444/' + req.params.id, function (error, response, body) {
  if(error){
    res.json({error: error})
  }else{
    res.json({status: response.statusCode, body: body})
  }

});
} )

app.listen(port, () => {
    console.log('The server is up and running on port:', port)
})