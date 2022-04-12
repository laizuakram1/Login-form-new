import  { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const SignInGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user)
            
        })
        .catch(error =>{
            console.error(error.message);
        })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then( ()=>{

        })
    }

    /* change sign in and sign out button*/
    useEffect( ()=>{
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    })
    
    return {
        user,
        SignInGoogle,
        handleSignOut
    }
};

export default UseFirebase;