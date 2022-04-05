import './header.css'
import {FaUser, FaShoppingCart, FaHome, FaSearch } from 'react-icons/fa'
import { Link, useMatch } from 'react-router-dom';

const Header = (porops) => {
    // let match = useMatch()
    return ( 
        <header className="main-header">
            <nav>
                <div className='nav-right'>
                    <Link to='user'><FaUser></FaUser></Link>
                    <Link to='shopping'><FaShoppingCart></FaShoppingCart></Link>
                    <Link to='/'><FaHome></FaHome></Link>
                    <Link to='search'><FaSearch></FaSearch></Link>
                </div>
                <div className="nav-left">
                    <div className="register-login-btn">
                        <FaUser></FaUser>
                        <Link to='login'>ثبت نام / ورود</Link>
                    </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;

