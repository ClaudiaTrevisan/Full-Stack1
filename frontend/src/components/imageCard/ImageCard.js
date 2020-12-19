import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getFeed } from '../../services/images'

const ImageCard = () =>{
    const history = useHistory();
    const [modal, setModal] = useState(false);
    const [images, setImages] = useState([])
    const token = localStorage.getItem('token');

    const onClickDetail = () =>{
        
    }

    useEffect(() =>{
        getFeed(token, setImages)

    }, [token]);

    console.log(images)

    return (
        <div>
            {images && images.map((image) =>{
                return (
                    <div>
                        {image.tag}
                        {image.subtitle}
                    </div>
                );
            })}
        </div>
    )
}

export default ImageCard