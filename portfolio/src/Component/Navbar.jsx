import '../../src/style/style.css'
import React from 'react';

function NavBar(){
    return(
        <div className='content'>
            <nav className='navbar'>
            <ul>
                <li className='Titre'>EMRIC PIRRERA</li>
            </ul>
            <ul>
                <li className='ChoixMenu'><a  href='#About'>About Me</a></li>
            </ul>
            <ul>
                <li className='ChoixMenu'><a href='#'>Projects</a></li>
            </ul>
            <ul>
                <li className='ChoixMenu'><a href='#'>Skills</a></li>
            </ul>
            <ul>
                <li className='ChoixMenu'><a href='#'>Contact</a></li>
            </ul>
        </nav>
        </div>
        
    );
}
export default NavBar;