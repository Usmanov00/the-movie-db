import React from "react";
import "./Spinner.css"
import RingLoader from "react-spinners/RingLoader";




const Spinner = () => {
  return (
    <div className="spinner-container">
      <RingLoader color={'rgb(239,160,126)'} size={100}/>
    </div>
  );
};

export default Spinner;