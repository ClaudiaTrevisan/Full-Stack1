import styled from 'styled-components'

export const DivFooter = styled.div`
    width: 100vw;
    height: 22px;
`;

export const Typography = styled.p`
    color: ${(props)=> props.state ? "#E1E1E1" : "black"};
    margin: 0;
    text-align: center;
    margin-bottom: 10px;
    font-size: .8rem;
`;