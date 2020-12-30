import React from 'react'
import { useProtectedPage } from '../../hooks/useProtection'
import ImageCard from '../../components/imageCard/ImageCard'

const FeedPage = (props) =>{
    useProtectedPage();

    return (
        <>
            <ImageCard state={props.state}/>
        </>
    );
}

export default FeedPage