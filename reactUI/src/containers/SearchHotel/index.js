import React, { useState } from 'react';
import './SeaHotel.css';
import axios from 'axios';
import SeaResult from '../../components/SeaResult';
import Pagination from '../Pagination';

const URL="http://localhost:8081";

function seaHotel(props) {

  const [input, setInput] = useState('');
  const [res, setRes] = useState([]);
  const handleSea = () => {
    if (input == '') setRes("Please enter a place to search.");
    else {
      let headers = {'Content-Type': 'application/json'};
      axios.get(URL+'/hotelsea', {
        headers: headers,
        params: {
          searchString: input,
          limit: 20,
          offset: 0,
          page: 1
        }
      })
      .then(res => setRes("Value received"))
      .catch(err => {
        console.log("Error is:", err);
        setRes("No Results Found");
      });
    }
  };
  
  return (
    <div className="sea-page">
      <div className="hotelsea">
        <input type="text" placeholder="Search for Hotels...." onInput={e => setInput(e.target.value)} className="words"/>
        <button type="submit" className="button" onClick={handleSea}>
         <img src="./src/assets/searchicon.png" className="icon"/>
        </button>
      </div>
      <div className="sea-res">
        <SeaResult res={res} />
        {/* <Pagination res={res} /> */}
      </div>
    </div>
  )
}

export default seaHotel;