const express = require('express')
const app = express()
var fs = require('fs')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var mongoose = require('mongoose')
var cors = require('cors')
// var async = require('async')
var modDBData = require('./modDBData')
const HotelDetSea = require('./hotelDetailSchema')
const uri = "mongodb+srv://dbUser:dbPassword@cluster0-9gekk.mongodb.net/test?retryWrites=true&w=majority"
let HotelDet = require('./hotelDetailSchema')

//
mongoose.connect(uri, { useNewUrlParser: true })
          .then(() => console.log("Connection successful"))
          .catch(err => console.log("Error connection: ", err))
//
//Run first time to load the sample data to MondoDB cluster
// let file = JSON.parse(fs.readFileSync('./data.json'))

// async.forEach(file,function(h,callback) {
//   h["location"] = "Singapore"
//   let hotel = new HotelDet(h)
//   hotel.save()
//       .catch(err => console.log(console.log(err)))
// })
//
app.get('/hotelsea', cors(), (req,res,next) => {
  console.log('Received GET request: ')
  console.log(req.query)
  let offset = req.query.offset, page = req.query.page;
  let limit = req.query.limit;
  let searchString = req.query.searchString;
  // let hotels = HotelDetSea.find({ "location": searchString })
  HotelDetSea.find({ location:  "Singapore"})
              .skip(offset*(page-1))
              .limit(parseInt(limit, 10))
              .then(hotels => {
                // console.log(hotels[0])
                // console.log(hotels.length)
                modDBData(hotels).then(function(result) {
                  hotels.forEach((h,i) => {
                    h.images = result[i]
                  })
                  res.send(hotels)
                }, function(err) {
                  console.log(err)
                  res.send(err)
                })
                return hotels
              })
              .catch(err => {
                console.log(err)
                res.send(err)
              })
})
//
app.listen(8081, () => {
  console.log('NodeJS Server listening on port 8081!')
})
//
app.use(function (req, res, next) {
  //Website allowed to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  //Request methods allowed
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  //Request headers allowed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  //Set to TRUE if you expect the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  //Pass to next layer of middleware
  next();
})