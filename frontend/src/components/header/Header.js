import React from 'react'
import imagetic_w from '../../assets/imagetic1.png'
import imagetic_b from '../../assets/imagetic2.png'


const Header = (props) =>{
    const logo = props.stateImage ? imagetic_w : imagetic_b

    return (
        <div>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Header