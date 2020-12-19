import React from 'react'
import FormLogin from '../../components/formLogin/FormLogin'
import { useUnprotectedPage } from '../../hooks/useProtection';

const LoginPage = () =>{
    useUnprotectedPage();

    return (
        <div>
            <FormLogin/>
        </div>
    )
}

export default LoginPage