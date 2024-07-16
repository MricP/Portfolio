import React from "react";
import '../../src/style/style.css';
import PicturePresentation from './picturePresentation.jsx'

function About(){
    return(
        <div>
            <h2 id='About'>ABOUT ME</h2>
            <div className='aboutMeContainer'>
                <PicturePresentation/>
                <p className='aboutText'>
                <span className='accentuation'>Hello !</span> 
                I am a french computer science student in my second year at IUT Lyon 1. 
                I love spending time coding and encountering new challenges. I’m highly adaptable to new challenges and projects.
                At IUT Lyon 1, I've built a strong foundation in web development, software development and algorithms. 
                I enjoy creating innovative solutions and collaborating with others to achieve common goals.
                Explore my portfolio to see some of the projects I’ve worked on. 
                Let's connect and share our enthusiasm for technology and innovation!
                </p>
            </div>
        </div>
        );
}
export default About;