import '../../src/style/style.css'

function NavBar(){
    return(
        <nav>
            <ul>
                <li className='Titre'>Emric PIRRERA</li>
            </ul>
            <ul>
                <li className='ChoixMenu'>About</li>
            </ul>
            <ul>
                <li className='ChoixMenu'>Projects</li>
            </ul>
            <ul>
                <li className='ChoixMenu'>Skills</li>
            </ul>
            <ul>
                <li className='ChoixMenu'>Contact</li>
            </ul>
        </nav>
    );
}
export default NavBar;