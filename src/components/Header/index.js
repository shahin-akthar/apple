import {FaSearch, FaShoppingBag, FaApple} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
    <div>
        <ul className='header-container'>
            <li>
            <Link to="/">
                    <FaApple/>
            </Link>
            </li>
            <li>
            <Link to="/store">
                Store
            </Link>
            </li>
            <li>
            <Link to="/mac">
                Mac
            </Link>
            </li>
            <li>
            <Link to="/vision">
                Vision
            </Link>
            </li>
            <li>
            <Link to="/airpods">
                AirPods
            </Link>
            </li>
            <li>
            <Link to="/tv-home">
                Tv&Home
            </Link>
            </li>
            <li>
                    < FaSearch className='bag'/>
            </li>
            <li>
                <Link to="/cart">
                <FaShoppingBag className='bag'/>
                </Link>
            </li>
        </ul>
    </div>
)

export default Header