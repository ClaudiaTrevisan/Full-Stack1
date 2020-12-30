import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToLogin } from '../../router/Coordinator'
import { signup } from '../../services/user'
import eyeoff from '../../assets/visibility.svg'
import eyeon from '../../assets/eye-close-up.svg'
import { ContainerForm, Input, DivImgEye, ImgEye, ButtonSignup, Form, Typography } from './Styles'

const FormSignup = (props) =>{
    const history = useHistory()
    const {form, handleInputChange, resetState} = useForm({
        name: "", 
        email: "",
        nick_name: "",
        password: ""
    });

    const [toggleVisibility, setToggleVisibility] = useState({
        showPassword: false
    });

    const eye = toggleVisibility.showPassword ? eyeon : eyeoff

    const onClickSignup = (event) => {
        event.preventDefault();
        signup(form, history);
        props.functionChange();
        resetState()
    };

    const handleClick = () => {
        setToggleVisibility({ showPassword: !toggleVisibility.showPassword})
    };

    return (
        <ContainerForm>
            <Form onSubmit={onClickSignup}>
                <Input
                    type="text"
                    value={form.name}
                    name="name"
                    onChange={handleInputChange}
                    required
                    placeholder="Nome"
                />
                <Input
                    type="text"
                    value={form.email}
                    name="email"
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    title="email@email.com"
                />      
                <Input
                    type="text"
                    value={form.nick_name}
                    name="nick_name"
                    onChange={handleInputChange}
                    required
                    placeholder="Nickname"
                />                
                <Input
                    type="text"
                    value={form.password}
                    name="password"
                    onChange={handleInputChange}
                    required
                    placeholder="Senha"
                    title="Mínimo 6 caracteres"
                    type={toggleVisibility.showPassword ? 'text' : 'password'}
                />
                <DivImgEye>
                    <ImgEye src={eye} onClick={handleClick} visible={toggleVisibility.showPassword}/>
                </DivImgEye>
                <ButtonSignup state={props.state}>Cadastrar</ButtonSignup>
            </Form> 
            <Typography state={props.state} onClick={()=>goToLogin(history)}>Já possui cadastro? Clique aqui.</Typography>
        </ContainerForm>
    );
}

export default FormSignup