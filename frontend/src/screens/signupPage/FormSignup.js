import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToLogin } from '../../router/Coordinator'
import { signup } from '../../services/user'

const FormSignup = () =>{
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

    const onClickSignup = (event) => {
        event.preventDefault();
        const body = {
            "name": form.name,
            "email": form.email,
            "nick_name": form.nick_name,
            "password": form.password
        }
        signup(body, history);
        resetState();
    };

    const handleClick = () => {
          setToggleVisibility({ showPassword: !toggleVisibility.showPassword})
    };

    return (
        <div>
            <form onSubmit={onClickSignup}>
                <input
                    type="text"
                    value={form.name}
                    name="name"
                    onChange={handleInputChange}
                    required
                    placeholder="Nome"
                />
                <input
                    type="text"
                    value={form.email}
                    name="email"
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    title="email@email.com"
                />      
                <input
                    type="text"
                    value={form.nick_name}
                    name="nick_name"
                    onChange={handleInputChange}
                    required
                    placeholder="Nickname"
                />                
                <input
                    type="text"
                    value={form.password}
                    name="password"
                    onChange={handleInputChange}
                    required
                    placeholder="Senha"
                    title="Mínimo 6 caracteres"
                    type={toggleVisibility.showPassword ? 'text' : 'password'}
                />
                {/* <div>
                    <Eye onClick={handleClick} visible={toggleVisibility.showPassword}/>
                </div> */}
                <button>Cadastrar</button>
            </form> 
            <p onClick={()=>goToLogin(history)}>Já possui cadastro? Clique aqui.</p>
        </div>
    )
}

export default FormSignup