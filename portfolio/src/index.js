import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './Component/Navbar.jsx';
import './style/style.css'
import videoSrc from './style/video/galaxy.mp4';
import imgSrc from './style/img/moi3.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/> 
    <video autoPlay loop muted className="videoBackground">
        <source src={videoSrc} type="video/mp4" />
    </video>
    <div className='presentationContainer'>
      <div className='imageContainer'>
        <div className='imageBackground'></div>
        <img className='imagePresentationAccueil' alt='moi' src={imgSrc}/>
      </div>
      <div className='textPresentationContainer'>
        <p className='TitreAccueil'>EMRIC PIRRERA</p>
        <p className='ProfessionAccueil'>Computer Science Student</p>
      </div>
    </div>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();