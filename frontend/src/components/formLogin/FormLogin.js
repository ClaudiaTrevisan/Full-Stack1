import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToSignUp } from '../../router/Coordinator'
import { login } from '../../services/user'
import eyeoff from '../../assets/visibility.svg'
import eyeon from '../../assets/eye-close-up.svg'
import { ContainerForm, Typography, Form, Input, DivImgEye, ImgEye, ButtonLogin } from "./Styles"

const FormLogin = (props) =>{
    const history = useHistory();
    const {form, handleInputChange, resetState} = useForm({info: "", password: ""})

    const [toggleVisibility, setToggleVisibility] = useState({
        showPassword: false
    });

    const eye = toggleVisibility.showPassword ? eyeon : eyeoff;

    const onClickLogin = (event) => {
        event.preventDefault();
        login(form, history);
        props.functionChange();
        resetState();
    };

    const handleClick = () => {
        setToggleVisibility({ showPassword: !toggleVisibility.showPassword})
    };

    return (
        <ContainerForm>
            <Form onSubmit={onClickLogin}>
                <Input
                    type="text"
                    value={form.info}
                    name="info"
                    onChange={handleInputChange}
                    required
                    placeholder="Email ou Nickname"
                    title="email@email.com"
                />
                <Input
                    type="text"
                    value={form.password}
                    name="password"
                    onChange={handleInputChange}
                    required
                    placeholder="Senha"
                    title="Mínimo 6 caracteres"
                    type={toggleVisibility.showPassword ? "text" : "password"}
                />
                <DivImgEye>
                    <ImgEye src={eye} onClick={handleClick} visible={toggleVisibility.showPassword}/>
                </DivImgEye>
                <ButtonLogin state={props.state}>Entrar</ButtonLogin>
            </Form>
            <Typography state={props.state} onClick={()=>goToSignUp(history)}>Não possui cadastro? Clique aqui.</Typography>
        </ContainerForm>
    );
}

export default FormLogin