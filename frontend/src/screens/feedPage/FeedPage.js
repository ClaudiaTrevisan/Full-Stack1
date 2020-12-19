import React from 'react'
import { useProtectedPage } from '../../hooks/useProtection'
import ImageCard from '../../components/imageCard/ImageCard'

const FeedPage = () =>{
    useProtectedPage();

    return (
        <div>
            <ImageCard/>
        </div>
    );
}

export default FeedPage