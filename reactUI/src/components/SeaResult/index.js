import React from 'react';
import OneHotel from './OneHotel';

function SearchResult(props) {
  if (props.res !== undefined) {
    return <p>{props.res}</p>;
    // let a = props.res.map(onehotel =>
    //   <OneHotel hotel={onehotel} />
    //   );
    // return (
    //   <div>{a}</div>
    // );
  } else return null;
}

export default SearchResult;