import React from 'react';
import './Header.css';
import Logo from '../src/PngItem_12080.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ cart, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src={Logo} />
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' type="text" />
                <SearchIcon className='header__SearchIcon' />
            </div>


            <div className='header__nav'>

                <div className="header__option">
                    <span className='header__option1'>
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <Link to={!user && '/signin'}>
                        <span onClick={handleAuthentication} className='header__option2'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </Link>
                </div>

                <Link to='/orders'>
                    <div className='header__option'>
                        <span className='header__option1'>
                            Returns
                        </span>
                        <span className='header__option2'>
                            & Orders
                        </span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__option1'>
                        Your
                    </span>
                    <span className='header__option2'>
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionCart">
                        <ShoppingBasketIcon />
                        <span className="header__option2 header__cartCount">
                            {cart?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
