import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import styled from 'styled-components'

const WrapContainer = styled.div`
    min-height: 100vh;
    background-color: ${(props) => props.state ? "#1c1c1c" : "white"};
`;

const Main = styled.main`
  align-items:center;
  flex: 1;
`;


const DefaultPage = (props) =>{
    
    return(
        <WrapContainer state={props.state}>
            <Header 
                function={props.function} 
                state={props.state} 
                stateFeed={props.stateFeed}
            />
            <Main>
                {props.children}
            </Main>
            <Footer state={props.state}/>
        </WrapContainer>
    );
}

export default DefaultPage