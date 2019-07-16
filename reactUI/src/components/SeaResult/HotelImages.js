import React from 'react';

function HotelImages(props) {
  let a = props.images.map(img => 
    <img src={img}></img>
  );
  return a;
}

export default HotelImages;