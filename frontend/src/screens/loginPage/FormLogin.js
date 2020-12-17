import React from 'react'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../router/Coordinator'
import { login } from '../../services/user'


const FormLogin = () =>{
    const history = useHistory()
    const {form, handleInputChange, resetState} = useForm({info: "", password: ""})

    const [toggleVisibility, setToggleVisibility] = useState({
        showPassword: false
      })

    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, history)
        resetState()
    }

    const handleClick = () => {
          setToggleVisibility({ showPassword: !toggleVisibility.showPassword})
      }

    return (
        <div>
            <form onSubmit={onClickLogin}>
                <input
                    type="text"
                    value={form.info}
                    name="info"
                    onChange={handleInputChange}
                    required
                    placeholder="Email ou Nickname"
                    title="email@email.com"
                />
                <input
                    type="text"
                    value={form.password}
                    name="password"
                    onChange={handleInputChange}
                    required
                    placeholder="Email ou Nickname"
                    title="Mínimo 6 caracteres"
                    type={toggleVisibility.showPassword ? 'text' : 'password'}
                />
                <div>
                    <Eye onClick={handleClick} visible={toggleVisibility.showPassword}/>
                </div>
                <button>Entrar</button>
            </form>
            <p onClick={()=>goToSignUp(history)}>Não possui cadastro? Clique aqui.</p>
        </div>
    );
}

export default FormLogin