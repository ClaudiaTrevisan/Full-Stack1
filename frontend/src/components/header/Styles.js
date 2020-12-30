import styled from 'styled-components'

export const DivHeader = styled.div`
    display: flex;
    justify-content: ${(props)=> props.state ? "space-between" : "flex-start"};
    box-shadow: ${(props)=> props.state ? "0px 5px 14px 0px #0000003b" : "none"};
`;

export const ImgLogo = styled.img`
    width: ${(props)=> props.state ? "150px" : "270px"};
    height: ${(props)=> props.state ? "50px" : "90px"};
    padding-left: 20px;
    margin-top: ${(props)=> props.state ? "5px" : "2em"};
`;

export const ImgToggle = styled.img`
    width: ${(props)=> props.state ? "30px" : "40px"};
    padding-top: ${(props)=> props.state ? "15px" : "6em"};
    margin-left: ${(props)=> props.state ? "0px" : "4em"};
    margin-right: ${(props)=> props.state ? "1.2em" : "0px"};
`;