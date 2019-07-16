let mongoose = require('mongoose')

let imageSchema = new mongoose.Schema({
  "altText": {
    type: String,
    required: false,
  },
  "c6_uri": {
    type: String,
    required: true,
  },
  "c9_uri": {
    type: String,
    required: true,
  }
}) 

let bathSchema = new mongoose.Schema({
  "full": {
    type: String,
    required: true
  },
  "half": {
    type: String,
    required: true
  },
  "toiletOnly": {
    type: String,
    required: true
  }
})

let priceSchema = new mongoose.Schema({
  "currencyUnits": {
    type: String,
    required: true
  },
  "periodType": {
    type: String,
    required: true
  },
  "value": {
    type: String,
    required: true
  }
})

let propMetaSchema = new mongoose.Schema({
  "headline": { type: String },
  "propertyName": { type: String }
})

let hotelDetailSchema = new mongoose.Schema({
  "location": {
    type: String,
    required: true
  },
  "images": [imageSchema],
  "bedrooms": {
    type: String,
    required: true,
  },
  "bathrooms": bathSchema,
  "propertyType": {
    type: String,
    required: true
  },
  "sleeps": {
    type: Number,
    required: true
  },
  "petsAllowed": {
    type: Boolean,
    required: true
  },
  "averagePrice": priceSchema,
  "averageRating": {
    type: Number,
    default: 0
  },
  "reviewCount": {
    type: Number,
    default: 0
  },
  "detailPageUrl": {
    type: String,
    required: true
  },
  "instantBookable": { type: String },
  "listingNumber": { type: Number },
  "propertyMetadata": propMetaSchema,
  "reviewBadges": [{
    "name": {
      type: String
    }
  }],
  "geoCode": {
    "latitude": {
      type: Number,
      required: true
    },
    "longitude": {
      type: Number,
      required: true
    }
  }
})

// module.exports = hotelDetailSchema

module.exports = mongoose.model("hotelDetail", hotelDetailSchema)