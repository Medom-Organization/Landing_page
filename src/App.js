import React from 'react'; // , { useState, useEffect } 
import './App.css';
import logo from './images/Colored Logo@200.png';

function App() {
  return (
   <div className="blue-flair hospital-ward-image w3-display-container">
    <div>
      <div className="w3-container w3-display-topleft w3-padding med-logo-con">
        <img src={logo} width="200" className="w3-animate-opacity"/>
      </div>
      <div className="med-ditop">
        <h1 className="w3-text-white med-title w3-animate-top w3-center">Welcome to Medom </h1>
        <div className="med-text-big">
          Hospital Management System Created By Avocodes NG
        </div>
        <div className="w3-center w3-padding-24">
          <button className="w3-button med-xbtn w3-padding-large w3-round w3-border-white w3-border w3-round-medium med-hover-bg w3-text-white ">Explore</button>
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
