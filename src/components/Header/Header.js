import React from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';
import './Header.css';

const Header = () => {
    const {user, handleSignOut} = UseFirebase();
    return (
        <div className='header my-3 text-center'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName}</span>
                {user?.uid
                ?
                <button onClick={handleSignOut}>Sign Out</button>
                :
                <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;