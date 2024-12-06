import { Link } from 'react-router-dom';
import './Navbar.css'
import search_icon_light from '../assets/search-w.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1></h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Experience">Experience</Link>
                </li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className='search-box'>
                <input type="text" placeholder='Search'/>
                <img src={search_icon_light} alt=""/>
            </div>
            <img src="" alt="" className='toggle-icon'/>
        </div>
    )
}

export default Navbar