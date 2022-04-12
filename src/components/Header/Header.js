import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
// import UseFirebase from '../../Hooks/UseFirebase';
import './Header.css';

const auth = getAuth(app);

const Header = () => {
    /*my hooks*/
    // const {user, handleSignOut} = UseFirebase();

    /*firebase hooks*/
    const [user] = useAuthState(auth);
    const logOut = ()=>{
        signOut(auth);
    }
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
                <button onClick={logOut}>Sign Out</button>
                :
                <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;