import React from 'react';
import banner from './images/Asset 9@500x.png';
import landImage from './images/computer-3343887_1920.jpg';
import './App.css';
import logo from './images/Colored Logo@200.png';

function App() {
    return (
        <div className="w3-display-container">
             <div className="w3-container w3-display-topleft w3-padding med-logo-con">
                <img src={logo} width="200" className="w3-animate-opacity"/>
            </div>
            

            <div className="w3-row">
                <div className="w3-half">
                    <img src={landImage} alt={landImage} style={{width:"100%",height:"100vh"}}/>
                </div>
                <div className="w3-half med-bg2 w3-display-container" style={{height:"100vh"}}>
                    <div className="w3-display-middle" style={{width:"96%"}}>
                        <h1 className="w3-text-white med-bold med-title w3-animate-top w3-center">Medom General Hospital </h1>
                        <div className="med-text-big">
                             Hospital Management System Created By Avocodes NG
                        </div>
                        <div className="w3-center w3-padding-24">
                            <button className="w3-button med-xbtn w3-padding-large w3-round w3-border-white w3-border w3-round-medium med-hover-bg w3-text-white ">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
