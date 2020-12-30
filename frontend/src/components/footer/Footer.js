import React from 'react'
import { DivFooter, Typography } from './Styles'

const Footer = (props) =>{

    return (
        <DivFooter>
            <Typography state={props.state}>Created by ClaudiaTrevisan</Typography>
        </DivFooter>
    )
}

export default Footer