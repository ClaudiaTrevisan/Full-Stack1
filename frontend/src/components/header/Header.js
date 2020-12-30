import React from 'react'
import logo from '../../assets/imagetic1.png'
import toggleOn from '../../assets/toggle-on.svg'
import toggleOff from '../../assets/toggle-off.svg'
import { DivHeader, ImgLogo, ImgToggle } from './Styles'


const Header = (props) =>{
    const toggle = props.state ? toggleOff : toggleOn;

    return (
        <DivHeader state={props.stateFeed} stateTogle={props.state}>
            <ImgLogo state={props.stateFeed} src={logo} alt="logo"/>
            <ImgToggle state={props.stateFeed} onClick={props.function} src={toggle} alt="toggle"/>
        </DivHeader>
    )
}

export default Header