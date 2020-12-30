import React, { useState } from 'react'
import { useUnprotectedPage } from '../../hooks/useProtection'
import FormSignup from '../../components/formSignup/FormSignup'

const SignupPage = (props) =>{
    useUnprotectedPage();

    return (
        <>
            <FormSignup state={props.state}/>
        </>
    )
}

export default SignupPage