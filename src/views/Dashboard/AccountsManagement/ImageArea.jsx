import { Stack } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'
import AccountsImg from '../../../assets/dashboard/avatar.png'

const ImageArea = () => {
    return (
        <Stack spacing={2}>
            <Image src={AccountsImg} height={200}/>
        </Stack>
    )
}

export default ImageArea