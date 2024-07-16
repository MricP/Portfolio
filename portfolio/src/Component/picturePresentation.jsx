import '../../src/style/style.css'
import React from 'react';
import imgSrc from '../style/img/moi3.png'

function picturePresentation(){
    return(    
        <div className='imageContainer'>
            <div className='imageBackground'></div>
            <img className='imagePresentationAccueil' alt='moi' src={imgSrc}/>
        </div>   
    );
}
export default picturePresentation;