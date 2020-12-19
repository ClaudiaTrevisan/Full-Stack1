import axios from 'axios'

export const getFeed = (token, setState) =>{

    axios.get(`http://localhost:3003/image`, {
        headers: {
            authorization: token
        }
    })
    .then((response) =>{
        setState(response.data)
    })
    .catch((error) =>{
        alert("Ocorreu um erro. Tente novamente mais tarde.")
    })

};

export const getDetailImageById = (id, token) =>{
    let image = {}
    
    axios.get(`http://localhost:3003/image/?id=${id}`, {
        headers: {
            authorization: token
        }
    })
    .then((response) =>{
        image = response.data
    })
    .catch((error)=>{
        alert("Ocorreu um erro. Tente novamente mais tarde")
    })

    return image
};

export const insertImage = (input, token) =>{
    axios.post(`http://localhost:3003/image/new`, input, {
        headers: {
            authorization: token
        }
    })
    .then((response) =>{
        alert("Sucesso!")
    })
    .catch((error) =>{
        alert("Ocorreu um erro. tente novamente mais tarde")
    })
};