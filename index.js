const express = require('express')
require('dotenv').config()
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
const querystring = require('querystring');
const { query } = require('express')


app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, PUT"
}))
app.use(bodyParser.json())

app.get('/',(req,res,next) =>{
  let requestParams = querystring.decode(req.originalUrl.split('/?').join(''))
  console.log(requestParams)
  if(requestParams.id == 1){
    res.status(200)
    res.send({
      title: 'Hello this is first post',
      imageUrl: 'https://media.istockphoto.com/photos/mediterranean-pizza-picture-id503818102?s=612x612'
    })
  }else if(requestParams.id == 2){
    res.status(200)
    res.send({
      title: 'Hello this is last post',
      imageUrl: 'https://image.shutterstock.com/image-photo/fresh-delicious-italian-pizza-mushrooms-600w-383820172.jpg'
    })
  }
  
})

app.listen(process.env.PORT || 4500, () =>{
  console.log(`server started on ${process.env.PORT}`)
})