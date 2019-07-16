var axios = require('axios')
var async = require('async')
var express = require('express')

function modDBData(data) {
  console.log('1')
  return new Promise(function(resolve,reject) {
    (Promise.resolve(data.forEach(d => {
      getHotelImages(d).then(function(result){
        return result
      })})
    ), function(err, res) {
      if (err) { reject(err) }
      else { resolve(res)}
    })
    console.log('4')
  })
}

async function getHotelImages(d) {
  let imgs = []
  d.images.forEach(img => {
    getImage(img).then(function(result) {
      imgs.push(result)
    })
  })
  await Promise.resolve(imgs)
}
function getImage(img) {
  return new Promise(function(resolve,reject) {
    axios.get(img.c9_uri, function(err, res) {
        if (err) reject(console.log("Error in fetching the image @",img.c9_uri,".Error is: ",err))
        else {
            resolve(new Buffer.from(res.data).toString('base64'))
        }
    })
  })
}

module.exports = modDBData;