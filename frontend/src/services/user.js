import axios from 'axios'
import { goToFeed } from '../router/Coordinator';

export const signup = (body, history) => {

    axios.post(`http://localhost:3003/user/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response)
        console.log(response)
        // goToFeed(history)
    })
    .catch( (error) => {
        alert("Ocorreu um erro, tente novamente mais tarde!")
        console.log(error)
    })
};

export const login = (body, history) => {

    axios.post(`http://localhost:3003/users/login`, body)
    .then((response) => {
        localStorage.setItem("token", response)
        goToFeed(history)
    })
    .catch( (error) => {
        alert("Ocorreu um erro, tente novamente mais tarde!")
        console.log(error)
    })
};