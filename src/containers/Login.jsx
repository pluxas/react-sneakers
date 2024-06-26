import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import Form from './Form';
import { login } from '../components/slice/useUser';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const push = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
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
            <Form title='sign in' handleClick={handleLogin}/>
        </div>
    );
};

export default Login;