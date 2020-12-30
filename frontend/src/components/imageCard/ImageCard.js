import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getDetailImageById, getFeed } from '../../services/images'
import close from '../../assets/close.svg'
import { CardImage, ContainerCard, DivModal, ImageFeed, imgClose, Typography } from './Styles';

const ImageCard = (props) =>{
    const history = useHistory();
    const [modal, setModal] = useState(false);
    const [imageDetail, setImageDetail] = useState([])
    const [images, setImages] = useState([])
    const token = localStorage.getItem('token');

    const onClickDetail = (id) =>{
        setModal(!modal)
        getDetailImageById(id, token, setImageDetail)
    };

    const oncLickClose = () =>{
        setModal(!modal)
    };

    useEffect(() =>{
        getFeed(token, setImages)

    }, [token]);

    console.log(images)

    return (
      <>
        <ContainerCard>
                {images && images.map((image) =>{
                    return (
                        <CardImage>
                            <ImageFeed onClick={()=>onClickDetail(image.id)} src={image.tag} alt="imagem"/><br/>
                            <Typography state={props.state}>{image.subtitle}</Typography>
                        </CardImage>
                    );
                })}
            </ContainerCard>
            <DivModal state={modal}>
                {imageDetail && imageDetail.map((item) =>{
                    return (
                        <>
                            <img src={item.tag} alt="imagem"/>
                            <p>
                                {item.subtitle}
                                {item.date}
                                {item.collection}
                                {item.file}
                            </p>
                        </>
                    );
                })}
                <imgClose onClick={oncLickClose} src={close} alt="fechar"/>
            </DivModal>
        </>
    );
}

export default ImageCard