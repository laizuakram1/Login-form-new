import  { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
            console.log(user);
        })
        .catch(error =>{
            console.error(error.message);
        })
    }
    return {
        user,
        setUser,
        SignInGoogle
    }
};

export default UseFirebase;