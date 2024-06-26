import React from 'react';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../components/slice/useUser';
import { useNavigate } from 'react-router-dom'
import Form from './Form';

const SignUp = () => {
    const dispatch = useDispatch()
    const push = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(login({
                email: user.email,
                token: user.refreshToken,
                id: user.uid,
            }))
            push('/profile')
        })
        .catch(console.error)
    }
    
    return (
        <div>
            <Form title='register' handleClick={handleRegister}/>
        </div>
    );
};

export default SignUp;