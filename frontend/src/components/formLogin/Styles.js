import styled from 'styled-components'

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8em;
`;

export const Typography = styled.p`
    color: ${(props)=> props.state ? "#E1E1E1" : "black"};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    width: 80vw;
    height: 50px;
    margin: 5px;
    padding-left: 8px;
    font-size: 1.5rem;
    border-radius: 8px;

    ::placeholder{
        font-size: 1.1rem;
    }

    :focus{
        outline: none;
    }
`;

export const DivImgEye = styled.div`
    position: relative;
`;

export const ImgEye = styled.img`
    width: 30px;
    position: absolute;
    top: -45px;
    right: -150px;
`;

export const ButtonLogin = styled.button`
    margin-top: 15px;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props)=> props.state ?  "#E1E1E1" : "black"};
    color: ${(props)=> props.state ?  "black" : "#E1E1E1"};
    font-size: 1.1rem;
`;