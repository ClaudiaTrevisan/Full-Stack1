import styled from 'styled-components'

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

export const CardImage = styled.div`
`;

export const ImageFeed = styled.img`
    width: 97vw;
    height: 50vh;
    border: none;
`;

export const Typography = styled.p`
    margin: 0;
    margin-bottom: 20px;
    margin-left: 10px;
    font-weight: 600;
    color: ${(props)=> props.state ? "#E1E1E1" : "black"};
`;

export const DivModal = styled.div`
    display: ${(props)=> props.state ? "flex" : "none"};
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: absolute;
`;

export const imgClose = styled.img`
    width: 50px;
`;