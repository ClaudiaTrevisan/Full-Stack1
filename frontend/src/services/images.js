import axios from 'axios'

export const getFeed = (token) =>{
    const feed = []
    axios.get(`http://localhost:3003/user/feed`, {
        headers: {
            authorization: token
        }
    })
    .then((response) =>{
        feed = response.data
    })
    .catch((error) =>{
        alert("Ocorreu um erro. Tente novamente mais tarde.")
    })

    return feed
}