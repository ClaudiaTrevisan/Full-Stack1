import React, { useState } from 'react'
import { useUnprotectedPage } from '../../hooks/useProtection'
import FormSignup from '../../components/formSignup/FormSignup'

const SignupPage = () =>{
    useUnprotectedPage();

    return (
        <div>
            <FormSignup/>
        </div>
    )
}

export default SignupPage