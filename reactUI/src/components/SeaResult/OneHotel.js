import React, { Fragment } from 'react';
import HotelImages from './HotelImages';

function OneHotel(props) {
  return (
    <Fragment>
      <h2>{props.res.propertyMetadata.propertyName}</h2>
      <div className="hotel-ima">
        <HotelImages img={props.res.images} />
      </div>
      <div className="propDetail">
        <span>{props.res.propertyType}</span>
        <span>{props.res.propertyMetadata.headline}</span>
        <span>{props.res.bedrooms}</span>
        <span>{props.res.bathrooms.full}</span>
        <span>{props.res.sleeps}</span>
        <span>{props.res.averagePrice.value}</span>
      </div>
    </Fragment>
  );
}

export default OneHotel;