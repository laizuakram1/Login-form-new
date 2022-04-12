import { getAuth } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import app from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';


// import UseFirebase from '../../Hooks/UseFirebase';

const auth = getAuth(app);

const Login = () => {
    /*this is my create hooks*/
    // const {SignInGoogle} = UseFirebase(auth);

    /* another way for using hooks. this is a react firebase hooks*/
   const [signInWithGoogle] = useSignInWithGoogle(auth);
   

    return (
        <div>
            <h2 className='text-center'>Login</h2>
            <Form className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="Login">
                   Login
                </Button>
            </Form>
           <div className='text-center'>
           <Button onClick={() =>signInWithGoogle()} variant="link">Sign In with Google</Button>
           </div>
        </div>
    );
};

export default Login;