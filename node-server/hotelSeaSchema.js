// import hotelDetailSchema from './hotelDetailSchema';
const HotelDet = require('./hotelDetailSchema')
let mongoose = require('mongoose')

let mapViewSchema = new mongoose.Schema({
  "neLat": { type: String },
  "neLong": { type: String },
  "swLat": { type: String },
  "swLong": { type: String }
})

let hotelSeaSchema = new mongoose.Schema({
  // "headlineTitle": {
  //   type: String,
  //   required: true
  // },
  // "searchTerm": {
  //   "description": { type: String },
  //   "name": { type: String },
  //   "termId": { type: String }
  // },
  "location": {
    type: String,
    required: true
  },
  "listings": [HotelDet],
  "pageTitle": { type: String  },
  "metaDescription": { type: String },
  "metaKeywords": { type: String },
  "mapViewport": mapViewSchema,
})

module.exports = mongoose.model("HotelSea", hotelSeaSchema)