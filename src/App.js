import React, { Component } from 'react'; // , { useState, useEffect } 
import './App.css';
import logo from './images/Colored Logo@200.png';
 var slideIndex = 0;
class App extends Component{
  
componentDidMount() {
    this.timerID = setInterval(
      () => this.carousel(),
      5000
    );
   
  }
carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    
}

  render() {
    return (
      <div className="blue-flair hospital-ward-image w3-display-container">
       <div>
         <div className="w3-container w3-display-topleft w3-padding med-logo-con">
           <img src={logo} width="200" className="w3-animate-opacity"/>
         </div>
         <div className="med-ditop mySlides">
           <h1 className="w3-text-white med-title w3-animate-top w3-center">Welcome to Medom </h1>
           <div className="med-text-big">
             <span className="w3-animate-left">Hospital Management System Created By </span>
             <span className="w3-animate-right">Avocodes NG</span>
           </div>
           <div className="w3-center w3-padding-24 w3-animate-bottom">
             <button className="w3-button med-xbtn w3-padding-large w3-round w3-border-white w3-border w3-round-medium med-hover-bg w3-text-white ">Explore</button>
           </div>
         </div>
   
         <div className="med-ditop mySlides mySlides2">
           <h1 className="w3-text-white med-title w3-animate-top w3-center">Medom for Hospitals</h1>
           <div className="med-text-big">
             <span className="w3-animate-left">It helps Tackles issues in Hospitals </span>
             <span className="w3-animate-right">in Nigeria</span>
           </div>
           <div className="w3-center w3-padding-24 w3-animate-bottom">
             <button className="w3-button med-xbtn w3-padding-large w3-round w3-border-white w3-border w3-round-medium med-hover-bg w3-text-white ">Learn More</button>
           </div>
         </div>
       </div>
      </div>
     );
  }
}

export default App;
