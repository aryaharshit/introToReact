import React from 'react';
import Button from '@mui/material/Button';

const CommonButton = ({children, color, size, variant, sx, disabled, onClick}) => {
    // function test() {
    //     console.log("HELLO")
    //     window.location.assign('http://localhost:3000/dashboard')
    // }

    return(
        <Button
        onClick={onClick}
        color = {color}
        size = {size}
        variant = {variant}
        sx = {sx}
        disabled = {disabled}>
           {children}
        </Button>
    )
}

export default CommonButton; 