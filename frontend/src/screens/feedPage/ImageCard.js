import React, { useEffect, useState } from 'react'
import { useProtectedPage } from '../../hooks/useProtection'
import { getFeed } from '../../services/images'

const ImageCard = () =>{
    useProtectedPage()
    const [images, setImages] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() =>{
        setImages(getFeed(token))
    }, [token]);

    return (
        <div>
            
        </div>
    )
}

export default ImageCard