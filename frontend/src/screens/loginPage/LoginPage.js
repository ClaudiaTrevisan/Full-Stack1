import React from 'react'
import FormLogin from '../../components/formLogin/FormLogin'
import { useUnprotectedPage } from '../../hooks/useProtection';
import styled from 'styled-components'


const LoginPage = (props) =>{
    useUnprotectedPage();

    return (
        <>
            <FormLogin state={props.state}/>
        </>
    )
}

export default LoginPage