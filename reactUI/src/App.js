import React, { useEffect } from "react";
import SearchHotel from './containers/SearchHotel';
// import { connect } from 'react-redux';

function App(props) {

  // useEffect(() => {
  //   props.getTxn();
  // }, []);
// 
  return (
    // <div style={{display: 'inline-grid', paddingLeft: '50px'}}>
      <SearchHotel />
    // </div>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getTxn: () => dispatch({ type: "TXN_GET_RECORD" })
//   }
// }

// export default connect(null, mapDispatchToProps)(App);
export default App;