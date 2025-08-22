import React from 'react';
import useAuth from '../../hook/useAuth';

const Login = () => {
    const {user,setUser}=useAuth()
    return (
        <div>
            login
        </div>
    );
};

export default Login;