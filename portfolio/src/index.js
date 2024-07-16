import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './Component/Navbar.jsx';
import './style/style.css'
import videoSrc from './style/video/galaxy.mp4';
import About from './Component/About.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/> 
    <video autoPlay loop muted className="videoBackground">
        <source src={videoSrc} type="video/mp4" />
    </video>
    <div className='presentationContainer'>
      <div className='textPresentationContainer'>
        <h1 className='TitreAccueil'>EMRIC PIRRERA</h1>
        <p className='ProfessionAccueil'>Computer Science Student</p>
      </div>
    </div>
    <About/>
    
  </React.StrictMode>
);


reportWebVitals();